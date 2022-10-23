pragma solidity ^0.8.12;
import "@openzeppelin/contracts/utils/Counters.sol";
import "./ReservationToken.sol";
import "./StockAllocation.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Pharmacy is ERC721{
    using Counters for Counters.Counter;
    Counters.Counter private _boxIds;
    address public owner;
    Location private location;
    uint private id;
    string private pharmacy_name;
    mapping(uint => uint[]) stock;
    uint private stockAllocTokenId;
    uint private reservationTokenId;
    uint private stockReqTokenId;


    // Modifier to check that the caller is the owner of
    // the contract.
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }


    constructor(string memory _name, Location memory _location, uint _id) ERC721("Pharmacy", "PH") {
        location = _location;
        id = _id;
        pharmacy_name = _name;
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

    mapping(uint => uint) boxIdToIndex;

    function addStock(uint drug_id, uint quantity) public onlyOwner{
        for (uint i = 0; i < quantity; i++) {
            _boxIds.increment();
            uint box_id = _boxIds.current();
            uint[] storage boxes = stock[drug_id];
            boxes.push(box_id);
            stock[drug_id] = boxes;
        }
    }

    function removeStock(uint drug_id, uint box_id) public{
        uint[] storage boxes = stock[drug_id];
        delete boxes[boxIdToIndex[box_id]];
        stock[drug_id] = boxes;
    }

    function checkStock(uint drugId) public view returns(bool) {
        uint[] storage boxes = stock[drugId];
        return boxes.length > 0;
    }

    function createReservationToken(address reservationContractAddress, address brokerAddress, string memory tokenURI) public{
        ReservationNFT contr = ReservationNFT(reservationContractAddress);
        reservationTokenId = contr.mintNFT(brokerAddress, tokenURI);
    }

    function createStockAllocToken(address stockAllocContractAddress, address brokerAddress, string memory tokenURI) public{
        StockAllocationNFT contr = StockAllocationNFT(stockAllocContractAddress);
        stockAllocTokenId = contr.mintNFT(owner, tokenURI);
    }

    function destroyStockAllocToken() public{
        address nullAddress = 0x0000000000000000000000000000000000000000;
        _transfer(owner, nullAddress, stockAllocTokenId);
    }

    function destroyStockReqToken() public{
        address nullAddress = 0x0000000000000000000000000000000000000000;
        _transfer(owner, nullAddress, stockReqTokenId);
    }

    function transferReservationToken(address brokerAddress) public{
        _transfer(owner, brokerAddress, reservationTokenId);
    }

    function setStockReqId(uint _id) public{
        stockReqTokenId = _id;
    }



}
