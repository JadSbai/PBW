import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const { NFT_STORAGE_API_KEY } = process.env

async function storePrescription() {
    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })
    const metadata = await client.store({
        name: 'ExampleNFT',
        description: JSON.stringify({}),
    })
    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

storeAsset()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });