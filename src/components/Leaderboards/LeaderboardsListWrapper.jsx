import { getLeaderboards, setCurrentPage } from "../../store/modules/leaderboardsSlice";
import { LeaderboardsListWrapperContainer } from "../../styled/valorantStyled";
import LeaderboarsdItem from "./LeaderboarsdItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeaderboardsFooter from "./LeaderboardsFooter";
const LeaderboardsListWrapper = () => {
  const { leaderboardsData, currentPage, postsPage, searchedPlayer } = useSelector(state => state.leaderboards);

  const totalPage = leaderboardsData.length;
  const lastPost = currentPage * postsPage;
  const firstPost = lastPost - postsPage;
  const pageNumber = Math.ceil(totalPage / postsPage);

  const currentPosts = leaderboardsData.slice(firstPost, lastPost);
  const current = pageNumber => setCurrentPage(pageNumber);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLeaderboards());
  }, []);
  return (
    <>
      <LeaderboardsListWrapperContainer className="section-wrapper list">
        <ul className="lb-list">
          {currentPosts.map(item => (
            <LeaderboarsdItem
              key={item.id}
              item={item}
              className={searchedPlayer && searchedPlayer.id === item.id ? "lb-item on" : "lb-item"}
            />
          ))}
        </ul>
      </LeaderboardsListWrapperContainer>
      <LeaderboardsFooter pageNumber={pageNumber} />
    </>
  );
};

export default LeaderboardsListWrapper;
