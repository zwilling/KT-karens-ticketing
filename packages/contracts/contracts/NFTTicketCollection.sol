// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;

import {ERC1155C} from "@limitbreak/creator-token-standards/src/erc1155c/ERC1155C.sol";
import "@limitbreak/creator-token-standards/src/token/erc1155/ERC1155OpenZeppelin.sol";
import "@limitbreak/creator-token-standards/src/access/OwnableBasic.sol";

// Uncomment this line to use console.log
import "hardhat/console.sol";

/**
 * @title NFTTicketCollection The base contract for an NFT ticket collection.
 * @notice There will be one of those contracts deployed for each event that has tickets to sell.
 */
contract NFTTicketCollection is ERC1155C, OwnableBasic {
    uint256 public eventStart;

    /**
     * @notice Constructor of the contract.
     * @param uri_ The URI of the metadata of the tickets.
     * @param eventStart_ The unix timestamp of the start of the event.
     */
    constructor(
        string memory uri_,
        uint256 eventStart_
    ) ERC1155OpenZeppelin(uri_) {
        eventStart = eventStart_;
    }

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

    /**
     * @notice Change the event start date. Only the owner of the contract == organizer of the event can change the start date.
     * @param newEventStart The new unix timestamp of the start of the event.
     */
    function changeEventStart(uint256 newEventStart) external onlyOwner {
        eventStart = newEventStart;
    }

    /**
     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.
     *
     * Emits a {TransferSingle} event.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - `from` must have a balance of tokens of type `id` of at least `amount`.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
     * acceptance magic value.
     */
    function _safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual override {
        require(
            block.timestamp <= eventStart,
            "NFTTicketCollection: Can not transfer after the event has started"
        );

        super._safeTransferFrom(from, to, id, amount, data);
    }
}
