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

    // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    // const eventTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [deployer, organizer, buyer, attacker] = await hre.ethers.getSigners();

    const NFTTicketCollection = await hre.ethers.getContractFactory("NFTTicketCollection");
    const nftTicketCollection = await NFTTicketCollection.connect(organizer).deploy(URI) as NFTTicketCollection;

    return { deployer, organizer, buyer, attacker, nftTicketCollection, URI };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { nftTicketCollection, URI } = await loadFixture(deployFixture);

      expect(await nftTicketCollection.uri(0)).to.equal(URI);
    });

    it("Should set the right owner", async function () {
      const { nftTicketCollection, organizer } = await loadFixture(deployFixture);

      expect(await nftTicketCollection.owner()).to.equal(organizer.address);
    });

  });

  describe("Minting", function () {

    it("Should be able to mint tickets for someone", async function () {
      const { nftTicketCollection, organizer } = await loadFixture(deployFixture);

      await nftTicketCollection.mint(organizer.address, 0, 10);

      expect(await nftTicketCollection.balanceOf(organizer, 0)).to.equal(10);
    });

    it("Should fail to mint when it is not the organizer", async function () {
      const { nftTicketCollection, attacker } = await loadFixture(deployFixture);

      await expect(nftTicketCollection.connect(attacker).mint(attacker.address, 0, 10)).to.be.revertedWith("Ownable: caller is not the owner");
    });

  });

  describe("Burning", function () {

    it("Should be able to burn tickets", async function () {
      const { nftTicketCollection, organizer } = await loadFixture(deployFixture);

      await nftTicketCollection.mint(organizer.address, 0, 10);
      await nftTicketCollection.burn(0, 5);

      expect(await nftTicketCollection.balanceOf(organizer, 0)).to.equal(5);
    });

    it("Should fail to burn tickets not in the organizers wallet", async function () {
      const { nftTicketCollection, organizer, attacker } = await loadFixture(deployFixture);

      await nftTicketCollection.mint(organizer.address, 0, 10);

      await expect(nftTicketCollection.connect(attacker).burn(0, 5)).to.be.revertedWith("Ownable: caller is not the owner");
    });

  });

});
