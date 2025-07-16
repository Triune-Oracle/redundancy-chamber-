# Redundancy Chamber

A blockchain automation system implementing the Memory Merge Protocol for NFT-related cryptocurrency payouts on the Polygon network.

## Overview

The Redundancy Chamber is a JavaScript-based automation tool that runs continuous cycles to synchronize state and trigger cryptocurrency payouts. The system operates on a 5-minute interval, executing the Memory Merge Protocol to handle NFT-related transactions using WETH (Wrapped Ethereum) on the Polygon blockchain.

## Main Language

**JavaScript** - The entire project is built using Node.js and JavaScript, leveraging the ethers.js library for blockchain interactions.

## Key Features

- **Automated Payout System**: Triggers cryptocurrency payouts at regular intervals
- **Memory Merge Protocol**: Core loop that synchronizes state and manages payout cycles
- **Polygon Network Integration**: Utilizes Polygon mainnet for efficient transactions
- **WETH Transfers**: Handles Wrapped Ethereum token transfers
- **Continuous Operation**: Runs in a loop with 5-minute intervals between cycles
- **Error Handling**: Comprehensive error logging and recovery mechanisms

## Architecture

The system consists of three main components:

- `main_component_logic.js` - Core protocol loop and coordination
- `memory-merge_protocol.js` - Memory merge protocol implementation
- `payout.js` - Handles WETH transfers and payout logic

## Usage

The system requires environment variables for configuration:
- `TO_ADDRESS` - Recipient address for payouts
- `PRIVATE_KEY` - Private key for transaction signing
- `INFURA_ID` - Infura project ID for Polygon network access
- `AMOUNT_WETH` - Amount of WETH to transfer per payout cycle

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Copyright

Copyright (c) 2025 Triune-Oracle