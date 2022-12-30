// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

/*
This contract handles token transactions for the Post contract
It handles the minting and transfer operations for the Post contract
 */

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PostToken is ERC20 {
    uint validationReward = 0.02 * (10**18);
    uint creatorReward = 2* (10**18);
    constructor(
        string memory name,
        string memory symbol,
        uint initial
    ) ERC20(name, symbol){
        _mint(msg.sender, initial);
    }

    function creatorMint(address creator) external {
        _mint(creator, creatorReward);
    }

    function validatedMint(address postOwner) external {
        _mint(postOwner, validationReward);
    }
}
