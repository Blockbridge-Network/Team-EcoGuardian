# Team-EcoGuardian

## Overview
*EcoGuardian* is an innovative, technology-driven platform designed to promote and reward sustainable, eco-friendly actions. Here's a brief summary of what it does, who it's for, and the problem it addresses:

- *What It Does:*  
  EcoGuardian harnesses  blockchain (among other technologies) to track and incentivize positive environmental behavior. It integrates features such as NFT rewards, donation vouchers, and other gamified elements that transform everyday sustainable activities—like recycling, reducing waste, or supporting NGOs—into tangible, verifiable actions. Users can earn rewards simply by participating in eco-friendly initiatives, and these rewards may come in the form of digital collectibles or vouchers that can be redeemed with approved partners.

- *Who It's For:*  
  The platform is aimed at environmentally conscious individuals, activists, and communities—anyone passionate about making a positive impact on the planet. It also serves NGOs, sustainable businesses, and organizations looking to bolster community engagement and demonstrate their commitment to environmental stewardship. In essence, EcoGuardian is for anyone who believes that leveraging technology can drive meaningful change in how we interact with our environment.

- *The Problem It’s Solving:*  
  At its core, EcoGuardian addresses the issue of environmental apathy and the lack of direct incentives for sustainable behavior. Despite increasing awareness of environmental challenges, everyday actions that could help combat pollution, waste, and resource depletion often go unrewarded. EcoGuardian bridges this gap by creating a system where sustainable actions are tracked, valued, and rewarded. This not only motivates individuals to adopt greener habits but also builds a verifiable ecosystem where communities and organizations can see measurable impacts—helping drive a broader transformation toward a healthier, more sustainable future.

In summary, EcoGuardian offers a novel, incentive-based approach to environmental conservation, making eco-friendly behavior both engaging and rewarding, while providing a transparent method to track real-world impact.

## Features
- *Tokenized Incentives & Rewards:*  
  EcoGuardian rewards eco-friendly behavior through digital assets like NFT rewards and donation vouchers. Users earn these tokens when they participate in sustainable activities, giving them tangible recognition for their positive environmental impact.

- *Decentralized Community Engagement:*  
  The platform connects environmentally conscious individuals, NGOs, and sustainable businesses, creating a supportive ecosystem where community participation is rewarded and shared insights help drive collective environmental action.

- *Sustainable Funding Mechanisms:*  
  By integrating components such as microgrant facilitation and innovative funding strategies, EcoGuardian enables communities to access funds for green projects like bioswale initiatives, further incentivizing sustainable development and infrastructure improvements.

- *Regulatory Guidance & Policy Support:*  
  EcoGuardian offers resources that simplify environmental regulations and provide guidance on compliance. This helps both individuals and organizations navigate the often complex landscape of environmental policies.

- *Real-Time Monitoring & Data Insights:*  
  The platform delivers actionable data by continuously monitoring environmental conditions and pollution sources, empowering proactive management of local and broader environmental issues.

- *AI-Driven Environmental Impact Assessments (Future Development):*  
  In a future release, EcoGuardian plans to incorporate AI-powered tools to analyze environmental data in real time. This development will offer more precise impact assessments and predictive insights, further enhancing decision-making for communities and policymakers.



## Project Structure
- `contracts/`: Smart contracts (written in Solidity via Remix)
- `frontend/`: DApp code (React, Next.js, or React Native)
- `assets/`: images
- `videos/`: Demo screen recordings


## Tech Stack
- Solidity + Hardhat (or Remix)
- Next.js 
- MetaMask / WalletConnect
- web3.js 

## How to Run Locally
Below is a concise step-by-step guide to running your EcoGuardian project locally without referencing environment variables:

---

### 1. Prerequisites
- *Node.js and npm or Yarn:*  
  Ensure you have [Node.js](https://nodejs.org/) installed (v14 or above is recommended).


- *Git:*  
  To clone the repository if you haven’t already.

---

### 2. Clone the Repository
Clone your project repository from GitHub:
  
bash
git clone https://github.com/yourusername/your-ecoguardian-repo.git
cd your-ecoguardian-repo


---

### 3. Install Dependencies
Install the project dependencies with your package manager:

bash
# Using npm:
npm install

# Or using Yarn:
yarn install


---

### 4. (Optional) Deploy/Interact with Smart Contracts on a Local Blockchain
- *For Deployment:*  
  Use tools like Remix, Hardhat, or Truffle to deploy your smart contracts on your local blockchain.
  
- *For Interaction:*  
  Ensure your contracts’ deployed addresses are correctly referenced in your code (hard-coded or otherwise) for testing locally.

---

### 5. Run the Development Server
Start your Next.js development server:

bash
# Using npm:
npm run dev

# Or using Yarn:
yarn dev


This command will start the development server, usually running on [http://localhost:3000](http://localhost:3000).

---

### 6. Open Your Project in the Browser
Visit [http://localhost:3000](http://localhost:3000) in your browser to see your EcoGuardian project in action. Test out functionalities like the mint button, cash redeem, and support NGOs to ensure the UI and blockchain interactions work as expected.

---

### 7. Testing and Debugging
- *Console Logs:* Check your terminal and browser console for logs or errors to verify blockchain transactions and UI feedback.
- *Wallet Integration:* If using MetaMask, ensure it’s connected to your local blockchain network. 

---

Following these steps should help you run EcoGuardian locally, allowing you to test both the front-end and blockchain interactions in your development environment without relying on external environment variables.



## Contracts
| Contract | Address | Network |
|----------|---------|---------|
| ECCOToken.sol | 0xDeCd13EAA7E09c08D80A52CC4AB23E56Bd2d7f81| Sonic Testnet |
| RewardDistributor.sol | 0x66b1fF424820E1E9f71b39de8e837E3216045110 | Sonic Testnet |
| EcoWarriorNFT.sol | 0x797692AF4dC350234ec17D64eB6c0C7D17cAb3d7 | Sonic Testnet |


## 🎥 Demo Video
[Watch here](https://youtu.be/cpah0zzOuyQ)

## Authors
- Ephraim Kofi Ayi Kwapong(Whole project)

## 📄 License
MIT or GPL-3.0
