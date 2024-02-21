import React, { useEffect } from "react";
import GoodsCartList from "./GoodsCartList";
import GoodsCartEmpty from "./GoodsCartEmpty";
import { useSelector } from "react-redux";
import { GoodsCartContainer } from "../../styled/valorantStyled";

const GoodsCart = () => {
  const { carts } = useSelector((state) => state.cart);
  let localCarts = localStorage.getItem("carts");
  useEffect(() => {
    localCarts = localStorage.getItem("carts");
  }, [carts]);
  return (
    <GoodsCartContainer>
      <div className="cart-box">{carts.length === 0 ? <GoodsCartEmpty /> : <GoodsCartList />}</div>
    </GoodsCartContainer>
  );
};

export default GoodsCart;
