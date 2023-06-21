import React from "react";
import MidBar from "../Category/MidBar";
import Footer from "./Footer";
import Info from "./Info";

import Nav from "../Nav";
import Layout from "../Layout";
import CreateForm from "./CreateForm";

const CreateItem = () => {
  return (
    <Layout>
      <main className=" bg-[#070B24] w-full lg:pl-[110px]">
        <div className=" w-full h-112 pt-8 blog-bg ">
          <Nav />
          <h2 className="text-4xl text-white text-center font-semibold mt-20 md:mt-40">
            Create Item
          </h2>
        </div>
        <div className="-mt-20 md:mt-0">
          <MidBar />
        </div>
        <div className="mt-10 md:mt-16">
          <CreateForm />
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

export default CreateItem;
