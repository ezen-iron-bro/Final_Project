import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setSearchedPlayer } from "../../store/modules/leaderboardsSlice";
import { LeaderboardsSearchContainer } from "../../styled/valorantStyled";
import { useState } from "react";
const LeaderboardsSearch = () => {
  const { leaderboardsData, currentPage, postsPage } = useSelector(state => state.leaderboards);
  const [playerName, setPlayerName] = useState("");
  const dispatch = useDispatch();
  const totalPage = leaderboardsData.length;
  const lastPost = currentPage * postsPage;
  const firstPost = lastPost - postsPage;
  const pageNumber = Math.ceil(totalPage / postsPage);

  const currentPosts = leaderboardsData.slice(firstPost, lastPost);
  const current = pageNumber => setCurrentPage(pageNumber);
  const player = leaderboardsData.find(player => player.playerName === playerName);
  const onSubmit = e => {
    e.preventDefault();
    if (!playerName) return alert("검색할 내용을 입력하세요");
    if (player) {
      const playerIndex = leaderboardsData.indexOf(player);
      console.log(player);
      const playerPageNumber = Math.ceil((playerIndex + 1) / postsPage);
      dispatch(setSearchedPlayer(player));
      dispatch(setCurrentPage(playerPageNumber));
      setPlayerName("");
    }
  };
  return (
    <LeaderboardsSearchContainer className="section-wrapper search">
      <form className="lb-form" onSubmit={onSubmit}>
        <label htmlFor="search">순위표 검색</label>
        <div className="search-bar">
          <input
            type="text"
            name="playerName"
            placeholder="플레이어 이름"
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
          />
          <button type="submit">
            <div className="icon">
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="m24 21-5.6-5.6A10.058 10.058 0 0 0 20 10a10 10 0 1 0-10 10 10.058 10.058 0 0 0 5.4-1.6L21 24l3-3zM4 10a6 6 0 1 1 6 6 5.89 5.89 0 0 1-6-6z"
                  fill="#0F1923"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </form>
    </LeaderboardsSearchContainer>
  );
};

export default LeaderboardsSearch;
