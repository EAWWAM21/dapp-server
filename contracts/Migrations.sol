pragma solidity >=0.4.21 <0.6.0;

contract Migrations {
    address public owner;
    // 带有签名的函数 last_completed_migration() 必需返回一个uint
    uint public last_completed_migration;

    constructor() public {
        owner = msg.sender;
    }

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    // 需要一个签名为 setCompleted(uint) 的函数.
    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }

}
