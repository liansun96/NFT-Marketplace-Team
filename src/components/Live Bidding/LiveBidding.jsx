import React from "react";
import Nav from "../Nav";
import Category from "./Category";
import Hero from "./Hero";
import Footer from "./Footer";
import LiveArt from "./LiveArt";

const LiveBidding = () => {
  return (
    <div className="lg:pl-[110px] relative">
      <section className="md:h-[470px] h-[250px] author-bg pt-3 md:pt-8 bg-[#070B24]">
        <Nav />
        <Hero />
      </section>

      <section>
        <Category />
      </section>

      <section>
        <LiveArt/>
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default LiveBidding;
