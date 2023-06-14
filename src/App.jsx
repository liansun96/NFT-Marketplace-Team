import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";

const App = () => {

  const [isToggled,setIsToggled] = useState(false)

  return (
    <div className="font-Poppins">
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
};

export default App;
