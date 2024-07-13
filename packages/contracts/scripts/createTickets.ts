import { ethers } from "hardhat";
import { getDeployedContractAddress } from "./utils";
import { NFTTicketCollection } from "../typechain-types/contracts/NFTTicketCollection";

/**
 * Creates tickets by minting them for the organizer.
 */
async function main() {
  // parameters for test interaction
  const [deployer, organizer, buyer] = await ethers.getSigners();
  const ticketID = 0;
  const amountToMint = 10;
  const recipient = organizer.address;

  const contractAddr = await getDeployedContractAddress("NFTTicketCollection#NFTTicketCollection");

  console.log(`Using contract at ${contractAddr}`);
  console.log(`Minting ${amountToMint} tickets of type ${ticketID} for ${recipient}`);


  const factory = await ethers.getContractFactory("NFTTicketCollection");
  const nftContract = await factory.attach(contractAddr) as NFTTicketCollection;

  await nftContract.connect(organizer).mint(recipient, ticketID, amountToMint);

  const balance = await nftContract.balanceOf(recipient, ticketID);
  console.log(`Balance of ${recipient} for ticket ${ticketID}: ${balance.toString()}`);
  console.log(`Done`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
