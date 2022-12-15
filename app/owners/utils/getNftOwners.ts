import * as redis from 'redis';
import alchemy from '../../config/alchemy';

const redisClient = redis.createClient();
redisClient.on('connect', () => { console.log("Redis connection successful") })

export async function getNftOwners(contractAddress: string[], url: string) {
    const contractAddressString = contractAddress.join('');
    const cacheKey = url + contractAddressString;


    const { owners: collection1 } = await alchemy.nft.getOwnersForContract(contractAddress[0]);
    const { owners: collection2 } = await alchemy.nft.getOwnersForContract(contractAddress[1]);
    const data = collection1.filter((addr: any) => collection2.indexOf(addr) !== -1);
    return data;
}


