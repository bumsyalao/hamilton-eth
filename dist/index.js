// use strict-mode;
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./app/config"));
const getOwnersRoute_1 = __importDefault(require("./app/routes/getOwnersRoute"));
const getAccountBalanceRoute_1 = __importDefault(require("./app/routes/getAccountBalanceRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hamilton ETH API');
});
app.get('api/nft/owners', getOwnersRoute_1.default);
app.get('api/eth/balances', getAccountBalanceRoute_1.default);
app.listen(config_1.default.port, () => {
    console.log(`[server]: Server is running at https://localhost:${config_1.default.port}`);
});
