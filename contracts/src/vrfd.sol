// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract vrfd {
    //---------------------------------------
    // 
    //       Structs
    //
    //---------------------------------------

    // Struct to store cases
    struct Case {
        string name;
        string details;
    }

    //---------------------------------------
    // 
    //       Events
    //
    //---------------------------------------

    event CaseCreated(string name, string details, uint256 caseId);

    //---------------------------------------
    // 
    //       Variables
    //
    //---------------------------------------

    uint256 public casePrice;
    address public owner;
    mapping(string => address) public caseToOwner;
    mapping(uint256 => Case) public cases;

    //---------------------------------------
    // 
    //       Constructor
    //
    //---------------------------------------

    // Constructor that sets the owner to the deployer address
    constructor(uint256 newPrice) {
        owner = msg.sender;
        casePrice = newPrice;
    }

    //---------------------------------------
    // 
    //       Modifiers
    //
    //---------------------------------------

    // Modifier to check if the user is the owner
    modifier ownerOnly() {
        require(msg.sender == owner, "not the owner");
        _;
    }

    //---------------------------------------
    // 
    //       Admin Logic
    //
    //---------------------------------------

    // Function to set the price for opening a new case
    function setCasePrice(uint256 newPrice) public ownerOnly {
        casePrice = newPrice;
    }

    // Function to transfer ownership of the contract
    function setOwner(address newOwner) public ownerOnly {
        owner = newOwner;
    }

    // Function to withdraw money from the contract
    function withdraw() public ownerOnly {
        payable(msg.sender).transfer(address(this).balance);
    }

    // Function to approve a case
    function approveCase(uint256 case_id, address addr) public ownerOnly {
        string name = cases[]
        caseToOwner[]
    }
}
