import React, { useState } from 'react';
import './BetModal.css';
import BetConfirmationModal from '../BetConfirmationModal/BetConfirmationModal';

const BetModal = ({ isOpen, closeModal, handleBetAmount, data }) => {
  const { title, price, choices } = data;
  const [selectedOption, setSelectedOption] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const isOptionSelected = selectedOption !== '';

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleBetInputChange = (event) => {
    setBetAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isOptionSelected) {
      alert('Please select an option');
      return;
    }

    if (!betAmount) {
      alert('Please enter a bet amount');
      return;
    }

    handleBetAmount(selectedOption, betAmount);
    setBetAmount('');
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  const handleModalClose = () => {
    setBetAmount('');
    closeModal();
  };

  return (
    <>
      <div className={`modal-overlay ${isOpen ? 'is-open' : ''}`}>
        <div className={`modal-content ${isOpen ? 'is-open' : ''}`}>
          <div className="modal-header">
            <button onClick={handleModalClose} className="bet-modal-close-button">X</button>
            <h3>{title}</h3>
          </div>
          <div className="modal-body">
            <h4>{Number(price).toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 })}</h4>
            {choices && choices.length > 0 && (
              <div className="choice-container">
                {choices.map((choice, index) => (
                  <div key={index} className="choice-selection">
                    <input
                      type="radio"
                      id={`choice-${index}`}
                      name={title}
                      value={choice}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor={`choice-${index}`}>{choice}</label>
                  </div>
                ))}
              </div>
            )}
            <form onSubmit={handleSubmit} className="entry-form">
              <input
                type="number"
                name="betAmount"
                min="1"
                required
                value={betAmount}
                onChange={handleBetInputChange}
                className="bet-amount-input"
                placeholder="Wager"
              />
              <button type="submit" disabled={!isOptionSelected}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <BetConfirmationModal
          title={title}
          choice={selectedOption}
          betAmount={betAmount}
          closeModal={handleConfirmationClose}
        />
      )}
    </>
  );
};

export default BetModal;
