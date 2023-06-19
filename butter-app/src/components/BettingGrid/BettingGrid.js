import React, { useState, useEffect } from 'react';
import moment from 'moment';
import betData from './bet-data.json';
import './BettingGrid.css';
import BetModal from '../BetModal/BetModal';

const BettingGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [betOptions, setBetOptions] = useState([]);

  const handleBetAmount = (selectedOption, betAmount) => {
    console.log(`Selected option: ${selectedOption}, Bet amount: ${betAmount}`);
  };

  const openModal = (title, price, choices) => {
    setModalOpen(true);
    setModalData({ title, price, choices });
  };

  useEffect(() => {
    setBetOptions(betData['live-bets']);

    const interval = setInterval(() => {
      setBetOptions(prevState => {
        return prevState.map(option => {
          const endTime = moment(option['end-time']);
          const now = moment();
          const duration = moment.duration(endTime.diff(now));
          const timeLeft = duration.as('milliseconds');
          let formattedTimeLeft;
          if (timeLeft <= 0) {
            formattedTimeLeft = '0:00';
          } else {
            const hoursLeft = Math.floor(duration.asHours());
            const daysLeft = Math.floor(duration.asDays());
            if (daysLeft > 0) {
              formattedTimeLeft = `${daysLeft} days`;
            } else {
              formattedTimeLeft = `${hoursLeft} hours`;
            }
          }
          return {
            ...option,
            timeLeft: formattedTimeLeft
          };
        });
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <div className="betting-grid">
        {betOptions.map(option => (
          <div className="tile" key={option.title}>
            <div className="tile-timer">
              <p className="emoji" dangerouslySetInnerHTML={{ __html: option.emoji }}></p>
              <p className="timer">{option.timeLeft} left</p>
            </div>
            <h3>{option.title}</h3>
            <div className="tile-footer">
              <h4>{Number(option.price).toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 })}</h4>
              <button onClick={() => openModal(option.title, option.price, option.choices)}>Bet</button>
            </div>
          </div>
        ))}
      </div>
      <BetModal
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        handleBetAmount={handleBetAmount}
        data={modalData}
      />
    </React.Fragment>
  );
};

export default BettingGrid;
