import React from 'react';
import './PastBets.css'; // Import the CSS file for styling

function PastBets() {
  // You can use sample data or fetch real user's past bets here
  const pastBetsData = [
    {
      id: 1,
      betName: 'Basketball Game',
      betChoice: 'Team A',
      betTimestamp: '2023-08-20 18:00',
      winLoss: 'Win',
      wager: 60,
      profitLoss: 30,
      roiPercentage: 50,
    },
    {
      id: 2,
      betName: 'Soccer Match',
      betChoice: 'Draw',
      betTimestamp: '2023-08-25 15:45',
      winLoss: 'Loss',
      wager: 100,
      profitLoss: -100,
      roiPercentage: -100,
    },
  ];

  return (
    <div className="past-bets">
      <h2>Past Bets</h2>
      <table className="past-bets-table">
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
          {pastBetsData.map((bet) => (
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

export default PastBets;
