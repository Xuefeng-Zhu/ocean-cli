global.WebSocket = require('isomorphic-ws');
const Web3 = require('web3');
const { Ocean, DataTokens } = require('@oceanprotocol/lib');

const {
  factoryABI,
} = require('@oceanprotocol/contracts/artifacts/DTFactory.json');
const {
  datatokensABI,
} = require('@oceanprotocol/contracts/artifacts/DataTokenTemplate.json');
const { config, contracts, urls } = require('./config');

const init = async () => {
  const ocean = await Ocean.getInstance(config);
  const blob = `${urls.providerUri}/api/v1/services/consume`;

  const accounts = await ocean.accounts.list();
  const account = accounts[0].id;
  console.log('account address:', account);

  const datatoken = new DataTokens(
    contracts.DTFactory,
    factoryABI,
    datatokensABI,
    new Web3(urls.networkUrl)
  );

  const tokenAddress = await datatoken.create(blob, account);
  console.log(`Deployed datatoken address: ${tokenAddress}`);
};

init();
