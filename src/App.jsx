import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
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
import BlogDetail from "./components/Blog/BlogDetail";

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
        <Route path="/blog-detail" element={<BlogDetail />} />

        <Route path="/collection" element={<Collection />} />
      </Routes>
    </div>
  );
};

export default App;
