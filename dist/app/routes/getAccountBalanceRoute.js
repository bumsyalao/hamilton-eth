"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountBalanceController_1 = require("../controllers/accountBalanceController");
const router = (0, express_1.Router)();
router.get('api/nft/owners', accountBalanceController_1.getBalance);
exports.default = router;
