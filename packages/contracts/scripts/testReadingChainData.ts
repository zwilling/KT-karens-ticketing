import { ethers } from "hardhat";
import { getDeployedContractAddress } from "./utils";
import { NFTTicketCollection } from "../typechain-types/contracts/NFTTicketCollection";
import { getTicketBalances } from "./readChainData";

/**
 * Creates tickets by minting them for the organizer.
 */
async function main() {
  // parameters for test interaction
  const [deployer, organizer, buyer] = await ethers.getSigners();

  const contractAddr = await getDeployedContractAddress("NFTTicketCollection#NFTTicketCollection");
  const curatedTicketList = [contractAddr];

  const ticketBalances = await getTicketBalances(organizer.address, curatedTicketList);

  for (const [contractAddr, balance] of Object.entries(ticketBalances)) {
    console.log(`Balance of ${organizer.address} in contract ${contractAddr}: ${balance}`);
  }
  console.log(`Done`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
