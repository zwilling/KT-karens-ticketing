import { useEnsName, useEnsAvatar } from "wagmi";
import { chainID } from "./parameters";

export async function queryEnsData(address) {
  const result = await useEnsName({
    address: address,
    chainId: chainID,
  });
  return result;
}

