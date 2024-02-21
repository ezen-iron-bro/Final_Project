import React, { useState } from "react";
import { WrapContainer } from "../styled/valorantStyled";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import LoginPopup from "./Main/LoginPopup";
const Layout = () => {
  const [isPopupShow, setIsPopupShow] = useState(false);

  return (
    <WrapContainer id="wrap">
      <Header setIsPopupShow={setIsPopupShow} />
      <div style={{ width: "100%", height: "80px" }}></div>
      <main id="container" className="main">
        <Outlet/>
      </main>
      {isPopupShow && <LoginPopup setIsPopupShow={setIsPopupShow} />}
      <Footer />
    </WrapContainer>
  );
};

export default Layout;
