// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IECCOToken {
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract RewardDistributor {
    address public admin;
    IECCOToken public eccoToken;

    // Reward amounts (values in tokens, assuming 18 decimals)
    uint256 public constant OCEAN_CLEANUP_REWARD = 20 * 10 ** 18;
    uint256 public constant STREET_CLEANUP_REWARD = 10 * 10 ** 18;
    uint256 public constant RECYCLING_REWARD = 5 * 10 ** 18;

    constructor(address _eccoTokenAddress) {
        admin = msg.sender;
        eccoToken = IECCOToken(_eccoTokenAddress);
    }

    /**
     * @notice Automatically transfer reward tokens to the user.
     * @param user The recipient wallet address.
     * @param rewardType A string ("ocean", "street", "recycling") indicating the environmental action.
     */
    function autoReward(address user, string memory rewardType) external {
        // In production, proper access control should be implemented.
        uint256 rewardAmount = 0;
        bytes32 parsedType = keccak256(abi.encodePacked(rewardType));
        if (parsedType == keccak256("ocean")) {
            rewardAmount = OCEAN_CLEANUP_REWARD;
        } else if (parsedType == keccak256("street")) {
            rewardAmount = STREET_CLEANUP_REWARD;
        } else if (parsedType == keccak256("recycling")) {
            rewardAmount = RECYCLING_REWARD;
        } else {
            revert("Invalid reward type");
        }
        // Transfer tokens from the admin's reward pool to the user's wallet.
        require(eccoToken.transfer(user, rewardAmount), "Token transfer failed");
    }
}