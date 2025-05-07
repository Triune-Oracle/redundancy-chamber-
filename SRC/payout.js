const { ethers } = require("ethers");
require("dotenv").config();

const WETH_ADDRESS = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"; // Polygon WETH
const TO_ADDRESS = process.env.TO_ADDRESS;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const INFURA_ID = process.env.INFURA_ID;
const AMOUNT_WETH = process.env.AMOUNT_WETH || "0.01";

const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/${INFURA_ID}`);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const abi = [ "function transfer(address to, uint amount) returns (bool)" ];
const contract = new ethers.Contract(WETH_ADDRESS, abi, wallet);

async function payoutNFTTrigger() {
  console.log("Triggering payout...");
  const tx = await contract.transfer(TO_ADDRESS, ethers.utils.parseUnits(AMOUNT_WETH, 18));
  await tx.wait();
  console.log(`Payout sent: ${AMOUNT_WETH} WETH`);
}

module.exports = { payoutNFTTrigger };
