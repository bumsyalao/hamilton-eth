import { Request, Response } from "express";
import { getNftOwners } from '../utils/getNftOwners';
import appConfig from '../../config';


export const getOwners = async (req: Request, res: Response) => {

    const data = await getNftOwners(appConfig.contractAddress);

    return res.json({ 'status': 'ok', data });
}