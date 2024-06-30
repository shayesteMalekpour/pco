import React, { useState } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";
import { slideToggle } from "../../composables/slideToggle.js";
import TopNav from "../top-nav/top-nav.jsx";
import menus from "../../config/landing-menu.jsx";
const LandingHeader = () => {
  const [web3, setWeb3] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [signature, setSignature] = useState("");

  const toggleAppSidebarMobile = () => {
    slideToggle(document.querySelector(".app-top-nav"));
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(`Connected account: ${accounts[0]}`);
        setWeb3(new Web3(window.ethereum));
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  const verifyUser = async () => {
    if (web3) {
      const userAddress = walletAddress;
      const timestamp = Math.floor(Date.now() / 1000);
      setTimestamp(timestamp);

      const message = `${userAddress.toLowerCase()}${username}${email}${timestamp}`;
      console.log(`Message to sign: ${message}`);

      try {
        const signature = await window.ethereum.request({
          method: "personal_sign",
          params: [message, userAddress],
        });
        setSignature(signature);
        console.log(`Signature: ${signature}`);

        const response = await fetch("/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]")
              .value,
          },
          body: JSON.stringify({
            user_address: userAddress,
            username: username,
            email: email,
            timestamp: timestamp,
            signature: signature,
          }),
        });

        const result = await response.json();
        console.log("Response from backend:", result);

        if (result.status === "Success") {
          alert(
            "User verified successfully, now sending transaction with MetaMask."
          );

          const contractAddress = "0x56a6c978dfe620e4c98206a990268e7190df2eef";
          const contractAbi = [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "walletAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "username",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
              ],
              name: "UserRegistered",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_username",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_email",
                  type: "string",
                },
              ],
              name: "registerUser",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_walletAddress",
                  type: "address",
                },
              ],
              name: "getUserInfo",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ];
          const contract = new web3.eth.Contract(contractAbi, contractAddress);

          const transactionParameters = {
            to: contractAddress,
            from: userAddress,
            data: contract.methods.registerUser(username, email).encodeABI(),
            gas: "2000000",
            gasPrice: web3.utils.toWei("0", "gwei"),
          };

          const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
          });
          console.log(`Transaction hash: ${txHash}`);
          alert(`Transaction successful with hash: ${txHash}`);
        } else {
          alert(`Verification failed: ${result.message}`);
        }
      } catch (error) {
        console.error(
          "Error signing message or sending transaction:",
          error.message
        );
        alert(`Error signing message or sending transaction: ${error.message}`);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  return (
    <div>
      <div className="landing-header">
        <div>
          <div className="mobile-toggler">
            <button
              type="button"
              className="menu-toggler"
              onClick={toggleAppSidebarMobile}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
          <div className="brand">
            <Link to="/" className="brand-logo">
              <img src="assets/img/logo/logorec.png" alt="logo" />
            </Link>
          </div>
        </div>
        <TopNav menus={menus} />
        <button
          type="button"
          onClick={connectWallet}
          className="btn btn-outline-light mb-1 me-1"
        >
          connect{" "}
        </button>
      </div>
      <form id="verificationForm">
        {/* <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="hidden" id="wallet_address" name="wallet_address" value={walletAddress} />
        <input type="hidden" id="timestamp" name="timestamp" value={timestamp} />
        <input type="hidden" id="signature" name="signature" value={signature} /> */}
        {/* <button type="button" onClick={connectWallet}>Connect Wallet</button>
        <button type="button" onClick={verifyUser}>Verify User</button> */}
      </form>
    </div>
  );
};

export default LandingHeader;
