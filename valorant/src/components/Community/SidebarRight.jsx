import { useDispatch, useSelector } from "react-redux";
import { SidebarRightContainer } from "../../styled/valorantStyled";
import SidebarRightItem from "./SidebarRightItem";
import { useEffect, useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";

const SidebarRight = () => {
  const { postsFromLast24Hours } = useSelector(state => state.community);
  const dispatch = useDispatch();

  const [currentData, setCurrentData] = useState([]);
  const [sortedByComments, setSortedByComments] = useState([]);
  const [sortedByViews, setSortedByViews] = useState([]);
  
  useEffect(() => {
    setSortedByComments([...postsFromLast24Hours].sort((a, b) => b.comment.length - a.comment.length));
    setSortedByViews([...postsFromLast24Hours].sort((a, b) => b.viewCount - a.viewCount));
  }, [postsFromLast24Hours]);

  useEffect(() => {
    setCurrentData(sortedByViews);
  }, [sortedByViews]);


  const handleMenuClick = menuType => {
    if (menuType === "views") {
      setCurrentData(sortedByViews);
    } else if (menuType === "comments") {
      setCurrentData(sortedByComments);
    }
  };
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <SidebarRightContainer className="sidebar-right-wrap">
      <div className="sidebar-right-header">
        <strong>실시간 톡</strong>
        <em>24시간 기준</em>
      </div>
      <div className="sidebar-right-body">
        <ul className="sidebar-right-menu">
          <li
            onClick={() => {
              handleMenuClick("views");
            }}
          >
            최다 조회
          </li>
          <li onClick={() => handleMenuClick("comments")}>최다 댓글</li>
          <button onClick={handleRefresh}><i> <MdOutlineRefresh /></i></button>
        </ul>
        {currentData && currentData.length > 0 ? (
          <ul className="sidebar-right-list">
            {currentData.map(item => (
              <SidebarRightItem key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <div>24시간 동안 올라온 게시글이 없습니다. <br/>게시글을 작성 후 새로고침을 눌러주세요.</div>
        )}
      </div>
    </SidebarRightContainer>
  );
};

export default SidebarRight;
