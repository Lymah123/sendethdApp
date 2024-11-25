import { ethers } from "ethers";

let provider;
let signer;

const connectWalletButton = document.getElementById("connectWallet");
const accountDisplay = document.getElementById("account");
const balanceDisplay = document.getElementById("balance");
const sendButton = document.getElementById("send");
const statusDisplay = document.getElementById("status");

connectWalletButton.addEventListener("click", async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      provider = new ethers.BrowserProvider(window.ethereum);
      signer = provider.getSigner();

      const account = await signer.getAddress();
      accountDisplay.innerText = `Connected Account: ${account}`;

      const balance = await provider.getBalance(account);
      balanceDisplay.innerText = `Balance: ${ethers.formatEther(balance)} ETH`;
    } catch (error) {
      console.error(error);
      accountDisplay.innerText = "Connection failed!";
    }
  } else {
    accountDisplay.innerText = "Please install MetaMask!";
  }
});

sendButton.addEventListener("click", async () => {
  const recipient = document.getElementById("recipient").value;
  const amount = document.getElementById("amount").value;

  if (!recipient || !amount) {
    statusDisplay.innerText = "Please enter recipient and amount.";
    return;
  }

  try {
    // Send ETH
    const tx = await signer.sendTransaction({
      to: recipient,
      value: ethers.parseEther(amount),
    });

    statusDisplay.innerText = `Transaction sent: ${tx.hash}`;
    console.log(tx);

    // Wait for transaction confirmation
    await tx.wait();
    statusDisplay.innerText = "Transaction confirmed!";
  } catch (error) {
    console.error(error);
    statusDisplay.innerText = `Error: ${error.message}`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const goToHomeButton = document.getElementById("homePage");

  if (goToHomeButton) {
    goToHomeButton.addEventListener("click", () => {
      window.location.href = "/home.html"; // Navigates to home.html
    });
  } else {
    console.error("Button with ID 'homePage' not found.");
  }
});
