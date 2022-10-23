// async function main() {
//     // const Practice = await ethers.getContractFactory("Practice");
//     // const practice = await Practice.deploy("PBW Practice");
//     // console.log("Contract practice deployed to address:", practice.address);
//     //
//     // const Broker = await ethers.getContractFactory("Broker");
//     // const broker = await Broker.deploy("PBW Broker");
//     // console.log("Contract broker deployed to address:", broker.address);
//     //
//     // const Checkout = await ethers.getContractFactory("CheckoutNFT");
//     // const checkout = await Checkout.deploy();
//     // console.log("Contract checkout deployed to address:", checkout.address);
//     //
//     // const Patient = await ethers.getContractFactory("Patient");
//     // const patient = await Patient.deploy(12345);
//     // console.log("Contract patient deployed to address:", patient.address);
//     //
//     // const Pharmacy = await ethers.getContractFactory("Pharmacy");
//     // const pharmacy = await Pharmacy.deploy("PBW Pharmacy", {latitude: 50, longitude: 1}, 12345);
//     // console.log("Contract pharmacy deployed to address:", pharmacy.address);
//     //
//     // const PrescriptionNFT = await ethers.getContractFactory("PrescriptionNFT");
//     // const prescriptionNFT = await PrescriptionNFT.deploy();
//     // console.log("Contract prescriptionNFT deployed to address:", prescriptionNFT.address);
//     //
//     // const ReservationToken = await ethers.getContractFactory("ReservationNFT");
//     // const reservationToken = await ReservationToken.deploy();
//     // console.log("Contract reservationToken deployed to address:", reservationToken.address);
//     //
//     // const StockAllocation = await ethers.getContractFactory("StockAllocationNFT");
//     // const stockAllocation = await StockAllocation.deploy();
//     // console.log("Contract stockAllocation deployed to address:", stockAllocation.address);
//     //
//     // const StockReq = await ethers.getContractFactory("StockReqNFT");
//     // const stockReq = await StockReq.deploy();
//     // console.log("Contract stockReq deployed to address:", stockReq.address);
//
//     const PatientVerifier = await ethers.getContractFactory("PatientVerifier");
//     const patientVerifier = await PatientVerifier.deploy(
//         "PatientVerifier",
//         "PVNFT"
//     );
//
//     await patientVerifier.deployed();
//     console.log(" deployed to:", patientVerifier.address);
// }

async function main() {

    const circuitId = "credentialAtomicQuerySig";
    const validatorAddress = "0xb1e86C4c687B85520eF4fd2a0d14e81970a15aFB";

    // Grab the schema hash from Polygon ID Platform
    const schemaHash = "a25116a4cd128207a21a076d2a364eba"

    const schemaEnd = fromLittleEndian(hexToBytes(schemaHash))

    const query = {
        schema: ethers.BigNumber.from(schemaEnd),
        slotIndex: 2, // slotIndex2 indicates the value stored as Attribute 1 inside the claim
        operator: 1,
        value: [1, ...new Array(63).fill(0).map(i => 0)], // the value must be 1 = true
        circuitId,
    };

    // add the address of the contract just deployed
    PatientVerifierAddress = "0xCE73A0b914341DC3e585fB793970D8e8eDfb6e50"

    let patientVerifier = await hre.ethers.getContractAt("PatientVerifier", PatientVerifierAddress)

    const requestId = await patientVerifier.TRANSFER_REQUEST_ID();

    try {
        await patientVerifier.setZKPRequest(
            requestId,
            validatorAddress,
            query
        );
        console.log("Request set");
    } catch (e) {
        console.log("error: ", e);
    }
}

function hexToBytes(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

function fromLittleEndian(bytes) {
    const n256 = BigInt(256);
    let result = BigInt(0);
    let base = BigInt(1);
    bytes.forEach((byte) => {
        result += base * BigInt(byte);
        base = base * n256;
    });
    return result;
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });