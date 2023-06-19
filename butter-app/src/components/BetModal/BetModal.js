import React, { useState } from 'react';
import './BetModal.css';

const BetModal = ({ isOpen, closeModal, handleBetAmount, data }) => {
  const { title, price, choices } = data;
  const [selectedOption, setSelectedOption] = useState('');
  const [betAmount, setBetAmount] = useState('');
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
    setBetAmount(''); // Reset the betAmount state after submitting
    closeModal();
  };

  const handleModalClose = () => {
    setBetAmount(''); // Reset the betAmount state when closing the modal
    closeModal();
  };

  return (
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
              placeholder="Wager Amount"
            />
            <button type="submit" disabled={!isOptionSelected}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BetModal;
