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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
const redis = __importStar(require("redis"));
const getNftOwners_1 = require("../../owners/utils/getNftOwners");
const getAccountBalance_1 = require("../utils/getAccountBalance");
const config_1 = __importDefault(require("../../config"));
const redisClient = redis.createClient();
redisClient.on('connect', () => { console.log("Redis connection successful"); });
/**
 * Gets account balance
 * Route: GET: /api/accounts/balance?page=1&limit=10
 * @param {object} req object
 * @param {object} res object
 * @returns {response} response object
 */
const getBalance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const url = req.url || '';
    const contractAddressString = config_1.default.contractAddress.join('');
    const offset = (page - 1) * limit;
    const range = page * limit;
    const cacheKey = url + contractAddressString + offset + range;
    try {
        redisClient.get(cacheKey, (err, cache) => __awaiter(void 0, void 0, void 0, function* () {
            if (cache) {
                return res.status(200).json({ 'status': 'ok', data: JSON.parse(cache) });
            }
            const ownerAddresses = yield (0, getNftOwners_1.getNftOwners)(config_1.default.contractAddress);
            const data = yield (0, getAccountBalance_1.getAccountBalance)(ownerAddresses, offset, range);
            redisClient
                .set(cacheKey, JSON.stringify(data), 'EX', 60 * 3, (saveErr, saved) => __awaiter(void 0, void 0, void 0, function* () {
                if (saveErr) {
                    return res.status(500).json({ err: saveErr });
                }
                res.json({ 'status': 'ok', data });
            }));
        }));
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.getBalance = getBalance;
