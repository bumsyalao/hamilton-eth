import { Router } from 'express';
import { getBalance } from '../controllers/accountBalanceController';

const router = Router();

router.get('api/nft/owners', getBalance);


export default router;