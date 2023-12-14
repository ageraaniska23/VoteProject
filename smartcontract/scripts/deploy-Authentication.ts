import { ethers } from "hardhat";

async function main() {
  const dataAuthentication = await ethers.deployContract("Authentication");
  await dataAuthentication.waitForDeployment();
  const User = await dataAuthentication.getAddress();
  console.log(`Report: ${User}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
