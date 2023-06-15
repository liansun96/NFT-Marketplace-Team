import React from "react";
import Nav from "../Nav";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import TopSellerCard from "./TopSellerCard";
import { topSellers } from "../../constants/index";

const Hero = () => {
  return (
    <div className="hero-bg ms-auto h-[130vh] pt-8">
      <Nav />
      <div className="h-[85vh] flex">
        <div className="w-[80%] mx-auto self-center space-y-6">
          <h1 className="text-7xl text-heading_text font-bold tracking-wide leading-[90px]">
            Buy and sell <br />
            digital art <br />
            <span className="text-purple">NFT </span>collection
          </h1>
          <p className="text-body_text font-semibold">
            Everything you need to build, host, scale amazing <br />
            dapps free by creating account today
          </p>
          <button className="relative text-heading_text font-bold px-3 py-2 duration-500 w-[50px] hover:w-[200px] h-[50px] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] rounded-full">
            <div className="absolute bottom-3 left-0 w-[200px] flex justify-center items-center gap-2 ">
              <p>Let's Get Started</p>
              <HiOutlineArrowNarrowRight className="text-lg font-bold" />
            </div>
          </button>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <h4 className="text-heading_text text-2xl font-semibold">
            Top Seller
          </h4>
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/icons/title_icon01.png"
            alt="topseller-image"
          />
        </div>
        <div className="flex justify-between gap-2 mb-6">
          {topSellers?.map((topSeller) => (
            <TopSellerCard key={topSeller.id} topSeller={topSeller} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
