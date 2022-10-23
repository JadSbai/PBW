import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const { NFT_STORAGE_API_KEY } = process.env

async function storePrescription() {
    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })
    const metadata = await client.store({
        name: 'NehaPrescriptionNFT',
        description: JSON.stringify(
            {
                drugInfo: {
                    medicationName: 'Morphine',
                    doseAmount: '1000000',
                    doseFrequency: { value: '2000', timeUnit: 'doses per day' },
                    courseDuration: { value: '239412394', timeUnit: 'days' },
                    notes: 'This is a bad idea'
                },
                patientId: 12345,
                doctorId: 12345,
                appointmentId: 12345,
            }
            ),
        image: new Blob([]),
    })
    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

async function storeStockReq() {
    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })
    const metadata = await client.store({
        name: 'StockReqNFT',
        description: JSON.stringify(
            {
                drugInfo:  {
                    medicationName: 'Morphine',
                    doseAmount: '300',
                    doseFrequency: { value: '3', timeUnit: 'doses per day' },
                    courseDuration: { value: '3', timeUnit: 'months' },
                    notes: 'This is probably a bad idea'
                },
                prescriptionId: 1,
            }),
        image: new Blob([])
    })
    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

async function storeStockAlloc() {
    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })
    const metadata = await client.store({
        name: 'StockAllocNFT',
        description: JSON.stringify(
            {
                boxId: 12345,
                reservationId: 1,
            }),
        image: new Blob([])
    })
    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

async function storeReservation() {
    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })
    const metadata = await client.store({
        name: 'ReservationNFT',
        description: JSON.stringify(
            {
                boxId: 12345,
                reservation: 1,
                stock_request_id: 1,
                pharmacy_id: 12345,
            }),
        image: new Blob([])
    })
    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

storeStockAlloc()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });