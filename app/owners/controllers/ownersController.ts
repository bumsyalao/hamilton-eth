import { Request, Response } from "express";
import { getNftOwners } from '../utils/getNftOwners';
import appConfig from '../../config';


export const getOwners = async (req: Request, res: Response) => {
    const url = req.url || '';

    const data = await getNftOwners(appConfig.contractAddress, url);

    return res.json({ 'status': 'ok', data });
}