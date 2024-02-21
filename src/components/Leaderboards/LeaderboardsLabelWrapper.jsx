import { LeaderboardsLabelWrapperContainer } from "../../styled/valorantStyled";
const LeaderboardsLabelWrapper = () => {
  return (
    <LeaderboardsLabelWrapperContainer className="section-wrapper label">
      <div className="rank-label">랭크</div>
      <div className="rating-label-wrapper">
        <span className="rating-label">포인트</span>
      </div>
      <div className="time-label">진행 중</div>
    </LeaderboardsLabelWrapperContainer>
  );
};

export default LeaderboardsLabelWrapper;
