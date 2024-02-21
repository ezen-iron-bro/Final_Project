import { LeaderboardsSearchFillterContainer } from "../../styled/valorantStyled";
const LeaderboardsSearchFillter = () => {
  return (
    <LeaderboardsSearchFillterContainer className="section-wrapper search-fillter">
      <div className="category-badge-wrapper">
        <span className="category-badge"></span>
      </div>
      <div className="rank-drop-down-wrapper">
        <div className="rank-copy-wrapper">
            <h3 className="fillter-sub-title">순위표</h3>
            <h3 className="fillter-title">레디언트</h3>
        </div>
      </div>
      <div className="act-drop-down-wrapper">
        <div className="act-copy-wrapper">
          <h2 className="subfillter-sub-title">에피소드 7</h2>
          <h3 className="subillter-title">액트 1</h3>
        </div>
      </div>
    </LeaderboardsSearchFillterContainer>
  );
};

export default LeaderboardsSearchFillter;
