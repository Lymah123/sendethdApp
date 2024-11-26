# SendETH DApp

SendETH DApp is a decentralized application (DApp) built on Ethereum that allows users to securely send Ether (ETH) to any Ethereum address. This lightweight and intuitive platform provides seamless wallet integration and transaction management.

## Feature
- 🦊 Wallet Integration: Easily connect your Ethereum wallet (e.g., MetaMask).
- ⚡ Fast Transactions: Send ETH in seconds with low fees.
- 🔐 Secure Transfers: Transactions are securely signed using your wallet's private key.
- 💻 Modern Interface: Clean and responsive design for desktop and mobile.
- 🌐 Decentralized: Fully decentralized application powered by Ethereum blockchain.

## Technologies Used

- Frontend: HTML, CSS (TailwindCSS), JavaScript
- Blockchain Integration:  ethers.js
- Backend (if applicable): Smart Contracts (Solidity) deployed on Ethereum network
### Tools:
- MetaMask for wallet integration
- Ganache or Hardhat for local blockchain testing
- TailwindCSS for styling

```
📂 project-root/
├── 📂 src/               # JavaScript source files
│   ├── home.js           # Main logic for wallet connection and ETH transfers
│   └── contract.js       # Ethereum smart contract interaction logic
├── 📂 styles/            # Styling files
│   ├── style.css         # Main stylesheet (includes TailwindCSS utilities)
├── 📂 assets/            # Static files (e.g., favicon, images)
├── 📄 index.html         # Main homepage
├── 📄 package.json       # Node.js dependencies and scripts
├── 📄 tailwind.config.js # TailwindCSS configuration
├── 📄 README.md          # Project documentation
└── 📄 LICENSE            # License file
```
## Gettin Started

### Prerequisites

Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) and npm
- [MetaMask](https://metamask.io/) browser extension
- Git (Optional) for cloning the repository

## Installation

1. Clone the repository

```
git clone https://github.com/your-username/sendeth-dapp.git
cd sendeth-dapp
```
2. Install dependencies

`npm install`

3. Start development sever

`npm run start`

4. Open the app in your browser

`http://localhost:1573`

## Usage

- Open the app in your browser.
- Connect your MetaMask wallet by clicking the **"Connect Wallet"** button.
- Enter the recipient's Ethereum address and the amount of ETH you wish to send.
- Confirm the transaction in MetaMask.
- Wait for the transaction to be processed on the Ethereum network.

## Development Workflow

### Frontend Development

The app uses JavaScript for wallet interactions and TailwindCSS for styling. Edit files in the `src/` or `styles/` directories as needed.

Run the TailwindCSS build tool:
`npx tailwindcss -i ./src/input.css -o ./styles/style.css --watch`

### Smart Contract Deployment

- Use Hardhat or Truffle to deploy your smart contract on a test network (e.g., Rinkeby or Ganache).
- Update the contract ABI and address in the `src/contract.js` file.
