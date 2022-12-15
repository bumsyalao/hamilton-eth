"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountBalance = void 0;
const redis = __importStar(require("redis"));
const web3_1 = require("../../config/web3");
const redisClient = redis.createClient();
redisClient.on('connect', () => { console.log("Redis connection successful"); });
function getAccountBalance(addrs, url, offset = 0, range = 10) {
    return __awaiter(this, void 0, void 0, function* () {
        const cacheKey = url + offset + range;
        const reqs = [];
        for (const address of addrs.slice(offset, range)) {
            const balance = web3_1.web3.eth.getBalance(address);
            reqs.push({ balance: balance, address });
        }
        const data = yield Promise.all(reqs);
        const balance = yield Promise.all(data.map((item) => __awaiter(this, void 0, void 0, function* () { return (Object.assign(Object.assign({}, item), { balance: web3_1.web3.utils.fromWei(yield item.balance) })); })));
        return ({ balance });
    });
}
exports.getAccountBalance = getAccountBalance;
