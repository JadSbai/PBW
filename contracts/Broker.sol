pragma solidity ^0.8.12;
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Pharmacy.sol";
import "./StockReq.sol";
import "./Checkout.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Broker is ERC721{
    using Counters for Counters.Counter;
    Counters.Counter private _pharmacyIds;
    address public owner;
    uint private reservationTokenId;
    uint private stockReqTokenId;
    uint private checkoutTokenId;


    /* when the blog is deployed, give it a name */
    /* also set the creator as the owner of the contract */
    constructor(string memory _name) ERC721("Broker", "B")  {
        owner = msg.sender;
    }

    struct Location {
        uint latitude;
        uint longitude;
    }

    struct Drug {
        string name;
        uint id;
    }

    struct LocalPharmacy {
        Location location;
        string name;
        uint id;
    }

    // Modifier to check that the caller is the owner of
    // the contract.
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    mapping(uint => LocalPharmacy) private idToPharmacy;

    /* fetches all posts */
    function fetchPharmacies() public view returns (LocalPharmacy[] memory) {
        uint itemCount = _pharmacyIds.current();

        LocalPharmacy[] memory pharmacies = new LocalPharmacy[](itemCount);
        for (uint i = 0; i < itemCount; i++) {
            uint currentId = i + 1;
            LocalPharmacy storage currentItem = idToPharmacy[currentId];
            pharmacies[i] = currentItem;
        }
        return pharmacies;
    }

    function createPharmacy(string memory _name, Location memory location, uint id) public onlyOwner{
        _pharmacyIds.increment();
        uint pharmacy_id = _pharmacyIds.current();
        LocalPharmacy storage pharmacy = idToPharmacy[pharmacy_id];
        pharmacy.location = location;
        pharmacy.name = _name;
        pharmacy.id = id;
    }

    function checkStock(address pharmacyAddress, uint drugId) public view returns(bool) {
        Pharmacy pharmacy = Pharmacy(pharmacyAddress);
        return pharmacy.checkStock(drugId);
    }

    function setReservationTokenId(uint id) public{
        reservationTokenId = id;
    }

    function transferReservationToken(address patientAddress) public{
        _transfer(owner, patientAddress, reservationTokenId);
    }

    function createStockReqToken(address stockReqContractAddress, address pharmacyAddress, string memory tokenURI) public{
        StockReqNFT contr = StockReqNFT(stockReqContractAddress);
        stockReqTokenId = contr.mintNFT(pharmacyAddress, tokenURI);
    }

    function createCheckoutToken(address checkoutContractAddress, string memory tokenURI) public {
        CheckoutNFT contr = CheckoutNFT(checkoutContractAddress);
        checkoutTokenId = contr.mintNFT(owner, tokenURI);
    }



}
