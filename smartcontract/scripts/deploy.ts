import { ethers } from "hardhat";

async function main() {
  const dataKuVt = await ethers.deployContract("KuVt");
  await dataKuVt.waitForDeployment();
  const User = await dataKuVt.getAddress();
  console.log(`Report: ${User}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
