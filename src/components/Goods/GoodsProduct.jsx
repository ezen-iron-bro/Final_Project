import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../store/modules/cartSlice";
import { ProductContainer } from "../../styled/valorantStyled";
import { useState } from "react";

const GoodsProduct = ({ item }) => {
  const { id, title, price, image, subimage } = item;
  const dispatch = useDispatch();
  const { carts } = useSelector(state => state.cart);
  const [isListHover, setIsListHover] = useState(false);
  return (
    <ProductContainer>
      <div className="product-item">
        <div onMouseOver={() => setIsListHover(true)} onMouseOut={() => setIsListHover(false)}>
          <div onMouseOver={() => setIsListHover(true)} onMouseOut={() => setIsListHover(false)}>
            <figure>
              <img src={isListHover ? subimage : image} alt={title} />
            </figure>
          </div>
        </div>
        <h4>VALORANT</h4>
        <h3> {title} </h3>
        <p>
          <span>￦ {price.toLocaleString()} 원</span>
          {carts.find(x => x.id === id) ? (
            <button onClick={() => dispatch(removeCart(id))} className="off">
              CANCEL
            </button>
          ) : (
            <button onClick={() => dispatch(addCart(item))} className="on">
              <span>CART</span>
            </button>
          )}
        </p>
      </div>
    </ProductContainer>
  );
};

export default GoodsProduct;
