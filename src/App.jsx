import React from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="font-Poppins">
      <Sidebar />

      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
};

export default App;
