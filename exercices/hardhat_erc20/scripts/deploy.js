// scripts/deploy.js

const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const balance = await deployer.getBalance();
    console.log("Account balance:", balance.toString());
  
    const CedricToken = await ethers.getContractFactory("CedricToken");
    const token = await CedricToken.deploy(1000000); // 1 million initial supply
  
    console.log("Token deployed to:", token.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });