import React from 'react';
import './FriendsList.css'; // Import the CSS file for styling

function FriendsList() {
  // You can use sample data or fetch real user's friends here
  const friendsData = [
    {
      id: 1,
      friendName: 'Friend 1',
      friendKarma: 100,
      monthlyProfitLoss: 2500,
      monthlyROI: 10,
      lifetimeBets: 50,
    },
    {
      id: 2,
      friendName: 'Friend 2',
      friendKarma: 75,
      monthlyProfitLoss: -500,
      monthlyROI: -5,
      lifetimeBets: 20,
    },
  ];

  return (
    <div className="friends-list">
      <h2>Friends List</h2>
      <table className="friends-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Karma</th>
            <th>Monthly Profit/Loss</th>
            <th>Monthly ROI</th>
            <th>Lifetime Bets</th>
          </tr>
        </thead>
        <tbody>
          {friendsData.map((friend) => (
            <tr key={friend.id}>
              <td>{friend.friendName}</td>
              <td>{friend.friendKarma}</td>
              <td>${friend.monthlyProfitLoss}</td>
              <td>{friend.monthlyROI}%</td>
              <td>{friend.lifetimeBets}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FriendsList;
