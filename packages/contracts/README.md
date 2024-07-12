# Karen Smart Contracts

Smart contracts for the Karen NFT Ticketing system.

## Testing

```shell
npx hardhat compile
npx hardhat test
```

## Deploying
```shell
cp examle.env .env
# Fill environment variables in .env
npx hardhat compile
npx hardhat ignition deploy ./ignition/modules/NFTTicketCollection.ts --verify --network zircuit 
```
