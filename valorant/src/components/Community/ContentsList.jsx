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
    if (data.length === 0) {
      dispatch(getCommunity());
    }
  }, [dispatch, data]);
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
