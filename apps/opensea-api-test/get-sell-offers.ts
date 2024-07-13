import opensea from '@api/opensea';

opensea.server('https://testnets-api.opensea.io');
opensea.get_all_listings_on_collection_v2({ collection_slug: 'unidentified-contract-61febcce-f411-421b-969c-0cf6' })
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

const resultExample =
{
  "listings": [
    {
      "order_hash": "0x97681e9bde0e3aa0d6fa6740332b877e3f970c97b083ce0842282b91184ea637",
      "chain": "base_sepolia",
      "type": "basic",
      "price": {
        "current": {
          "currency": "ETH",
          "decimals": 18,
          "value": "1000000000000000"
        }
      },
      "protocol_data": {
        "parameters": {
          "offerer": "0xcaadd2b763f5be6cd5baea3135c5b86e8af2eb06",
          "offer": [
            {
              "itemType": 3,
              "token": "0x2AeAFF494ABf43bCd7feFBa74794e0517edFF901",
              "identifierOrCriteria": "0",
              "startAmount": "1",
              "endAmount": "1"
            }
          ],
          "consideration": [
            {
              "itemType": 0,
              "token": "0x0000000000000000000000000000000000000000",
              "identifierOrCriteria": "0",
              "startAmount": "975000000000000",
              "endAmount": "975000000000000",
              "recipient": "0xcAaDD2B763F5BE6CD5Baea3135c5b86E8Af2eb06"
            },
            {
              "itemType": 0,
              "token": "0x0000000000000000000000000000000000000000",
              "identifierOrCriteria": "0",
              "startAmount": "25000000000000",
              "endAmount": "25000000000000",
              "recipient": "0x0000a26b00c1F0DF003000390027140000fAa719"
            }
          ],
          "startTime": "1720885374",
          "endTime": "1723563774",
          "orderType": 1,
          "zone": "0x0000000000000000000000000000000000000000",
          "zoneHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
          "salt": "0x360c6ebe0000000000000000000000000000000000000000443ebff4af947007",
          "conduitKey": "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
          "totalOriginalConsiderationItems": 2,
          "counter": 0
        },
        "signature": null
      },
      "protocol_address": "0x0000000000000068f116a894984e2db1123eb395"
    }
  ]
}