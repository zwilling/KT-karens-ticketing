import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NFTTicketCollectionModule = buildModule("NFTTicketCollection", (m) => {
  const events = {
    ethereumFilm: {
      uri: "https://raw.githubusercontent.com/zwilling/karen/main/packages/metadata/ethereumFilm/0.json",
      eventStart: 1731351600,// Nov 11 2024
    },
    ensOnIce: {
      uri: "https://raw.githubusercontent.com/zwilling/karen/main/packages/metadata/ensOnIce/0.json",
      eventStart: 1731351600,// Nov 11 2024
    },
    drumAndBase: {
      uri: "https://raw.githubusercontent.com/zwilling/karen/main/packages/metadata/drumAndBase/0.json",
      eventStart: 1731351600,// Nov 11 2024
    },
  }
  const ticketID = m.getParameter("ticketID", 0);
  const initialAmount = m.getParameter("amount", 10);

  // const feeLoadValue = m.getParameter("lockedAmount", ONE_GWEI);

  const deployer = m.getAccount(0);
  const organizer = m.getAccount(1);
  const buyer = m.getAccount(2);

  let resultContracts: Record<string, any> = {};
  for (const [event, { uri, eventStart }] of Object.entries(events)) {
    const nftTicketCollection = m.contract("NFTTicketCollection", [uri, eventStart], {
      from: organizer,
      id: event,
      // value: lockedAmount,
    });

    // create some tickets for setting up testing
    m.call(nftTicketCollection, "mint", [organizer, ticketID, initialAmount], {
      from: organizer,

    });

    resultContracts[event] = nftTicketCollection;
  }

  return resultContracts;
});


export default NFTTicketCollectionModule;
