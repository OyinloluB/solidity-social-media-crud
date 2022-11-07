const { ethers } = require("hardhat")

async function main() {
  const crudContract = await ethers.getContractFactory("CrudPostApp");

  const deployedCrudContract = await crudContract.deploy();

  await deployedCrudContract.deployed();

  console.log("crud app address", deployedCrudContract.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
})
