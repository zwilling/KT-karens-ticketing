import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NFTTicketCollectionModule = buildModule("NFTTicketCollection", (m) => {
  const uri = m.getParameter("uri", "https://karen-tickets.com");
  // const feeLoadValue = m.getParameter("lockedAmount", ONE_GWEI);

  const nftTicketCollection = m.contract("NFTTicketCollection", [uri], {
    // value: lockedAmount,
  });

  return { nftTicketCollection };
});

export default NFTTicketCollectionModule;
