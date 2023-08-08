const LeaderboarsdItem = ({ item, className }) => {
  const { id, playerName, rank, rating, winsScore } = item;
  return (
    <li className={className}>
      <div className="lb-rank-wrapper">
        <h3 className="lb-rank">{rank}</h3>
        {/* <div>
          <svg width="16" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m8.35 12.07-4.62 2.44.88-5.16L.87 5.71l5.17-.76L8.35.27l2.32 4.68 5.17.76-3.74 3.64.88 5.16-4.63-2.44z"
              fill="#FF0"
            ></path>
          </svg>
        </div> */}
      </div>
      <div className="lb-player-wrapper">
        <div className="lb-rating-wrapper">
          <img className="lb-rating-badge" src="/images/leaderboards/radiant-badge.png" alt="" />
          <p className="lb-rating">{rating}</p>
        </div>
        <h2 className="lb-player-name">{playerName}</h2>
      </div>
      <p className="lb-wins-wrapper">
        <span className="wins-value">{winsScore}</span>
        <span className="wins-label">게임 승리 횟수</span>
      </p>
    </li>
  );
};

export default LeaderboarsdItem;
