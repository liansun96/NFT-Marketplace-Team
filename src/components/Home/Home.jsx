import React from "react";
import Hero from "./Hero";
import TopCollection from "./TopCollection";
import "./Home.css";
import CreateAndSellNFTs from "./CreateAndSellNFTs";
import ExploreProduct from "./ExploreProducts";
import LatestNewsUpdate from "./LatestNewsUpdate";
import About from "./About";
import Testiomonail from "./Testiomonail";
import Footer from "./Footer";
import FeaturesOfTheWeek from "./FeaturesOfTheWeek";
import Rsidebar from "../Blog/Rsidebar";
import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <div className="lg:pl-[110px]">
        <Hero />
        <TopCollection />
        <FeaturesOfTheWeek />
        <CreateAndSellNFTs />
        <ExploreProduct />
        <LatestNewsUpdate />
        <About />
        <Testiomonail />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
