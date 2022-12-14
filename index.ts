// use strict-mode;
'use strict';
import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import appConfig from './app/config';
import getOwnersRoute from './app/routes/getOwnersRoute';
import getAccountBalanceRoute from './app/routes/getAccountBalanceRoute';

import { getOwners } from './app/controllers/ownersController';

dotenv.config();

const app = express();
app.use(cors());


app.get('/', (req: any, res: any) => {
    res.send('Hamilton ETH API');
});
app.get('api/nft/owners', getOwnersRoute);
app.get('api/eth/balances', getAccountBalanceRoute);

app.listen(appConfig.port, () => {

    console.log(`[server]: Server is running at https://localhost:${appConfig.port}`);
});

