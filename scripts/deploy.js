<<<<<<< HEAD
const { ethers } = require("ethers");
const hre = require("hardhat");

async function main() {
=======

const hre = require("hardhat");

async function main() {
 

  // const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
  //   value: lockedAmount,
  // });

  // await lock.waitForDeployment();

  // console.log(
  //  `Tracking deployed to ${lock.target}`
  // );

  
>>>>>>> d7db41fccb048bfeb56f0a767e5e277c0b50a190
  const Tracking = await hre.ethers.getContractFactory("Tracking");
  const tracking = await Tracking.deploy();

  await tracking.deployed();

  console.log(`Tracking deployed to ${tracking.address}`);
}

<<<<<<< HEAD
=======
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
>>>>>>> d7db41fccb048bfeb56f0a767e5e277c0b50a190
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
