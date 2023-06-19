import React from "react";
import background from "../../assets/breadcrumb_bg.png";
import MidBar from "./MidBar";
import LgCard from "./LgCard";
import Footer from "./Footer";
import Info from "./Info";

import Nav from "../Nav";
import Rsidebar from "./Rsidebar";
import Layout from "../Layout";

const Blog = () => {
  return (
    <Layout>
      <main className=" bg-[#070B24] w-full lg:pl-[110px]">
        <Rsidebar />
        <div className=" w-full h-112 pt-8 blog-bg ">
          <Nav />
          <h2 className="text-4xl text-white text-center font-semibold mt-20 md:mt-40">
            Latest News
          </h2>
        </div>
        <div className=" mt-0">
          <MidBar />
        </div>
        <div className="mt-10 md:mt-16">
          <LgCard />
        </div>
        <div>
          <Info />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
