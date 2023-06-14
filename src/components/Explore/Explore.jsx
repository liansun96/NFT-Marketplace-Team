import React from "react";
import Nav from "../Nav";
import First from "./First";
import "./Explore.css";
import Category from "./Category";
import Artworks from "./Artworks";

const Explore = () => {
  return (
   <div className="pl-[110px]">
     <section className="mx-auto h-[470px] explore-bg">
      <Nav />
      <First/>
    </section>

    <section>
        <Category/>
    </section>

    <section>
        <Artworks/>
    </section>
   </div>
  );
};

export default Explore;
