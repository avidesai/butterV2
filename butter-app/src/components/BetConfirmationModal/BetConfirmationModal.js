import React from 'react';
import Confetti from 'react-confetti';
import './BetConfirmationModal.css';

const BetConfirmationModal = ({ title, choice, betAmount, closeModal }) => {
  return (
    <div className="confirmation-overlay">
      <div className="confirmation-content">
        <h2>Bet Confirmation</h2>
        <p>Title: {title}</p>
        <p>Choice: {choice}</p>
        <p>Bet Amount: {betAmount}</p>
      </div>
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />
    </div>
  );
};

export default BetConfirmationModal;
