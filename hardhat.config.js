require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("hardhat-spdx-license-identifier")
require("hardhat-contract-sizer")
require("solidity-coverage");

require("dotenv").config();

module.exports = {
  networks: {
    hardhat: {
      accounts: {
        count: 20,
        mnemonic: "drip wheat survey engine mercy punch fit mask quality embrace lens try"
      },
      allowUnlimitedContractSize: true,
      initialBaseFeePerGas: 0,
    },
    mainnet: {
      url: process.env.BSC_MAINNET_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    testnet: {
      url: process.env.BSC_TESTNET_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0"
      }
    ]
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
};