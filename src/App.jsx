import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

import MarketSingle from "./components/MarketSingle";
import BidHistory from "./components/Nest/BidHistory";
import Info from "./components/Nest/Info";
import Provenance from "./components/Nest/Provenance";

import Explore from "./components/Explore/Explore";

import Blog from './components/Blog/Blog'

const App = () => {

  const [isToggled,setIsToggled] = useState(false)

  return (
    <div className="font-Poppins">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketsingle" element={<MarketSingle />}>
          <Route path="" index element={<BidHistory />} />
          <Route path="info" element={<Info />} />
          <Route path="pro" element={<Provenance />} />
        </Route>


        <Route path="/explore" element={<Explore />} />

        <Route path="/blog" element={<Blog />} />

      </Routes>
    </div>
  );
};

export default App;
