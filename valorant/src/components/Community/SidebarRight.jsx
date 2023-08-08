import { useDispatch, useSelector } from "react-redux";
import { SidebarRightContainer } from "../../styled/valorantStyled";
import SidebarRightItem from "./SidebarRightItem";
import { useEffect } from "react";
// import { getTodayHotComment, getTodayHotView } from "../../store/modules/commuSlice";
const SidebarRight = () => {
  const { sortedData } = useSelector(state => state.community);
  const dispatch = useDispatch();
  /* useEffect(() => {
    dispatch(getTodayHotView());
    dispatch(getTodayHotComment());
  }, [dispatch]); */

  return (
    <SidebarRightContainer className="sidebar-right-wrap">
      <div className="sidebar-right-header">
        <strong>실시간 톡</strong>
        <em>최근 24시간 기준</em>
      </div>
      <div className="sidebar-right-body">
        <ul className="sidebar-right-menu">
          <li>최다 조회</li>
          <li>최다 댓글</li>
        </ul>
        {sortedData && sortedData.length > 0 ? (
          <ul className="sidebar-right-list">
            {sortedData.map(item => (
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
