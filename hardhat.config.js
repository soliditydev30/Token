require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");
require("hardhat-gas-reporter");
require("hardhat-spdx-license-identifier")
require("hardhat-contract-sizer")
require("solidity-coverage");

require("dotenv").config();

module.exports = {
  networks: {
    hardhat: {
      accounts: {
        count: 10,
        mnemonic: process.env.MNEMONIC
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
    version: "0.8.0",
		settings: {
			optimizer: {
				enabled: true,
				runs: 10
			}
		}
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