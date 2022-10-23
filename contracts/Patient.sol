pragma solidity ^0.8.12;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Patient is ERC721{
    uint public id;
    address public owner;
    uint private reservationTokenId;

    /* also set the creator as the owner of the contract */
    constructor(uint _id, address _owner) ERC721("Patient", "P") {
        id = _id;
        owner = _owner;
    }

    /* transfers ownership of the contract to another address */
    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }

    /* this modifier means only the contract owner can */
    /* invoke the function */
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function transferReservationToken(address pharmacyAddress) public{
        _transfer(owner, pharmacyAddress, reservationTokenId);
    }

    function setReservationTokenId(uint _id) public{
        reservationTokenId = _id;
    }

}
