import React from "react";
import { LeaderboardsContentsContainer } from "../../styled/valorantStyled";
import LeaderboardsSearchFillter from "./LeaderboardsSearchFillter";
import LeaderboardsSearch from "./LeaderboardsSearch";
import LeaderboardsLabelWrapper from "./LeaderboardsLabelWrapper";
import LeaderboardsListWrapper from "./LeaderboardsListWrapper";
const LeaderboardsContents = () => {
  return (
    <LeaderboardsContentsContainer>
      <LeaderboardsSearch />
      <LeaderboardsSearchFillter />
      <LeaderboardsLabelWrapper />
      <LeaderboardsListWrapper />
    </LeaderboardsContentsContainer>
  );
};

export default LeaderboardsContents;
