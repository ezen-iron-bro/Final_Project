import { useDispatch, useSelector } from "react-redux";
import { ContentsListContainer } from "../../styled/valorantStyled";
import ContentsItem from "./ContentsItem";
import { getCommunity } from "../../store/modules/commuSlice";
import { useEffect, useState } from "react"; // Import useState

const ContentsList = () => {
  const { data, filteredData, status, error } = useSelector(state => state.community);
  
  const data2 = filteredData === null ? data : filteredData;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      dispatch(getCommunity());
      setIsOpen(true);
    }
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>; // 로딩 표시
  }

  if (status === "failed") {
    return <div>Error: {error}</div>; // 에러 표시
  }
  
  return (
    <ContentsListContainer>
      {data2.map(item => (
        <ContentsItem key={item.id} item={item} />
      ))}
    </ContentsListContainer>
  );
};

export default ContentsList;
