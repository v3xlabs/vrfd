// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../lib/forge-std/src/Test.sol";
import "../src/vrfd.sol";

contract CounterTest is Test {
    vrfd public vrfdcontract;

    function setUp() public {
        vrfdcontract = new vrfd(5);
    }

    function testPrice() public {
        assertEq(vrfdcontract.casePrice(), 5);
        vrfdcontract.setCasePrice(4);
        assertEq(vrfdcontract.casePrice(), 4);
    }

    function testOwnershipTransfer() public {
        assertEq(vrfdcontract.owner(), address(this));
        vrfdcontract.setOwner(address(0));
        assertEq(vrfdcontract.owner(), address(0));
    }
}
