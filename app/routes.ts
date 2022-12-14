import { Router } from 'express';
import ownersRoutes from '../app/owners/routes';
import accountsRoutes from '../app/accounts/routes';

const router = Router();


router.use('/nft', ownersRoutes);
router.use('/accounts', accountsRoutes);

export default router;