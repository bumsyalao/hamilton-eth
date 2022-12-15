import alchemy from '../../config/alchemy';


export async function getNftOwners(contractAddress: string[]) {

    const { owners: collection1 } = await alchemy.nft.getOwnersForContract(contractAddress[0]);
    const { owners: collection2 } = await alchemy.nft.getOwnersForContract(contractAddress[1]);
    const data = collection1.filter((addr: any) => collection2.indexOf(addr) !== -1);
    return data;
}


