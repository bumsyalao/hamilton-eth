"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const express_1 = require("express");
const ownersController_1 = require("../controllers/ownersController");
const router = (0, express_1.Router)();
node_cron_1.default.schedule("*/5 * * * * *", function () {
    router.get('/owners', ownersController_1.getOwners);
});
exports.default = router;
