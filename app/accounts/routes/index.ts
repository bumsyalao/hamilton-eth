import cron from 'node-cron';
import { Router } from 'express';
import { getBalance } from '../controllers/accountBalanceController';

const router = Router();

cron.schedule("*/5 * * * * *", function () {
    router.get('/balance', getBalance);
});


export default router;