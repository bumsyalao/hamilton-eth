
import { web3 } from '../../config/web3';


export async function getAccountBalance(addrs: string[], offset: number = 0, range: number = 10) {

    const reqs = [];
    for (const address of addrs.slice(offset, range)) {
        const balance = web3.eth.getBalance(address);
        reqs.push({ balance: balance, address });
    }
    const data = await Promise.all(reqs);
    const balance = await Promise.all(data.map(async (item) => ({ ...item, balance: web3.utils.fromWei(await item.balance) })))

    return ({ balance })

}