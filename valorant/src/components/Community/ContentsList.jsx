import { useDispatch, useSelector } from "react-redux";
import { ContentsListContainer } from "../../styled/valorantStyled";
import ContentsItem from "./ContentsItem";
import { getCommunity } from "../../store/modules/commuSlice";
import { useEffect, useState } from "react"; // Import useState

const ContentsList = () => {
  const data2 = useSelector(state =>
    state.community.filteredData === [] ? state.community.data : state.community.filteredData
  );
  const { data, filteredData } = useSelector(state => state.community);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(isOpen);

    if (isOpen === false) {
      dispatch(getCommunity());
      console.log(data);
      console.log(filteredData);
    }
    setIsOpen(true);
  }, []);
  return (
    <ContentsListContainer>
      {data2.map(item => (
        <ContentsItem key={item.id} item={item} />
      ))}
    </ContentsListContainer>
  );
};

export default ContentsList;
