import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const { NFT_STORAGE_API_KEY } = process.env
const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })

async function storePrescription() {
    const metadata = await client.store({
        name: 'ExampleNFT',
        description: 'My ExampleNFT is an awesome artwork!',
        image: new File(
            [await fs.promises.readFile('assets/MyExampleNFT.png')],
            'MyExampleNFT.png',
            { type: 'image/png' }
        ),
    })
    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

async function storeStockRequest() {
    const metadata = await client.store({
        drug_info: {
            drug_id: '1',
            drug_quantity: '2',
            drug_dosage: '3',
            drug_frequency: '4',
            drug_duration: '5',
        },
        prescription_id: '1',
    })
    console.log("Stock request metdata stored on Filecoin and IPFS with URL:", metadata.url)
}


storeAsset()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });