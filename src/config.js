require('dotenv').config();

const { ConfigHelper } = require('@oceanprotocol/lib');
const Web3 = require('web3');
const defaultConfig = new ConfigHelper().getConfig('rinkeby');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const urls = {
  networkUrl: `${defaultConfig.nodeUri}/${process.env.INFURA_TOKEN}`,
  aquarius: defaultConfig.metadataCacheUri,
  providerUri: defaultConfig.providerUri,
};

const contracts = {
  DTFactory: '0x3fd7A00106038Fb5c802c6d63fa7147Fe429E83a',
  BFactory: '0x53eDF9289B0898e1652Ce009AACf8D25fA9A42F8',
  FixedRateExchange: '0xeD1DfC5F3a589CfC4E8B91C1fbfC18FC6699Fbde',
  Metadata: '0xFD8a7b6297153397B7eb4356C47dbd381d58bFF4',
  Ocean: '0x8967BCF84170c91B0d24D4302C2376283b0B3a07',
  Dispenser: '0x623744Cd25Ed553d3b4722667697F926cf99658B',
};

const config = {
  ...defaultConfig,
  metadataCacheUri: urls.aquarius,
  providerUri: urls.providerUri,
  web3Provider: new Web3(
    new HDWalletProvider(process.env.MNEMONIC, urls.networkUrl)
  ),
};

module.exports = {
  config,
  contracts,
  urls,
};
