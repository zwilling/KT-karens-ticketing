import { chainIDOpenSea } from "./parameters"
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

/**
 * Ask OpenSea API to prepare the transaction to buy a ticket from a listing
 */
export async function prepareBuyTx({ listingHash, protocolAddr, fulfillerAddr }) {
  console.log("Buying TX!")
  const options = {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify({
      listing: {
        hash: listingHash,
        chain: chainIDOpenSea,
        protocol_address: protocolAddr,
      },
      fulfiller: { address: fulfillerAddr }
    })
  };

  try {
    const response = await fetch('https://testnets-api.opensea.io/api/v2/listings/fulfillment_data', options);
    console.log("First response: ", response);

    const data = await response.json();
    console.log("Data: ", data);

    const { to, value, data: inputData } = data.fulfillmentData;

  } catch (err) {
    console.error(err);
  }
}