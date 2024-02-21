import { CommuContentsContainer } from "../../styled/valorantStyled";
import ContentsList from "./ContentsList";
import ContentHeader from "./ContentHeader";
const CommuContents = () => {
  return (
    <CommuContentsContainer className="commu-contents-wrap">
      <ContentHeader />
      <section className="for-space"></section>
      <ContentsList />
    </CommuContentsContainer>
  );
};

export default CommuContents;
