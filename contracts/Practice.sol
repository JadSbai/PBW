pragma solidity ^0.8.12;

import "@openzeppelin/contracts/utils/Counters.sol";

contract Practice {
    string public name;
    address public owner;

    using Counters for Counters.Counter;
    Counters.Counter private _doctorIds;

    // Appointment struct, getMyAppointemnts,

    struct Doctor {
        string username;
        string password;
        string name;
        bool is_logged_in;
    }

    /* mappings can be seen as hash tables */
    mapping(string => uint) private usernameToId;
    mapping(uint => Doctor) private idToDoctor;

    /* when the blog is deployed, give it a name */
    /* also set the creator as the owner of the contract */
    constructor(string memory _name) {
        console.log("Deploying Practice with name:", _name);
        name = _name;
        owner = msg.sender;
    }

    /* updates the blog name */
    function updateName(string memory _name) public {
        name = _name;
    }

    /* transfers ownership of the contract to another address */
    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }

    /* fetches all posts */
    function fetchDoctors() public view returns (Doctor[] memory) {
        uint itemCount = _doctorIds.current();

        Doctor[] memory doctors = new Doctor[](itemCount);
        for (uint i = 0; i < itemCount; i++) {
            uint currentId = i + 1;
            Doctor storage currentItem = idToDoctor[currentId];
            doctors[i] = currentItem;
        }
        return doctors;
    }

    /* this modifier means only the contract owner can */
    /* invoke the function */
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    /* creates a new post */
    function signUp(string memory username, string memory passwordHash, string memory name) public onlyOwner {
        _doctorIds.increment();
        uint doctor_id = _doctorIds.current();
        Doctor storage doctor = idToDoctor[doctor_id];
        doctor.id = doctor_id;
        doctor.name = name;
        doctor.password = hash;
        doctor.is_logged_in = true;
    }

    function logIn(string username, string passwordHash) {
        Doctor doctor = idToDoctor[usernameToId[username]];
        bool is_valid = passwordHash == doctor.password;
        doctor.is_logged_in = is_valid;
        return is_valid;
    }
}
