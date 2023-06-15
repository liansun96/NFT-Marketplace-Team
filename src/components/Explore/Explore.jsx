import React from "react";
import Nav from "../Nav";
import "./Explore.css";
import Category from "./Category";
import Artworks from "./Artworks";
import FeatureOfTheWeek from "./FeatureOfTheWeek";
import Hero from "./Hero";

const Explore = () => {
  return (
   <div className="md:pl-[110px]">
     <section className="md:h-[470px] h-[250px] explore-bg pt-8">
      <Nav/>
      <Hero/>
    </section>

    <section className="block md:hidden">

    </section>

    <section>
        <Category/>
    </section>

    <section>
        <Artworks/>
    </section>

    <section>
        <FeatureOfTheWeek/>
    </section>
   </div>
  );
};

export default Explore;
