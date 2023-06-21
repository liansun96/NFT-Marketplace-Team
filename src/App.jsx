import React, { useState } from "react";
import Home from "./components/Home/Home";
import "animate.css";

import { Route, Routes } from "react-router-dom";
import MarketSingle from "./components/MarketSingle/MarketSingle";
import BidHistory from "./components/MarketSingle/Nest/BidHistory";
import Info from "./components/MarketSingle/Nest/Info";
import Provenance from "./components/MarketSingle/Nest/Provenance";
import Explore from "./components/Explore/Explore";
import Blog from "./components/Blog/Blog";
import Collection from "./components/Collection/Collection";
import AuthorProfile from "./components/AuthorProfile/AuthorProfile";
import Creators from "./components/Creators/Creators";
import LiveBidding from "./components/Live Bidding/LiveBidding";
import Sidebar from "./components/Sidebar/Sidebar";
import LoginAndRegister from "./components/LoginAndRegister/LoginAndRegister";
import NFTActivity from "./components/NFTActivity/NFTActivity";
import Category from "./components/Category/Category";
import BlogDetail from "./components/Blog/BlogDetail";
import CreateItem from "./components/Blog/CreateItem";
import Ranking from "./components/Ranking/Ranking";
const App = () => {
  return (
    <div className="font-Poppins">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/collection" element={<Collection />} />

        <Route path="/marketsingle" element={<MarketSingle />}>
          <Route path="" index element={<BidHistory />} />
          <Route path="info" element={<Info />} />
          <Route path="pro" element={<Provenance />} />
        </Route>

        <Route path="/createitem" element={<CreateItem />} />

        <Route path="/authorprofile" element={<AuthorProfile />} />

        <Route path="/creators" element={<Creators />} />

        <Route path="/livebidding" element={<LiveBidding />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/ranking" element={<Ranking />} />

        <Route path="/nftactivity" element={<NFTActivity />} />
        <Route path="/category" element={<Category />} />
        <Route path="/loginandregister" element={<LoginAndRegister />} />
      </Routes>
    </div>
  );
};

export default App;
