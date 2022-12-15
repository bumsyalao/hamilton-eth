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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountBalance = void 0;
const web3_1 = require("../../config/web3");
function getAccountBalance(addrs, offset = 0, range = 10) {
    return __awaiter(this, void 0, void 0, function* () {
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
