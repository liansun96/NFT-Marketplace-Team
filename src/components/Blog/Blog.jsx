import React from "react";
import background from '../../assets/breadcrumb_bg.png'
import MidBar from "./MidBar";
import LgCard from "./LgCard";
import Footer from "./Footer";
import Info from "./Info";

const Blog = () => {
  return (
    <main className=" bg-[#070B24] md:ml-[110px]">
      <div className=" w-[100%] h-96 md:h-screen  bg-no-repeat flex justify-center items-center " style={{ backgroundImage: `url(${background})`}}>
        <h2 className="text-4xl text-white font-semibold mt-20 md:mt-0">Latest News</h2>
      </div>
      <div className="md:absolute bottom-20 md:bottom-16 w-full ">
        <MidBar/>
      </div>
      <div className="mt-5 md:mt-0">
        <LgCard/>
      </div>
      <div>
        <Info/>
      </div>
      <div>
        <Footer/>
      </div>
    </main>
  );
};

export default Blog;
