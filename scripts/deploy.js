async function main() {
    const Practice = await ethers.getContractFactory("Practice");
    const practice = await Practice.deploy("PBW Practice");
    console.log("Contract practice deployed to address:", practice.address);

    const Broker = await ethers.getContractFactory("Broker");
    const broker = await Broker.deploy("PBW Broker");
    console.log("Contract broker deployed to address:", broker.address);

    const Checkout = await ethers.getContractFactory("CheckoutNFT");
    const checkout = await Checkout.deploy();
    console.log("Contract checkout deployed to address:", checkout.address);

    const Patient = await ethers.getContractFactory("Patient");
    const patient = await Patient.deploy(12345);
    console.log("Contract patient deployed to address:", patient.address);

    const Pharmacy = await ethers.getContractFactory("Pharmacy");
    const pharmacy = await Pharmacy.deploy("PBW Pharmacy", {latitude: 50, longitude: 1}, 12345);
    console.log("Contract pharmacy deployed to address:", pharmacy.address);

    const PrescriptionNFT = await ethers.getContractFactory("PrescriptionNFT");
    const prescriptionNFT = await PrescriptionNFT.deploy();
    console.log("Contract prescriptionNFT deployed to address:", prescriptionNFT.address);

    const ReservationToken = await ethers.getContractFactory("ReservationNFT");
    const reservationToken = await ReservationToken.deploy();
    console.log("Contract reservationToken deployed to address:", reservationToken.address);

    const StockAllocation = await ethers.getContractFactory("StockAllocationNFT");
    const stockAllocation = await StockAllocation.deploy();
    console.log("Contract stockAllocation deployed to address:", stockAllocation.address);

    const StockReq = await ethers.getContractFactory("StockReqNFT");
    const stockReq = await StockReq.deploy();
    console.log("Contract stockReq deployed to address:", stockReq.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });