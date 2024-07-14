// TODO: Hardcoded data to be replaced with actual data
export const chainIDOpenSea = 'base_sepolia';
export const chainID = 84532;
export const contractDeployer = 'crypto-cinema';
export const defaultTicketTypeID = 0;
export const optionsOpenSeaAPI = { method: 'GET', headers: { accept: 'application/json' } };

export const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "considerationToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "considerationIdentifier",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "considerationAmount",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "offerer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "zone",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "offerToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "offerIdentifier",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "offerAmount",
        "type": "uint256"
      },
      {
        "internalType": "enum BasicOrderType",
        "name": "basicOrderType",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "zoneHash",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "salt",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "offererConduitKey",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "fulfillerConduitKey",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "totalOriginalAdditionalRecipients",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "recipient",
            "type": "address"
          }
        ],
        "internalType": "struct AdditionalRecipient[]",
        "name": "additionalRecipients",
        "type": "tuple[]"
      },
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "fulfillBasicOrder_efficient_6GL6yc",
    "outputs": [
      {
        "internalType": "bool",
        "name": "fulfilled",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  }];
