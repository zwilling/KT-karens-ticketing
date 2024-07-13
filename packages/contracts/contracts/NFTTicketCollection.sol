// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;

import {ERC1155C} from "@limitbreak/creator-token-standards/src/erc1155c/ERC1155C.sol";
import "@limitbreak/creator-token-standards/src/token/erc1155/ERC1155OpenZeppelin.sol";
import "@limitbreak/creator-token-standards/src/access/OwnableBasic.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

/**
 * @title NFTTicketCollection The base contract for an NFT ticket collection.
 * @notice There will be one of those contracts deployed for each event that has tickets to sell.
 */
contract NFTTicketCollection is ERC1155C, OwnableBasic {
    constructor(string memory uri_) ERC1155OpenZeppelin(uri_) {}

    /**
     * @notice Mint new tickets. Only the owner of the contract == organizer of the event can mint tickets.
     * @param to The address of the ticket owner.
     * @param ticketID The ID of the ticket.
     * @param amount The amount of tickets to mint.
     */
    function mint(
        address to,
        uint256 ticketID,
        uint256 amount
    ) external onlyOwner {
        _mint(to, ticketID, amount, "");
    }

    /**
     * @notice Burn tickets. Only the owner of the ticket can burn it from his address.
     * @param tokenId The ID of the ticket.
     * @param amount The amount of tickets to burn.
     */
    function burn(uint256 tokenId, uint256 amount) external onlyOwner {
        _burn(msg.sender, tokenId, amount);
    }
}
