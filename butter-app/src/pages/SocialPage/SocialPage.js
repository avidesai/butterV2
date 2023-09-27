import React from 'react';
import './SocialPage.css';
import ActivityFeed from '../../components/ActivityFeed/ActivityFeed';
import activityData from './ActivityData.json';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import globalLeaderboardData from './globalLeaderboard.json';
import friendsLeaderboardData from './friendsLeaderboard.json';
import Chat from '../../components/Chat/Chat';
import chatLogs from './chatlogs.json';


function SocialPage() {
  return (
    <div>
      <ActivityFeed activities={activityData.activities} />
      <Leaderboard globalLeaderboard={globalLeaderboardData} friendsLeaderboard={friendsLeaderboardData} />
      <Chat chatLogs={chatLogs} />
    </div>
  );
}

export default SocialPage;