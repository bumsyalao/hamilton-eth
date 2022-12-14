"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Setup
const alchemy_sdk_1 = require("alchemy-sdk");
const index_1 = __importDefault(require("./index"));
const settings = {
    apiKey: index_1.default.alchemyAPIKey,
    network: alchemy_sdk_1.Network.ETH_MAINNET,
};
const alchemy = new alchemy_sdk_1.Alchemy(settings);
exports.default = alchemy;
