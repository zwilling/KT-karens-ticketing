import { chainIDOpenSea } from "./parameters"

/**
 * Ask OpenSea API to prepare the transaction to buy a ticket from a listing
 */
export function prepareBuyTx({ listingHash, protocolAddr, fulfillerAddr }) {
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

  fetch('https://testnets-api.opensea.io/api/v2/listings/fulfillment_data', options)
    .then(response => {
      console.log("Bought transaction: ", response)
      response.json();
      
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));
}