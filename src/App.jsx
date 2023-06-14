import React from "react";
import Sidebar from "./components/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="font-Poppins">
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
