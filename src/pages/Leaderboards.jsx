import React from "react";
import LeaderboardsBanner from "../components/Leaderboards/LeaderboardsBanner";
import LeaderboardsContents from "../components/Leaderboards/LeaderboardsContents";

const Leaderboards = () => {
  return (
    <>
      <div id="leaderboards">
        <LeaderboardsBanner />
        <LeaderboardsContents />
      </div>
    </>
  );
};

export default Leaderboards;
