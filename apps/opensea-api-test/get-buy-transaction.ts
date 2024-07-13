import opensea from '@api/opensea';

opensea.server('https://testnets-api.opensea.io');
opensea.generate_listing_fulfillment_data_v2({
  listing: {
    hash: '0x97681e9bde0e3aa0d6fa6740332b877e3f970c97b083ce0842282b91184ea637',
    chain: 'base_sepolia',
    protocol_address: '0x0000000000000068f116a894984e2db1123eb395'
  },
  fulfiller: { address: '0xCAEf9F8701aA4A1a8D8564D6871bf5bf8ACA9c1e' }
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

const resultExample =
{
  "protocol": "seaport1.6",
  "fulfillment_data": {
    "transaction": {
      "function": "fulfillBasicOrder_efficient_6GL6yc((address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes))",
      "chain": 84532,
      "to": "0x0000000000000068f116a894984e2db1123eb395",
      "value": 1000000000000000,
      "input_data": {
        "parameters": {
          "considerationToken": "0x0000000000000000000000000000000000000000",
          "considerationIdentifier": "0",
          "considerationAmount": "975000000000000",
          "offerer": "0xcaadd2b763f5be6cd5baea3135c5b86e8af2eb06",
          "zone": "0x0000000000000000000000000000000000000000",
          "offerToken": "0x2aeaff494abf43bcd7fefba74794e0517edff901",
          "offerIdentifier": "0",
          "offerAmount": "1",
          "basicOrderType": 5,
          "startTime": "1720885374",
          "endTime": "1723563774",
          "zoneHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
          "salt": "24446860302761739304752683030156737591518664810215442929805300267336026320903",
          "offererConduitKey": "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
          "fulfillerConduitKey": "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
          "totalOriginalAdditionalRecipients": "1",
          "additionalRecipients": [
            {
              "amount": "25000000000000",
              "recipient": "0x0000a26b00c1f0df003000390027140000faa719"
            }
          ],
          "signature": "0x4ef91b804670b31676985c86d43501869a380027c096c654492a74603f7f4e9b4d2c55114bcc3a6eea9e5b5e4f3adaab56035b0e725b8e99ea57534b398a41e1"
        }
      }
    },
    "orders": [
      {
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
        "signature": "0x4ef91b804670b31676985c86d43501869a380027c096c654492a74603f7f4e9b4d2c55114bcc3a6eea9e5b5e4f3adaab56035b0e725b8e99ea57534b398a41e1"
      }
    ]
  }
}