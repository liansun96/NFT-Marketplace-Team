import React from "react";
import background from "../../assets/breadcrumb_bg.png";
import MidBar from "./MidBar";
import LgCard from "./LgCard";
import Footer from "./Footer";
import Info from "./Info";

import Nav from "../Nav";
import Rsidebar from "./Rsidebar";

const Blog = () => {
  return (
    <main className=" bg-[#070B24] lg:pl-[110px]">
      <Rsidebar />
      <div
        className=" w-full h-96 md:h-screen pt-8 bg-no-repeat object-cover "
        style={{ backgroundImage: `url(${background})` }}
        >
        <Nav/>
        <h2 className="text-4xl text-white text-center font-semibold mt-20 md:mt-40">
          Latest News
        </h2>
      </div>
      <div className="md:-mt-52 mt-0">
        <MidBar />
      </div>
      <div className="mt-10 md:mt-28">
        <LgCard />
      </div>
      <div>
        <Info />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default Blog;
