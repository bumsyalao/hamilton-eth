"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ownersController_1 = require("../owners/controllers/ownersController");
const router = (0, express_1.Router)();
router.get('nft', ownersController_1.getOwners);
exports.default = router;
