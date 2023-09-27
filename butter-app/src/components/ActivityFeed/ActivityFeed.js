import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = ({ activities }) => {
  return (
    <div className="activity-feed">
      <h2>Activity Feed</h2>
      <ul className="activity-list">
        {activities.map((activity) => {
          const roiAmount =
            activity.status === 'closed' ? activity.payout - activity.wager : null;
          const roiPercentage =
            activity.status === 'closed'
              ? (((activity.payout - activity.wager) / activity.wager) * 100).toFixed(0)
              : null;

          return (
            <li key={activity.id} className="activity-item">
              <div className="activity-details">
                <div className="user-name">{activity.user}</div>
                <div className="bet-title">{activity.title}</div>
                <div className="bet-info">
                  <span className="bet-option">{activity.option}</span>
                  <span className="bet-amount">${activity.wager}</span>
                </div>
              </div>
              <div className="activity-status">
                {activity.status === 'closed' ? (
                  <>
                    <span className={`outcome ${activity.outcome.toLowerCase()}`}>
                      {activity.outcome === 'Win' ? 'Win' : 'Loss'}
                    </span>
                    <span className={`roi ${roiAmount >= 0 ? 'positive' : 'negative'}`}>
                      {roiAmount >= 0 ? `+${roiAmount}` : roiAmount} ({roiPercentage}%)
                    </span>
                  </>
                ) : (
                  <span className="active-status">Active</span>
                )}
              </div>
              <div className="activity-timestamp">{formatTimestamp(activity.timestamp)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Helper function to format timestamp
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInMilliseconds = Math.abs(now - date);
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
  }
};

export default ActivityFeed;
