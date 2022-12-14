import { Router } from 'express';
import { getOwners } from '../controllers/ownersController';

const router = Router();

router.get('api/eth/balances', getOwners);


export default router;