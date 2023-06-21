import React from "react";
import './LoginAndRegister.css'
import Layout from "../Layout";
import Hero from "./Hero";
import Nav from "../Nav";
import Category from "../Explore/Category";
import Footer from "../Home/Footer";
import Activity from "./Activity";

const LoginAndRegister = () => {
  return (
    <Layout>
      <div className="md:pl-[110px]">
        <section className="md:h-[470px] h-[250px] explore-bg pt-8 bg-[#070B24]">
          <Nav />
          <Hero />
        </section>
        <section>
          <Category/>
        </section>
        <section>
          <Activity/>  
        </section>
        <section>
          <Footer/>
        </section>
      </div>
    </Layout>
  );
};

export default LoginAndRegister;
