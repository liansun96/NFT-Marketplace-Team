import React from "react";
import Category from "../Explore/Category";
import FeatureOfTheWeek from "../Explore/FeatureOfTheWeek";
import Footer from "../Explore/Footer";
import Hero from "../Explore/Hero";
import Nav from "../Nav";
import "./Creators.css";
import PopularCreators from "./PopularCreators";
import Layout from "../Layout";

const Creators = () => {
  return (
    <Layout>
      <div className="lg:pl-[110px] relative">
        <section className="md:h-[470px] h-[250px] creators-bg pt-3 md:pt-8 bg-[#070B24]">
          <Nav />
          <Hero />
        </section>

        <section>
          <Category />
        </section>

        <section>
          <PopularCreators />
        </section>

        <section>
          <FeatureOfTheWeek />
        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    </Layout>
  );
};

export default Creators;
