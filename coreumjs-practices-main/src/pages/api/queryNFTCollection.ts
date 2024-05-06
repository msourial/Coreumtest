// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import CoreumJS from '../../config/coreum-js'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    // Init the client and target the testnet network:
     const coreumClient = await CoreumJS("testnet");

     // Let's define the modules we are going to use:
     const {nftbeta, nft} = coreumClient.queryClients;


     const nfts = await nftbeta.nfts(
       // First arg: Class ID<string>
       "lnfts-testcore14c90dgy5gj9dczhlpcyww94dcupmxdduy408gu",
       // Second arg: The Owner Address<string>
       "")
    //  const allNfts = await nft.class("")


    res.status(200).json({ nfts: nfts })
}
