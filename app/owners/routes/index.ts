import { Router } from 'express';
import { getOwners } from '../controllers/ownersController';

const router = Router();

router.get('/owners', getOwners);


export default router;