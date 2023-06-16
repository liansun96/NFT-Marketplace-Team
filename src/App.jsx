import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

import Explore from "./components/Explore/Explore";

import Blog from './components/Blog/Blog'


const App = () => {

  const [isToggled,setIsToggled] = useState(false)

  return (
    <div className="font-Poppins">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/blog" element={<Blog />} />

      </Routes>
    </div>
  );
};

export default App;
