import React from 'react';
import './ActiveBets.css'; // Import the CSS file for styling

function ActiveBets() {
  // You can use sample data or fetch real user's active bets here
  const activeBetsData = [
    {
      id: 1,
      betName: 'Football Match',
      betChoice: 'Team A',
      betTimestamp: '2023-09-01 14:30',
      winLoss: 'Win',
      wager: 50,
      profitLoss: 25,
      roiPercentage: 50,
    },
    {
      id: 2,
      betName: 'Basketball Game',
      betChoice: 'Team B',
      betTimestamp: '2023-09-05 19:00',
      winLoss: 'Loss',
      wager: 75,
      profitLoss: -75,
      roiPercentage: -100,
    },
  ];

  return (
    <div className="active-bets">
      <h2>Active Bets</h2>
      <table className="active-bets-table">
        <thead>
          <tr>
            <th>Bet Name</th>
            <th>Bet Choice</th>
            <th>Bet Timestamp</th>
            <th>Win/Loss</th>
            <th>Wager</th>
            <th>Profit/Loss</th>
            <th>ROI Percentage</th>
          </tr>
        </thead>
        <tbody>
          {activeBetsData.map((bet) => (
            <tr key={bet.id}>
              <td>{bet.betName}</td>
              <td>{bet.betChoice}</td>
              <td>{bet.betTimestamp}</td>
              <td>{bet.winLoss}</td>
              <td>${bet.wager}</td>
              <td>${bet.profitLoss}</td>
              <td>{bet.roiPercentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActiveBets;
