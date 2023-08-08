import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import GlobalStyle from "./styled/Global";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Goods from "./pages/Goods";
import Media from "./pages/Media";
import Leaderboards from "./pages/Leaderboards";
import Community from "./pages/Community";
import ContentsItemDetail from "./components/Community/ContentsItemDetail";
import CommuWriting from "./components/Community/CommuWriting";
import GameInfo from "./pages/GameInfo";
import GoodsCart from "./components/Goods/GoodsCart";
import SignUp from "./components/loginAndSignup/SignUp";
import Login from "./components/loginAndSignup/Login";

import AgentInfo from "./components/GameInfo/AgentInfo";
import MapInfo from "./components/GameInfo/MapInfo";
import WeaponInfo from "./components/GameInfo/WeaponInfo";
import ScrollToTop from "./pages/ScrollToTop";
import Download from "./pages/Download";

const App = () => {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/gameinfo">
              <Route element={<GameInfo />} />
              <Route index path="/gameinfo/agent" element={<AgentInfo />} />
              <Route index path="/gameinfo/map" element={<MapInfo />} />
              <Route index path="/gameinfo/weapon" element={<WeaponInfo />} />
            </Route>

            <Route path="/media">
              <Route index element={<Media />} />
            </Route>
            <Route path="/leaderboards" element={<Leaderboards />} />
            <Route path="/goods">
              <Route index element={<Goods />} />
              <Route index path="/goods/cart" element={<GoodsCart />} />
            </Route>

            <Route path="/community">
              <Route index element={<Community />} />
              <Route index path="/community/writing" element={<CommuWriting />} />
              <Route index path=":communityID" element={<ContentsItemDetail />} />
            </Route>
            <Route path="/download" element={<Download />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
