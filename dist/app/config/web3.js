"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.web3 = void 0;
const web3_1 = __importDefault(require("web3"));
const index_1 = __importDefault(require("./index"));
const provider = new web3_1.default.providers.HttpProvider(index_1.default.infuraNodeUrl);
exports.web3 = new web3_1.default(provider);
