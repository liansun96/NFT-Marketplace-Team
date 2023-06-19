import React from "react";
import Nav from "../Nav";
import "./Explore.css";
import Category from "./Category";
import Artworks from "./Artworks";
import FeatureOfTheWeek from "./FeatureOfTheWeek";
import Hero from "./Hero";
import Footer from "./Footer";
import Rsidebar from "../Blog/Rsidebar";
import ScrollBtn from "../ScrollBtn";

const Explore = () => {
  return (
    <div className="lg:pl-[110px] relative">
      <section className="md:h-[470px] h-[250px] explore-bg pt-8 bg-[#070B24]">
        <Nav />
        <Hero />
      </section>

      <section className="block md:hidden"></section>

      <section>
        <Category />
      </section>

      <section>
        <Artworks />
      </section>

      <section>
        <FeatureOfTheWeek />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Explore;
