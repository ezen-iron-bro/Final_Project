import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/modules/leaderboardsSlice";
import { LeaderboardsFooterContainer } from "../../styled/valorantStyled";
const LeaderboardsFooter = ({ pageNumber }) => {
  const { currentPage } = useSelector(state => state.leaderboards);
  const dispatch = useDispatch();
  return (
    <LeaderboardsFooterContainer className="section-wrapper footer">
      <div className="lb-pagination">
        <button className="pagination-btn prev-max" onClick={() => dispatch(setCurrentPage(1))}>
          <div className="pagination-icon left">
            <svg width="18" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.907 9.034V.488l4.63 4.273 4.647 4.272-4.647 4.273-4.63 4.273V9.033zm12.556 8.97h4.454V.044h-4.454v17.96z"
                fill="#ECE8E1"
              ></path>
            </svg>
          </div>
        </button>
        <button
          className="pagination-btn prev"
          onClick={() => currentPage > 1 && dispatch(setCurrentPage(currentPage - 1))}
        >
          <div className="pagination-icon left">
            <svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M.059 9.033V.487l4.63 4.273 4.629 4.273-4.63 4.272-4.63 4.273V9.033z" fill="#ECE8E1"></path>
            </svg>
          </div>
        </button>
        <div className="page-count-wrapper">
          <span className="page-count-copy">페이지</span>
          <span className="page-count">
            {currentPage} / {pageNumber}
          </span>
        </div>
        <button
          className="pagination-btn next"
          onClick={() => currentPage < pageNumber && dispatch(setCurrentPage(currentPage + 1))}
        >
          <div className="pagination-icon">
            <svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M.059 9.033V.487l4.63 4.273 4.629 4.273-4.63 4.272-4.63 4.273V9.033z" fill="#ECE8E1"></path>
            </svg>
          </div>
        </button>
        <button className="pagination-btn next-max" onClick={() => dispatch(setCurrentPage(10))}>
          <div className="pagination-icon">
            <svg width="18" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.907 9.034V.488l4.63 4.273 4.647 4.272-4.647 4.273-4.63 4.273V9.033zm12.556 8.97h4.454V.044h-4.454v17.96z"
                fill="#ECE8E1"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </LeaderboardsFooterContainer>
  );
};

export default LeaderboardsFooter;
