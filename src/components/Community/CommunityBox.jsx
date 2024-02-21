import { CommunityBoxContainer } from "../../styled/valorantStyled";
import Sidebar from "./Sidebar";
import SidebarRight from "./SidebarRight";
import CommuContents from "./CommuContents";
const CommunityBox = () => {
  return (
    <CommunityBoxContainer>
      <div className="inner">
        <Sidebar />
        <CommuContents />
        <SidebarRight />
      </div>
    </CommunityBoxContainer>
  );
};

export default CommunityBox;
