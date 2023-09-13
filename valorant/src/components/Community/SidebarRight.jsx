import { useDispatch, useSelector } from "react-redux";
import { SidebarRightContainer } from "../../styled/valorantStyled";
import SidebarRightItem from "./SidebarRightItem";
import { useEffect, useState } from "react";

const SidebarRight = () => {
  const { sortedByComments, sortedByViews, loadingData } = useSelector(state => state.community);
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState(sortedByViews);

  useEffect(() => {
    if (!loadingData) {
      console.log(currentData);
    }
  }, [currentData]);

  const handleMenuClick = menuType => {
    if (menuType === "views") {
      setCurrentData(sortedByViews);
    } else if (menuType === "comments") {
      setCurrentData(sortedByComments);
    }
  };

  return (
    <SidebarRightContainer className="sidebar-right-wrap">
      <div className="sidebar-right-header">
        <strong>실시간 톡</strong>
      </div>
      <div className="sidebar-right-body">
        <ul className="sidebar-right-menu">
          <li
            onClick={() => {
              handleMenuClick("views");
              console.log(currentData);
            }}
          >
            최다 조회
          </li>
          <li onClick={() => handleMenuClick("comments")}>최다 댓글</li>
        </ul>
        {currentData && currentData.length > 0 ? (
          <ul className="sidebar-right-list">
            {currentData.map(item => (
              <SidebarRightItem key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <div>데이터를 불러오는 중입니다...</div>
        )}
      </div>
    </SidebarRightContainer>
  );
};

export default SidebarRight;
