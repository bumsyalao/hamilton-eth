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
exports.getNftOwners = void 0;
const alchemy_1 = __importDefault(require("../../config/alchemy"));
function getNftOwners(contractAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const { owners: collection1 } = yield alchemy_1.default.nft.getOwnersForContract(contractAddress[0]);
        const { owners: collection2 } = yield alchemy_1.default.nft.getOwnersForContract(contractAddress[1]);
        const data = collection1.filter((addr) => collection2.indexOf(addr) !== -1);
        return data;
    });
}
exports.getNftOwners = getNftOwners;
