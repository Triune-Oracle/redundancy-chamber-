// Memory Merge Protocol - Core Loop
require('dotenv').config();
const { ethers } = require("ethers");
const fs = require("fs");
const { payoutNFTTrigger } = require("./payout");
const { getSyncedState } = require("./sync");

// Main loop
async function loop() {
  const interval = 5 * 60 * 1000; // 5 minutes
  while (true) {
    try {
      console.log("[Heartbeat] Memory Merge Cycle Initiated");
      await getSyncedState();
      await payoutNFTTrigger();
      console.log("[Cycle Complete] Waiting...");
    } catch (e) {
      console.error("[Error]", e);
    }
    await new Promise(resolve => setTimeout(resolve, interval));
  }
}

loop();
