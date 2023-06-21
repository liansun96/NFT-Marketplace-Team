import React from "react";
import Nav from "../Nav";
import Category from "./Category";
import Hero from "./Hero";
import "./Author.css";
import Profile from "./Profile";
import Footer from "./Footer";
import Layout from "../Layout";

const AuthorProfile = () => {
  return (
    <Layout>
      <div className="lg:pl-[110px] relative">
        <section className="md:h-[470px] h-[250px] author-bg pt-3 md:pt-8 bg-[#070B24]">
          <Nav />
          <Hero />
        </section>

        <section>
          <Category />
        </section>

        <section>
          <Profile />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </Layout>
  );
};

export default AuthorProfile;
