const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CrudPostApp", function () {
  before(async function () {
    this.CrudPostApp = await ethers.getContractFactory("CrudPostApp");
  });

  beforeEach(async function () {
    this.crudPost = await this.CrudPostApp.deploy();
    await this.crudPost.deployed();
  });

  it("stores and returns value stored", async function () {
    await this.crudPost.addPost("hello", "world");
    const [x, y, z] = await this.crudPost.getPost(1);

    expect(y).to.equal("hello");
    expect(z).to.equal("world");
  })
})