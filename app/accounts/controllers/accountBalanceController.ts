import { Request, Response } from 'express';
import { getNftOwners } from '../../owners/utils/getNftOwners';
import { getAccountBalance } from '../utils/getAccountBalance';
import appConfig from '../../config';


/**
 * Gets account balance
 * Route: GET: /nft/accounts/balance
 * @param {object} req object
 * @param {object} res object
 * @returns {response} response object
 */
export const getBalance = async (req: Request, res: Response) => {
    const page: any = req.query.page || 1;
    const limit: any = req.query.limit || 10;
    const url = req.url || '';
    const offset = (page - 1) * limit;
    const range = page * limit;

    const ownerAddresses = await getNftOwners(appConfig.contractAddress, url);
    const data = await getAccountBalance(ownerAddresses, url, offset, range);
    return res.status(200).send({ 'status': 'ok', data })
}