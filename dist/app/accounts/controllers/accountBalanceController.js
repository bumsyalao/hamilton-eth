"use strict";
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
const getNftOwners_1 = require("../../owners/utils/getNftOwners");
const getAccountBalance_1 = require("../utils/getAccountBalance");
const config_1 = __importDefault(require("../../config"));
/**
 * Gets account balance
 * Route: GET: /nft/accounts/balance
 * @param {object} req object
 * @param {object} res object
 * @returns {response} response object
 */
const getBalance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const url = req.url || '';
    const offset = (page - 1) * limit;
    const range = page * limit;
    const ownerAddresses = yield (0, getNftOwners_1.getNftOwners)(config_1.default.contractAddress, url);
    const data = yield (0, getAccountBalance_1.getAccountBalance)(ownerAddresses, url, offset, range);
    return res.status(200).send({ 'status': 'ok', data });
});
exports.getBalance = getBalance;
