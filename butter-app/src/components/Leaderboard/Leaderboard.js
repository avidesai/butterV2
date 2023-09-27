import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ globalLeaderboard, friendsLeaderboard }) => {
  return (
    <div className="leaderboard">
      <div className="leaderboard-section">
        <h2>Global Leaderboard</h2>
        <div className='leaderboard-table-wrapper'>
          <table>
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Date Started</th>
                <th>Lifetime Bets</th>
                <th>Monthly Profit/Loss</th>
              </tr>
            </thead>
            <tbody>
              {globalLeaderboard.map((player, index) => (
                <tr key={player.id}>
                  <td className="player-name">{player.playerName}</td>
                  <td>{player.dateStarted}</td>
                  <td>{player.totalBetsMade}</td>
                  <td className="profit-loss">{player.monthlyProfitLoss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="leaderboard-section">
        <h2>Friends Leaderboard</h2>
        <div className='leaderboard-table-wrapper'>
          <table>
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Date Started</th>
                <th>Lifetime Bets</th>
                <th>Monthly Profit/Loss</th>
              </tr>
            </thead>
            <tbody>
              {friendsLeaderboard.map((player, index) => (
                <tr key={player.id}>
                  <td className="player-name">{player.playerName}</td>
                  <td>{player.dateStarted}</td>
                  <td>{player.totalBetsMade}</td>
                  <td className="profit-loss">{player.monthlyProfitLoss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
