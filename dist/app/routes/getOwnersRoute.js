"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ownersController_1 = require("../controllers/ownersController");
const router = (0, express_1.Router)();
router.get('api/eth/balances', ownersController_1.getOwners);
exports.default = router;
