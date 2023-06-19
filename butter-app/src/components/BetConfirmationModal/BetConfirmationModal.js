import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import './BetConfirmationModal.css';

const BetConfirmationModal = ({ title, choice, betAmount, closeModal }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 5000); // Close the confirmation modal after 5 seconds

    return () => clearTimeout(timer);
  }, [closeModal]);

  return (
    <div className="confirmation-overlay">
      <div className="confirmation-content">
        <button onClick={closeModal} className="bet-confirmation-close-button">X</button>
        <h2 className="confirmation-title">Bet Confirmation</h2>
        <p className="confirmation-message">Your bet has been placed successfully!</p>
        <div className="confirmation-details">
          <p className="confirmation-label">Bet:</p>
          <p className="confirmation-value">{title}</p>
        </div>
        <div className="confirmation-details">
          <p className="confirmation-label">Choice:</p>
          <p className="confirmation-value">{choice}</p>
        </div>
        {/* <div className="confirmation-details">
          <p className="confirmation-label">Bet Amount:</p>
          <p className="confirmation-value">{betAmount}</p>
        </div> */}
      </div>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={800}
        gravity={0.15}
        colors={['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548']}
      />
    </div>
  );
};

export default BetConfirmationModal;
