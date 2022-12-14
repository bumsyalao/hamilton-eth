import { Request, Response } from "express";
import { getNftOwners } from '../utils/get-nft-owners';
import appConfig from '../config';


export const getOwners = async (res: Response, req: Request) => {

    await getNftOwners(appConfig.contractAddress).then((data: any) => {

        return res.status(200).send({ 'status': 'ok', data })
    });
}