pragma solidity ^0.8.12;

import "@openzeppelin/contracts/utils/Counters.sol";
import "./PrescriptionNFT.sol";

contract Practice {
    string public name;
    address public owner;

    using Counters for Counters.Counter;
    Counters.Counter private _doctorIds;
    Counters.Counter private _appointmentIds;
    Counters.Counter private _patientIds;
    uint private prescriptionTokenId;

    // Appointment struct, getMyAppointemnts,

    struct Appointment {
        uint doctor_id;
        uint patient_id;
    }

    struct Doctor {
        string username;
        string password;
        bool is_logged_in;
        uint id;
    }

    /* mappings can be seen as hash tables */
    mapping(string => uint) private usernameToId;
    mapping(uint => Doctor) private idToDoctor;
    mapping(uint => Appointment) private idToAppointment;

    /* when the blog is deployed, give it a name */
    /* also set the creator as the owner of the contract */
    constructor(string memory _name) {
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
    function signUp(string memory username, string memory passwordHash) public onlyOwner {
        _doctorIds.increment();
        uint doctor_id = _doctorIds.current();
        Doctor storage doctor = idToDoctor[doctor_id];
        doctor.id = doctor_id;
        doctor.password = passwordHash;
        doctor.is_logged_in = true;
    }

    function logIn(string memory username, string memory passwordHash) public returns(bool) {
        Doctor storage doctor = idToDoctor[usernameToId[username]];
        bool is_valid = keccak256(bytes(passwordHash)) == keccak256(bytes(doctor.password));
        doctor.is_logged_in = is_valid;
        return is_valid;
    }

    function createPrescriptionToken(address prescriptionContractAddress, address brokerAddress, string memory tokenURI) public{
        PrescriptionNFT contr = PrescriptionNFT(prescriptionContractAddress);
        prescriptionTokenId = contr.mintNFT(brokerAddress, tokenURI);
    }

    /* fetches all posts */
    function getDoctorAppointments(uint doctor_id) public view returns (Appointment[] memory) {
        uint itemCount = _appointmentIds.current();

        Appointment[] memory appointments = new Appointment[](itemCount);
        for (uint i = 0; i < itemCount; i++) {
            uint currentId = i + 1;
            Appointment storage currentItem = idToAppointment[currentId];
            if(currentItem.doctor_id == doctor_id){
                appointments[i] = currentItem;
            }
        }
        return appointments;
    }

    /* creates a new post */
    function createAppointment(uint doctor_id, uint patient_id) public onlyOwner {
        _appointmentIds.increment();
        uint app_id = _appointmentIds.current();
        Appointment storage appointment = idToAppointment[app_id];
        appointment.doctor_id = doctor_id;
        appointment.patient_id = patient_id;
    }
}
