import { Router } from 'express';
import { getBalance } from '../controllers/accountBalanceController';

const router = Router();

router.get('/balance', getBalance);


export default router;