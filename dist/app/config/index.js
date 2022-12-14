// use strict-mode;
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: process.env.PORT || 5000,
    infuraNodeUrl: process.env.INFURA_NODE_URL || 'https://mainnet.infura.io/v3/69a978fad6ce45f8b3c0fd577fdd2940',
    alchemyAPIKey: process.env.ALCHEMY_API_KEY || '2J44EshWcLU1-fSHIlg8McaJ4I2_key4',
    contractAddress: [
        '0x06012c8cf97bead5deae237070f9587f8e7a266d',
        '0x495f947276749ce646f68ac8c248420045cb7b5e',
    ]
};
const appConfig = Object.freeze(config);
exports.default = appConfig;
