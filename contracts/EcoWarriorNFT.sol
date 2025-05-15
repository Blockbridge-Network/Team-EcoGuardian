// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract EcoWarriorNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address public admin;
    IERC20 public eccoToken; // Reference to the ECCOToken contract

    constructor(address _eccoTokenAddress) ERC721("EcoWarrior", "ECOWAR") {
        admin = msg.sender;
        eccoToken = IERC20(_eccoTokenAddress);
    }

    /**
     * @notice Mints a new EcoWarrior NFT to the caller.
     * @dev Requires the caller to have at least 1,000 ECCO tokens.
     * @return newItemId The token ID of the minted NFT.
     */
    function mintNFT() external returns (uint256) {
        // Confirm the caller's wallet holds at least 1,000 ECCO tokens (using 18 decimals).
        require(
            eccoToken.balanceOf(msg.sender) >= 1000 * 10 ** 18,
            "Insufficient ECCO tokens to mint NFT"
        );
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        return newItemId;
    }
}