const CONTRACT_ADDRESS = "0x5Bcb3420340D8818f232F5bEa73a51FDAB1458e8"
const META_DATA_URL = "ipfs://bafyreic2vnh3wpgo4iabotwh2tkiznkykw7feujp2t4bwjeqosnhhbdcom/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
    const StockAllocationNFT = await ethers.getContractFactory("StockAllocationNFT")
    const [owner] = await ethers.getSigners()
    const id = await StockAllocationNFT.attach(contractAddress).mintNFT("0x3E65Ef7bEa78c1451c5b6769ad33b5E464d622Ed", metaDataURL)
    console.log("NFT minted to: ", id)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });