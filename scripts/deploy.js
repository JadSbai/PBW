async function main() {
    const Practice = await ethers.getContractFactory("Practice");

    // Start deployment, returning a promise that resolves to a contract object
    const practice = await Practice.deploy("PBW Practice");
    console.log("Contract deployed to address:", practice.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });