import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiPinterestFill } from "react-icons/ri";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-primary">
        <div className="p-5 pt-16 w-[90%] 3xl:w-[70%] 4xl:w-[60%] mx-auto">
          <div className="flex flex-wrap justify-between ms:flex-col lg:flex-row items-start gap-16 font-Poppins">
            <div className="flex flex-col gap-9 items-start md:w-[23%]">
              <div className="">
                <img
                  src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
                  className="h-[40px]"
                  alt=""
                />
              </div>
              <p className="text-body_text ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                veritatis sequi doloribus fuga.
              </p>
              <div className="flex items-center gap-2">
                <Link to='https://www.facebook.com/' target={"_blank"}>
                  <div className="flex justify-center items-center w-[45px] h-[45px] rounded bg-media_bg shadow-lg hover:bg-purple transition duration-500">
                    <RiFacebookFill className="text-heading_text text-xl" />
                  </div>
                </Link>
                <Link to={'https://www.twitter.com'} target={"_blank"}>
                  <div className="flex justify-center items-center w-[45px] h-[45px] rounded bg-media_bg shadow-lg hover:bg-purple transition duration-500">
                    <RiTwitterFill className="text-heading_text text-xl" />
                  </div>
                </Link>
                <Link to={'https://www.instagram.com'} target={"_blank"}>
                  <div className="flex justify-center items-center w-[45px] h-[45px] rounded bg-media_bg shadow-lg hover:bg-purple transition duration-500">
                    <RiInstagramFill className="text-heading_text text-xl" />
                  </div>
                </Link>
                <Link to={'https://www.pinterest.com'} target={"_blank"}>
                  <div className="flex justify-center items-center w-[45px] h-[45px] rounded bg-media_bg shadow-lg hover:bg-purple transition duration-500">
                    <RiPinterestFill className="text-heading_text text-xl" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:w-[14%]">
              <h1 className="text-2xl text-heading_text font-semibold">
                Useful Links
              </h1>
              <div className="flex flex-col gap-3 mt-7">
                <div className="">
                  <p className="text-body_text  hover:text-purple hover:translate-x-2 duration-500 cursor-pointer">
                    All NFTs
                  </p>
                </div>
                <div className="">
                  <p className="text-body_text  hover:text-purple hover:translate-x-2 duration-500 cursor-pointer">
                    How It Works
                  </p>
                </div>
                <div className="">
                  <p className="text-body_text  hover:text-purple hover:translate-x-2 duration-500 cursor-pointer">
                    Create
                  </p>
                </div>
                <div className="">
                  <p className="text-body_text  hover:text-purple hover:translate-x-2 duration-500 cursor-pointer">
                    Explore
                  </p>
                </div>
                <div className="">
                  <p className="text-body_text  hover:text-purple hover:translate-x-2 duration-500 cursor-pointer">
                    Privacy $ Terms
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[14%]">
              <h1 className="text-2xl text-heading_text font-semibold">
                Community
              </h1>
              <div className="flex flex-col gap-3 mt-7">
                <div className="">
                  <p className="text-body_text  hover:text-purple hover:translate-x-2 duration-500 cursor-pointer">
                    Help Center
                  </p>
                </div>
                <div className="">
                  <p className="text-body_text  hover:text-purple hover:translate-x-2 duration-500 cursor-pointer">
                    Partners
                  </p>
                </div>
                <div className="">
                  <p className="text-body_text  hover:text-purple hover:translate-x-2 duration-500 cursor-pointer">
                    Suggestions
                  </p>
                </div>
                <div className="">
                  <p className="text-body_text  hover:text-purple hover:translate-x-2 duration-500 cursor-pointer">
                    Blog
                  </p>
                </div>
                <div className="">
                  <p className="text-body_text  hover:text-purple hover:translate-x-2 duration-500 cursor-pointer">
                    Newsletter
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <h1 className="text-2xl text-heading_text font-semibold">
                  Subscribe Us
                </h1>
              </div>
              <div className="flex items-center gap-0 bg-media_bg rounded h-[50px] mt-10">
                <div className="">
                  <input
                    type="text"
                    className="px-5 bg-transparent outline-none text-heading_text"
                    placeholder="info@youmail.com"
                  />
                </div>
                <div className="flex justify-center items-center w-[50px] h-[50px] rounded-e bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] cursor-pointer">
                  <BsFillRocketTakeoffFill className="text-xl text-heading_text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-info">
        <div className=" flex flex-col lg:flex-row lg:justify-between items-center gap-3 py-7 px-1 lg:py-7 lg:px-16 3xl:w-[70%] mx-auto">
          <div className="">
            <p className="text-body_text text-xs lg:text-sm font-semibold">
              All rights reserved © 2022 by{" "}
              <span className="text-heading_text cursor-pointer">
                ThemeBeyond
              </span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-heading_text text-xs lg:text-sm hover:text-purple duration-500 px-3 cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-icon text-sm">|</p>
            <p className="font-semibold text-heading_text text-xs lg:text-sm hover:text-purple duration-500 px-3 cursor-pointer">
              Terms And Condition
            </p>
            <p className="text-icon text-sm">|</p>
            <p className="font-semibold text-heading_text text-xs lg:text-sm hover:text-purple duration-500 px-3 cursor-pointer">
              Contact Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
