import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "animate.css";

import MarketSingle from "./components/MarketSingle";
import BidHistory from "./components/Nest/BidHistory";
import Info from "./components/Nest/Info";
import Provenance from "./components/Nest/Provenance";

import Explore from "./components/Explore/Explore";

import Blog from "./components/Blog/Blog";
import Collection from "./components/Collection/Collection";
import AuthorProfile from "./components/AuthorProfile/AuthorProfile";
import Creators from "./components/Creators/Creators";
import LiveBidding from "./components/Live Bidding/LiveBidding";

const App = () => {
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

        <Route path="/collection" element={<Collection />} />

        <Route path="/authorprofile" element={<AuthorProfile />} />

        <Route path="/creators" element={<Creators />} />

        <Route path="/livebidding" element={<LiveBidding />} />

      </Routes>
    </div>
  );
};

export default App;
