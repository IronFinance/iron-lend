import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
          version: '0.8.4',
          settings: {
              optimizer: {
                enabled: true,
                  runs: 200,
              },
          },
      },
    ],
    overrides: {
      'src/0.8.4/*': {
        version: '0.8.4'
      }
    }
  },
  gasReporter: {
    currency: 'USD',
    enabled: !!process.env.REPORT_GAS,
  },
  namedAccounts: {
    creator: 0,
  },
  paths: {
    sources: './src'
  }
};

export default config;
