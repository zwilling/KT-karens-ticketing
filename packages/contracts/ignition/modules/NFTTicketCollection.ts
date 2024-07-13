import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NFTTicketCollectionModule = buildModule("NFTTicketCollection", (m) => {
  const uri = m.getParameter("uri", "https://karen-tickets.com");
  const ticketID = m.getParameter("ticketID", 0);
  const initialAmount = m.getParameter("amount", 10);
  // const feeLoadValue = m.getParameter("lockedAmount", ONE_GWEI);

  const deployer = m.getAccount(0);
  const organizer = m.getAccount(1);
  const buyer = m.getAccount(2);

  const nftTicketCollection = m.contract("NFTTicketCollection", [uri], {
    from: organizer,
    // value: lockedAmount,
  });

  // create some tickets for setting up testing
  m.call(nftTicketCollection, "mint", [organizer, ticketID, initialAmount], {
    from: organizer,

  });

  return { nftTicketCollection };
});

export default NFTTicketCollectionModule;
