// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;

import {ERC1155C} from "@limitbreak/creator-token-standards/src/erc1155c/ERC1155C.sol";
import "@limitbreak/creator-token-standards/src/token/erc1155/ERC1155OpenZeppelin.sol";
import "@limitbreak/creator-token-standards/src/access/OwnableBasic.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract NFTTicketCollection is ERC1155C, OwnableBasic {
    constructor(string memory uri_) ERC1155OpenZeppelin(uri_) {}
}
