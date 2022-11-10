const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

const { ethers } = require("hardhat");

describe("Social Media CRUD Solidity", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploySociaMedia() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const CrudPostApp = await ethers.getContractFactory("CrudPostApp");
    const cpa = await CrudPostApp.deploy();

    return { cpa, owner, otherAccount };
  }

  describe("CRUD Operations", function () {
    it("Should create a Post", async function () {
      const { cpa } = await loadFixture(deploySociaMedia);

      expect(
        await cpa.addPost("Test Post", "This is just a test post")
      ).to.emit(cpa, "AddPost");
    });

    it("Should get a post", async function () {
      const { cpa } = await loadFixture(deploySociaMedia);
      await cpa.addPost("Test Post", "This is just a test post");

      expect(await cpa.getPost(1));
    });

    it("Should get all posts", async function () {
      const { cpa } = await loadFixture(deploySociaMedia);
      expect(await cpa.addPost("Test Post", "This is just a test post"));
      expect(
        await cpa.addPost("Test Post 2", "This is just a second test post")
      );
    });

    it("Should delete post", async function () {
      const { cpa } = await loadFixture(deploySociaMedia);
      await cpa.addPost("Test Post", "This is just a test post");
      await cpa.addPost("Test Post 2", "This is just a second test post");
      await cpa.deletePost(1);

      expect(await cpa.deleted(1)).to.be.true;
    });

    it("Should edit post", async function () {
      const { cpa } = await loadFixture(deploySociaMedia);
      await cpa.addPost("Test Post", "This is just a test post");
      await cpa.addPost("Test Post 2", "This is just a second test post");
      // console.log("Test Post 2 before Edit:", await cpa.getPost(2))

      expect(
        await cpa.editPost(
          "Edited Test Post 2",
          "This is just an edited second test post",
          2
        )
      ).to.emit(cpa, "EditPost");
      // console.log("Test Post 2 after Edit:", await cpa.getPost(2))
    });
  });
});
