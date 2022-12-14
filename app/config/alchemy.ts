// Setup
import { Network, Alchemy } from 'alchemy-sdk';
import config from './index';

const settings = {
    apiKey: config.alchemyAPIKey,
    network: Network.ETH_MAINNET
    ,
};

const alchemy = new Alchemy(settings);

export default alchemy;

