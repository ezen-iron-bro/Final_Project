import { useDispatch, useSelector } from "react-redux";
import { ContentsListContainer } from "../../styled/valorantStyled";
import ContentsItem from "./ContentsItem";
import { getCommunity } from "../../store/modules/commuSlice";
import { useEffect, useState } from "react";
// localStorage.clear();
const ContentsList = () => {
  const { data, filteredData, status, error } = useSelector(state => state.community);

  const data2 = filteredData === null ? data : filteredData;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const storedIsOpen = localStorage.getItem("isOpen") ? JSON.parse(localStorage.getItem("isOpen")) : isOpen;
    if (!storedIsOpen) {
      dispatch(getCommunity());
      setIsOpen(true);
      localStorage.setItem("isOpen", JSON.stringify(true));
    }
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
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
