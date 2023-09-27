import React from 'react';
import './WalletInfo.css'; // Import the CSS file for styling

function WalletInfo() {
  // You can use sample data or fetch real user wallet data here
  const walletData = {
    accountBalance: 1000, // Replace with user's account balance
    lifetimeBets: 4, // Replace with user's karma points
    totalProfitLoss: 500, // Replace with user's total profit/loss
    totalROI: 25, // Replace with user's total ROI
    monthlyProfitLoss: 100, // Replace with user's monthly profit/loss
    monthlyROI: 10, // Replace with user's monthly ROI
  };

  return (
    <div className="wallet-info">
      <h2>Wallet Information</h2>
      <div className="wallet-details">
        <div className="wallet-item">
          <span className="wallet-label">Account Balance:</span>
          <span className="wallet-value">${walletData.accountBalance}</span>
        </div>
        <div className="wallet-item">
          <span className="wallet-label">Total Bets:</span>
          <span className="wallet-value">{walletData.lifetimeBets}</span>
        </div>
        <div className="wallet-item">
          <span className="wallet-label">Total Profit/Loss:</span>
          <span className="wallet-value">${walletData.totalProfitLoss}</span>
        </div>
        <div className="wallet-item">
          <span className="wallet-label">Total ROI:</span>
          <span className="wallet-value">{walletData.totalROI}%</span>
        </div>
        <div className="wallet-item">
          <span className="wallet-label">Monthly Profit/Loss:</span>
          <span className="wallet-value">${walletData.monthlyProfitLoss}</span>
        </div>
        <div className="wallet-item">
          <span className="wallet-label">Monthly ROI:</span>
          <span className="wallet-value">{walletData.monthlyROI}%</span>
        </div>
      </div>
    </div>
  );
}

export default WalletInfo;
