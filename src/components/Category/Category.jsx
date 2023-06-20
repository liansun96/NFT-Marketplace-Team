import React from "react";
import Nav from "../Nav";
import Layout from "../Layout";
import MidBar from "./MidBar";
const Category = () => {
  return (
    <Layout>
      <div className="bg-[#1C1832]">
        <div className=" w-full h-112 pt-8 blog-bg ">
          <div className="mb-6 my-5">
            <Nav />
          </div>
          <h2 className="text-4xl text-white h-[300px] flex justify-center items-center font-bold ">
            {/* <h2 className="text-4xl text-white text-center font-semibold mt-20 md:mt-40"> */}
            NFT Browse Category
          </h2>
        </div>
        <div className="">
          <MidBar />
        </div>
      </div>
    </Layout>
  );
};

export default Category;
