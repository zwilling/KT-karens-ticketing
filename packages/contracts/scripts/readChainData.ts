import { ethers } from "hardhat";
import { NFTTicketCollection } from "../typechain-types/contracts/NFTTicketCollection";


/**
 * Returns the ticket balances of a user's wallet.
 * @param walletAddr - The address of the wallet to check.
 * @param curatedTicketList - The list of nft contract addresses to check.
 * @param ticketID - The ticket ID to check. The default is 0.
 * @returns A record of ticket nft addresses -> ticket balances.
 */
export async function getTicketBalances(walletAddr: string, curatedTicketList: string[], ticketID: number = 0) {
  const factory = await ethers.getContractFactory("NFTTicketCollection");
  let results: Record<string, bigint> = {};
  for (let i = 0; i < curatedTicketList.length; i++) {
    const contractAddr = curatedTicketList[i];
    const nftContract = await factory.attach(contractAddr) as NFTTicketCollection;

    const balance = await nftContract.balanceOf(walletAddr, ticketID);

    results[contractAddr] = balance;
  }

  return results;
}