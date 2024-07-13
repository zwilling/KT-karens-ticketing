import { ethers } from "hardhat";

/**
 * Returns the address of a deployed contract.
 * 
 * @param deploymentKey The key of the contract in the deployment file.
 * @returns The address of the deployed contract.
 */
export async function getDeployedContractAddress(deploymentKey: string): Promise<string> {
  const chainID = (await ethers.provider.getNetwork()).chainId;
  const deploymentFile = `../ignition/deployments/chain-${chainID}/deployed_addresses.json`;
  const contractAddr = require(deploymentFile)[deploymentKey];

  return contractAddr;
}