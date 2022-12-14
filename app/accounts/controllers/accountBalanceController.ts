import { Request, Response } from "express";
import { getNftOwners } from '../../owners/utils/getNftOwners';
import { getAccountBalance } from '../utils/getAccountBalance';
import appConfig from '../../config';


export const getBalance = async (req: Request, res: Response) => {
    const page: any = req.query.page;
    const limit: any = req.query.limit;
    const offset = (page - 1) * limit;
    const range = page * limit;
    await getNftOwners(appConfig.contractAddress).then((ownerAddresses: any) => {
        const data = getAccountBalance(ownerAddresses, offset, range)
        return res.status(200).send({ 'status': 'ok', balance: data })
    });
}