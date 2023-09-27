// MyWalletPage.js
import React from 'react';
import LoginModal from '../../components/LoginModal/LoginModal';
import WalletInfo from '../../components/WalletInfo/WalletInfo';
import ActiveBets from '../../components/ActiveBets/ActiveBets';
import PastBets from '../../components/PastBets/PastBets';
import FriendsList from '../../components/FriendsList/FriendsList';

function MyWalletPage() {
  return (
    <div className="my-wallet-page">

      {/* Wallet Info */}
      <div className="wallet-info-container">
        <WalletInfo />
      </div>

      {/* Active Bets and Past Bets */}
      <div className="bets-container">
        <div className="active-bets">
          <ActiveBets />
        </div>
        <div className="past-bets">
          <PastBets />
        </div>
      </div>

      {/* Friends List */}
      <div className="friends-list-container">
        <FriendsList />
      </div>

      {/* Login Modal */}
      <LoginModal />
    </div>
  );
}

export default MyWalletPage;
