import * as redis from 'redis';
import { Request, Response } from 'express';
import { getNftOwners } from '../../owners/utils/getNftOwners';
import { getAccountBalance } from '../utils/getAccountBalance';
import appConfig from '../../config';

const redisClient = redis.createClient();
redisClient.on('connect', () => { console.log("Redis connection successful") })

/**
 * Gets account balance
 * Route: GET: /api/accounts/balance?page=1&limit=10
 * @param {object} req object
 * @param {object} res object
 * @returns {response} response object
 */
export const getBalance = async (req: Request, res: Response) => {
    const page: any = req.query.page || 1;
    const limit: any = req.query.limit || 10;
    const url = req.url || '';
    const contractAddressString = appConfig.contractAddress.join('');
    const offset = (page - 1) * limit;
    const range = page * limit;
    const cacheKey = url + contractAddressString + offset + range;

    try {
        redisClient.get(cacheKey, async (err, cache) => {
            if (cache) {
                return res.status(200).json({ 'status': 'ok', data: JSON.parse(cache) })
            }
            const ownerAddresses = await getNftOwners(appConfig.contractAddress);
            const data = await getAccountBalance(ownerAddresses, offset, range);
            redisClient
                .set(cacheKey, JSON.stringify(data), 'EX', 30, async (saveErr, saved) => {
                    if (saveErr) {
                        return res.status(500).json({ err: saveErr })
                    }

                    res.json({ 'status': 'ok', data });
                })
        })
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }

}