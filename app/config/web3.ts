import Web3 from 'web3';
import config from './index';

const provider = new Web3.providers.HttpProvider(config.infuraNodeUrl);
export const web3 = new Web3(provider);