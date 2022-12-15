import cron from 'node-cron';
import { Router } from 'express';
import { getOwners } from '../controllers/ownersController';

const router = Router();

cron.schedule("*/5 * * * * *", function () {
    router.get('/owners', getOwners);
});


export default router;