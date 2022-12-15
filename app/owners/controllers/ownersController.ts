import * as redis from 'redis';
import { Request, Response } from 'express';
import { getNftOwners } from '../utils/getNftOwners';
import appConfig from '../../config';

const redisClient = redis.createClient();
redisClient.on('connect', () => { console.log("Redis connection successful") })


/**
 * Gets NFT owners
 * Route: GET: /api/nft/owners
 * @param {object} req object
 * @param {object} res object
 * @returns {response} response object
 */

export const getOwners = async (req: Request, res: Response) => {
    const url = req.url || '';
    const contractAddressString = appConfig.contractAddress.join('');
    const cacheKey = url + contractAddressString;

    try {
        redisClient.get(cacheKey, async (err, cache) => {
            if (cache) {
                return res.status(200).json({ 'status': 'ok', data: JSON.parse(cache) })
            }
            const data = await getNftOwners(appConfig.contractAddress);
            redisClient
                .set(cacheKey, JSON.stringify(data), 'EX', 60 * 60, async (saveErr, saved) => {
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