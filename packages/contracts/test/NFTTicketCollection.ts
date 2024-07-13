import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

import { NFTTicketCollection } from "../typechain-types";


describe("NFTTicketCollection", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    const URI = "https://karen-tickets.com";

    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const EVENT_START = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [deployer, organizer, buyer, attacker] = await hre.ethers.getSigners();

    const NFTTicketCollection = await hre.ethers.getContractFactory("NFTTicketCollection");
    const nftTicketCollection = await NFTTicketCollection.connect(organizer).deploy(URI, EVENT_START) as NFTTicketCollection;

    return {
      nftTicketCollection,
      accounts: {
        deployer,
        organizer,
        buyer,
        attacker,
      },
      params: {
        URI,
        EVENT_START
      }
    };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { nftTicketCollection, params } = await loadFixture(deployFixture);

      expect(await nftTicketCollection.uri(0)).to.equal(params.URI);
    });

    it("Should set the right owner", async function () {
      const { nftTicketCollection, accounts } = await loadFixture(deployFixture);

      expect(await nftTicketCollection.owner()).to.equal(accounts.organizer.address);
    });

  });

  describe("Minting", function () {

    it("Should be able to mint tickets for someone", async function () {
      const { nftTicketCollection, accounts } = await loadFixture(deployFixture);

      await nftTicketCollection.mint(accounts.organizer.address, 0, 10);

      expect(await nftTicketCollection.balanceOf(accounts.organizer, 0)).to.equal(10);
    });

    it("Should fail to mint when it is not the organizer", async function () {
      const { nftTicketCollection, accounts } = await loadFixture(deployFixture);

      await expect(nftTicketCollection.connect(accounts.attacker).mint(accounts.attacker.address, 0, 10)).to.be.revertedWith("Ownable: caller is not the owner");
    });

  });

  describe("Burning", function () {

    it("Should be able to burn tickets", async function () {
      const { nftTicketCollection, accounts } = await loadFixture(deployFixture);

      await nftTicketCollection.mint(accounts.organizer.address, 0, 10);
      await nftTicketCollection.burn(0, 5);

      expect(await nftTicketCollection.balanceOf(accounts.organizer, 0)).to.equal(5);
    });

    it("Should fail to burn tickets not in the organizers wallet", async function () {
      const { nftTicketCollection, accounts } = await loadFixture(deployFixture);

      await nftTicketCollection.mint(accounts.organizer.address, 0, 10);

      await expect(nftTicketCollection.connect(accounts.attacker).burn(0, 5)).to.be.revertedWith("Ownable: caller is not the owner");
    });

  });

  describe("Transferring", function () {

    it("Should be able to transfer tickets", async function () {
      const { nftTicketCollection, accounts } = await loadFixture(deployFixture);

      await nftTicketCollection.mint(accounts.organizer.address, 0, 10);
      await nftTicketCollection.safeTransferFrom(accounts.organizer.address, accounts.buyer.address, 0, 3, Uint8Array.from([])
      );

      expect(await nftTicketCollection.balanceOf(accounts.organizer, 0)).to.equal(7);
      expect(await nftTicketCollection.balanceOf(accounts.buyer, 0)).to.equal(3);
    });

    it("Should fail to transfer tickets when not enough tickets", async function () {
      const { nftTicketCollection, accounts } = await loadFixture(deployFixture);

      await nftTicketCollection.mint(accounts.organizer.address, 0, 10);

      await expect(nftTicketCollection.safeTransferFrom(accounts.organizer.address, accounts.buyer.address, 0, 11, Uint8Array.from([]))).to.be.revertedWith("ERC1155: insufficient balance for transfer");
    });

    it("Should fail to transfer tickets after the event", async function () {
      const { nftTicketCollection, accounts } = await loadFixture(deployFixture);

      await nftTicketCollection.mint(accounts.organizer.address, 0, 10);

      await expect(nftTicketCollection.safeTransferFrom(accounts.organizer.address, accounts.buyer.address, 0, 2, Uint8Array.from([]))).to.be.revertedWith("NFTTicketCollection: Can not transfer after the event has started");
    });

  });

  describe("Configuration", function () {

    it("Should be able to change event start", async function () {
      const { nftTicketCollection, accounts, params } = await loadFixture(deployFixture);
      const newTime = params.EVENT_START + 1000;

      await nftTicketCollection.changeEventStart(newTime);

      expect(await nftTicketCollection.eventStart()).to.equal(newTime);
    });

  });

});
