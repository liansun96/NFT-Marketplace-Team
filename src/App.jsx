import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "animate.css";
import MarketSingle from "./components/MarketSingle/MarketSingle";
import BidHistory from "./components/MarketSingle/Nest/BidHistory";
import Info from "./components/MarketSingle/Nest/Info";
import Provenance from "./components/MarketSingle/Nest/Provenance";
import Explore from "./components/Explore/Explore";
import Blog from "./components/Blog/Blog";
import Collection from "./components/Collection/Collection";

import LoginAndRegister from "./components/LoginAndRegister/LoginAndRegister";
import NFTActivity from "./components/NFTActivity/NFTActivity";

// import BlogDetail from "./components/Blog/BlogDetail";

const App = () => {
  return (
    <div className="font-Poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketsingle" element={<MarketSingle />}>
          <Route path="" index element={<BidHistory />} />
          <Route path="info" element={<Info />} />
          <Route path="pro" element={<Provenance />} />
        </Route>
        <Route path="/explore" element={<Explore />} />
        <Route path="/blog" element={<Blog />} />

        

        <Route path="/nftactivity" element={<NFTActivity />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/loginandregister" element={<LoginAndRegister />} />
      </Routes>
    </div>
  );
};

export default App;
