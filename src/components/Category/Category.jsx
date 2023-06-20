import React from "react";
import Nav from "../Nav";
import Layout from "../Layout";
import MidBar from "./MidBar";
import { BsThreeDots } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import FeaturesOfTheWeek from "./FeaturesOfTheWeek";
import { FaPinterestP, FaLinkedinIn, FaRocket } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";

const Category = () => {
  return (
    <Layout>
      <div className="bg-[#070B24]">
        <div className="blog-bg">
          <div className=" flex lg:ms-16 py-5">
            <Nav />
          </div>
          <h2 className="text-4xl text-white sm:ps-5 h-[280px] text-center flex justify-center items-center font-bold ">
            {/* <h2 className="text-4xl text-white text-center font-semibold mt-20 md:mt-40"> */}
            NFT Browse Category
          </h2>
          <div className="w-full lg:ps-14 ">
            <MidBar />
          </div>
        </div>
        {/* CARD  */}
        <div className="grid grid-cols-11 mt-16">
          <div className="hidden lg:block  con-span-1"></div>
          <div className="lg:col-span-4 col-span-11 md:max-lg:mb-10 xl:col-span-3 lg:pe-4">
            {/* .card1  */}
            <div className="shadow-xl">
              <div className="flex items-center gap-2 sm:ms-6 mb-3">
                <h4 className="text-heading_text sm:ms-0 ms-5 text-2xl font-bold">
                  Status
                </h4>
                <img
                  src="https://themebeyond.com/html/nftmak/assets/img/icons/title_icon01.png"
                  alt="topseller-image"
                />
              </div>
              <div className="bg-primary p-5 gap-3 flex flex-wrap m-4 sm:ms-5 rounded-xl">
                <div className="hover:bg-gradient-to-r group hover:from-[#5338B5] p-1 rounded-3xl hover:to-[#DF39FD]">
                  {/* <div className="border-dashed border-[1px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white"> */}
                  <div className="hover:border-dashed bg-secondary  group-hover:bg-transparent duration-200 hover:border-[1px] text-center p-3 px-5 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                    BUY NOW
                  </div>
                </div>
                <div className="hover:bg-gradient-to-r group hover:from-[#5338B5] p-1 rounded-3xl hover:to-[#DF39FD]">
                  {/* <div className="border-dashed border-[1px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white"> */}
                  <div className="hover:border-dashed bg-secondary  group-hover:bg-transparent duration-200 hover:border-[1px] text-center p-3 px-5 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                    On Auction
                  </div>
                </div>
                <div className="hover:bg-gradient-to-r group hover:from-[#5338B5] p-1 rounded-3xl hover:to-[#DF39FD]">
                  {/* <div className="border-dashed border-[1px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white"> */}
                  <div className="hover:border-dashed bg-secondary  group-hover:bg-transparent duration-200 hover:border-[1px] text-center p-3 px-5 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                    New
                  </div>
                </div>
                <div className="hover:bg-gradient-to-r group hover:from-[#5338B5] p-1 rounded-3xl hover:to-[#DF39FD]">
                  {/* <div className="border-dashed border-[1px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white"> */}
                  <div className="hover:border-dashed bg-secondary  group-hover:bg-transparent duration-200 hover:border-[1px] text-center p-3 px-5 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                    Has Offers
                  </div>
                </div>
              </div>
            </div>
            {/* card2  */}
            <div className="shadow-xl mt-10">
              <div className="flex items-center gap-2 sm:ms-6 mb-3">
                <h4 className="text-heading_text sm:ms-0 ms-5 text-2xl font-bold">
                  Price
                </h4>
              </div>
              <div className="flex bg-primary p-5 gap-3 flex-wrap m-4 rounded-xl items-center sm:ms-5 mb-3">
                <div className="relative block">
                  <input
                    className="placeholder:font-semibold placeholder:text-md ps-5 placeholder:text-slate-400 py-4 block bg-secondary w-full border border-primary rounded-full pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#DF39FD] focus:ring-[#DF39FD] focus:ring-1 sm:text-sm"
                    placeholder="US Dollars"
                    type="text"
                    name="search"
                  />
                  <span className="absolute inset-y-0 text-slate-400 text-lg font-semibold right-0 flex items-center pe-6">
                    $
                  </span>
                </div>
                <div className="mt-2 flex">
                  <div className="">
                    <div className="relative block">
                      <input
                        className="placeholder:font-semibold placeholder:text-md ps-5 placeholder:text-slate-400 py-4 block bg-secondary w-full border border-primary rounded-full pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#DF39FD] focus:ring-[#DF39FD] focus:ring-1 sm:text-sm"
                        placeholder="US Dollars"
                        type="text"
                        name="search"
                      />
                    </div>
                  </div>
                  <div className="mx-2 text-slate-200 text-sm font-semibold items-center flex">
                    TO
                  </div>
                  <div className="">
                    <div className="relative block">
                      <input
                        className="placeholder:font-semibold placeholder:text-md ps-5 placeholder:text-slate-400 py-4 block bg-secondary w-full border border-primary rounded-full pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#DF39FD] focus:ring-[#DF39FD] focus:ring-1 sm:text-sm"
                        placeholder="US Dollars"
                        type="text"
                        name="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="shadow-xl mt-10">
              <div className="flex items-center gap-2 sm:ms-6 mb-3">
                <h4 className="text-heading_text sm:ms-0 ms-5 text-2xl font-bold">
                  On sale in
                </h4>
              </div>
              <div className="flex bg-primary p-5 gap-3 flex-wrap m-4 rounded-xl items-center sm:ms-5 mb-14">
                <fieldset className="">
                  <div className="">
                    <input
                      id="draft"
                      className="peer/draft"
                      type="radio"
                      name="status"
                      checked
                    />
                    <label
                      for="draft"
                      className=" ms-3 text-slate-200 font-semibold "
                    >
                      ETH
                    </label>
                  </div>

                  <div className="mt-2">
                    <input
                      id="published"
                      className="peer/published"
                      type="radio"
                      name="status"
                    />
                    <label
                      for="published"
                      className="ms-3  text-slate-200 font-semibold "
                    >
                      WETH
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          {/* cardssss  */}
          <div className="col-span-11 sm:max-md:col-span-11 lg:col-span-6 xl:col-span-7">
            <div className="grid grid-cols-6 mx-4 ps-0  sm:max-md:px-8  mb-8 xl:px-4 xl:ps-0 md:max-lg:gap-10 md:max-lg:px-10 gap-10 md:gap-5">
              <div className="rounded-xl col-span-6 md:max-lg:col-span-2 lg:col-span-3 sm:max-md:col-span-2 p-5 pt-2 bg-[#1D1933] xl:col-span-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://themebeyond.com/html/nftmak/assets/img/others/top_col_avatar.png"
                      alt=""
                    />
                    <p className="ms-2 text-sm font-semibold text-gray-400">
                      <span className="me-2 text-[#E039FD]">By</span>jonson
                    </p>
                  </div>
                  <div className="text-5xl items-center text-gray-300 font-bold">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="">
                  <img
                    className="rounded-xl mt-2"
                    src="https://themebeyond.com/html/nftmak/assets/img/others/top_collection01.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between my-5 ">
                  <p className="text-xl font-semibold text-white">
                    Pie Collection
                  </p>
                  <div className="items-center flex">
                    <p className="font-bold text-sm items-center text-[#E039FD]">
                      5.4 ETH
                    </p>
                  </div>
                </div>
                <hr className="h-px bg-gray-700 border-0" />
                <div className="mt-4 flex justify-between">
                  <div className="bg-gradient-to-r from-[#5338B5] w-[140px] p-1 rounded-3xl to-[#DF39FD]">
                    <div className="border-dashed border-[2px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                      PLACE A BID
                    </div>
                  </div>
                  <div className="flex items-center font-bold text-gray-400">
                    <AiFillHeart className="text-gray-700 text-xl items-center me-2" />
                    59
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="rounded-xl col-span-6 md:max-lg:col-span-2 lg:col-span-3 sm:max-md:col-span-2 p-5 pt-2 bg-[#1D1933] xl:col-span-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://themebeyond.com/html/nftmak/assets/img/others/top_col_avatar.png"
                      alt=""
                    />
                    <p className="ms-2 text-sm font-semibold text-gray-400">
                      <span className="me-2 text-[#E039FD]">By</span>jonson
                    </p>
                  </div>
                  <div className="text-5xl items-center text-gray-300 font-bold">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="">
                  <img
                    className="rounded-xl mt-2"
                    src="https://themebeyond.com/html/nftmak/assets/img/others/top_collection02.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between my-5 ">
                  <p className="text-xl font-semibold text-white">
                    Pie Collection
                  </p>
                  <div className="items-center flex">
                    <p className="font-bold text-sm items-center text-[#E039FD]">
                      5.4 ETH
                    </p>
                  </div>
                </div>
                <hr className="h-px bg-gray-700 border-0" />
                <div className="mt-4 flex justify-between">
                  <div className="bg-gradient-to-r from-[#5338B5] w-[140px] p-1 rounded-3xl to-[#DF39FD]">
                    <div className="border-dashed border-[2px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                      PLACE A BID
                    </div>
                  </div>
                  <div className="flex items-center font-bold text-gray-400">
                    <AiFillHeart className="text-gray-700 text-xl items-center me-2" />
                    59
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="rounded-xl col-span-6 md:max-lg:col-span-2 lg:col-span-3 p-5 pt-2 bg-[#1D1933] sm:max-md:col-span-2 xl:col-span-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://themebeyond.com/html/nftmak/assets/img/others/top_col_avatar.png"
                      alt=""
                    />
                    <p className="ms-2 text-sm font-semibold text-gray-400">
                      <span className="me-2 text-[#E039FD]">By</span>jonson
                    </p>
                  </div>
                  <div className="text-5xl items-center text-gray-300 font-bold">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="">
                  <img
                    className="rounded-xl mt-2"
                    src="https://themebeyond.com/html/nftmak/assets/img/others/top_collection03.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between my-5 ">
                  <p className="text-xl font-semibold text-white">
                    Pie Collection
                  </p>
                  <div className="items-center flex">
                    <p className="font-bold text-sm items-center text-[#E039FD]">
                      5.4 ETH
                    </p>
                  </div>
                </div>
                <hr className="h-px bg-gray-700 border-0" />
                <div className="mt-4 flex justify-between">
                  <div className="bg-gradient-to-r from-[#5338B5] w-[140px] p-1 rounded-3xl to-[#DF39FD]">
                    <div className="border-dashed border-[2px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                      PLACE A BID
                    </div>
                  </div>
                  <div className="flex items-center font-bold text-gray-400">
                    <AiFillHeart className="text-gray-700 text-xl items-center me-2" />
                    59
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="rounded-xl col-span-6 md:max-lg:col-span-2 lg:col-span-3 p-5 pt-2 bg-[#1D1933] sm:max-md:col-span-2 xl:col-span-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://themebeyond.com/html/nftmak/assets/img/others/top_col_avatar.png"
                      alt=""
                    />
                    <p className="ms-2 text-sm font-semibold text-gray-400">
                      <span className="me-2 text-[#E039FD]">By</span>jonson
                    </p>
                  </div>
                  <div className="text-5xl items-center text-gray-300 font-bold">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="">
                  <img
                    className="rounded-xl mt-2"
                    src="https://themebeyond.com/html/nftmak/assets/img/others/top_collection04.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between my-5 ">
                  <p className="text-xl font-semibold text-white">
                    Pie Collection
                  </p>
                  <div className="items-center flex">
                    <p className="font-bold text-sm items-center text-[rgb(224,57,253)]">
                      5.4 ETH
                    </p>
                  </div>
                </div>
                <hr className="h-px bg-gray-700 border-0" />
                <div className="mt-4 flex justify-between">
                  <div className="bg-gradient-to-r from-[#5338B5] w-[140px] p-1 rounded-3xl to-[#DF39FD]">
                    <div className="border-dashed border-[2px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                      PLACE A BID
                    </div>
                  </div>
                  <div className="flex items-center font-bold text-gray-400">
                    <AiFillHeart className="text-gray-700 text-xl items-center me-2" />
                    59
                  </div>
                </div>
              </div>
              <div className="rounded-xl col-span-6 md:max-lg:col-span-2 lg:col-span-3 sm:max-md:col-span-2 p-5 pt-2 bg-[#1D1933] xl:col-span-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://themebeyond.com/html/nftmak/assets/img/others/top_col_avatar.png"
                      alt=""
                    />
                    <p className="ms-2 text-sm font-semibold text-gray-400">
                      <span className="me-2 text-[#E039FD]">By</span>jonson
                    </p>
                  </div>
                  <div className="text-5xl items-center text-gray-300 font-bold">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="">
                  <img
                    className="rounded-xl mt-2"
                    src="https://themebeyond.com/html/nftmak/assets/img/others/top_collection01.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between my-5 ">
                  <p className="text-xl font-semibold text-white">
                    Pie Collection
                  </p>
                  <div className="items-center flex">
                    <p className="font-bold text-sm items-center text-[#E039FD]">
                      5.4 ETH
                    </p>
                  </div>
                </div>
                <hr className="h-px bg-gray-700 border-0" />
                <div className="mt-4 flex justify-between">
                  <div className="bg-gradient-to-r from-[#5338B5] w-[140px] p-1 rounded-3xl to-[#DF39FD]">
                    <div className="border-dashed border-[2px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                      PLACE A BID
                    </div>
                  </div>
                  <div className="flex items-center font-bold text-gray-400">
                    <AiFillHeart className="text-gray-700 text-xl items-center me-2" />
                    59
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="rounded-xl col-span-6 md:max-lg:col-span-2 lg:col-span-3 sm:max-md:col-span-2 p-5 pt-2 bg-[#1D1933] xl:col-span-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://themebeyond.com/html/nftmak/assets/img/others/top_col_avatar.png"
                      alt=""
                    />
                    <p className="ms-2 text-sm font-semibold text-gray-400">
                      <span className="me-2 text-[#E039FD]">By</span>jonson
                    </p>
                  </div>
                  <div className="text-5xl items-center text-gray-300 font-bold">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="">
                  <img
                    className="rounded-xl mt-2"
                    src="https://themebeyond.com/html/nftmak/assets/img/others/top_collection02.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between my-5 ">
                  <p className="text-xl font-semibold text-white">
                    Pie Collection
                  </p>
                  <div className="items-center flex">
                    <p className="font-bold text-sm items-center text-[#E039FD]">
                      5.4 ETH
                    </p>
                  </div>
                </div>
                <hr className="h-px bg-gray-700 border-0" />
                <div className="mt-4 flex justify-between">
                  <div className="bg-gradient-to-r from-[#5338B5] w-[140px] p-1 rounded-3xl to-[#DF39FD]">
                    <div className="border-dashed border-[2px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                      PLACE A BID
                    </div>
                  </div>
                  <div className="flex items-center font-bold text-gray-400">
                    <AiFillHeart className="text-gray-700 text-xl items-center me-2" />
                    59
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="rounded-xl col-span-6 md:max-lg:col-span-2 lg:col-span-3 p-5 pt-2 bg-[#1D1933] sm:max-md:col-span-2 xl:col-span-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://themebeyond.com/html/nftmak/assets/img/others/top_col_avatar.png"
                      alt=""
                    />
                    <p className="ms-2 text-sm font-semibold text-gray-400">
                      <span className="me-2 text-[#E039FD]">By</span>jonson
                    </p>
                  </div>
                  <div className="text-5xl items-center text-gray-300 font-bold">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="">
                  <img
                    className="rounded-xl mt-2"
                    src="https://themebeyond.com/html/nftmak/assets/img/others/top_collection03.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between my-5 ">
                  <p className="text-xl font-semibold text-white">
                    Pie Collection
                  </p>
                  <div className="items-center flex">
                    <p className="font-bold text-sm items-center text-[#E039FD]">
                      5.4 ETH
                    </p>
                  </div>
                </div>
                <hr className="h-px bg-gray-700 border-0" />
                <div className="mt-4 flex justify-between">
                  <div className="bg-gradient-to-r from-[#5338B5] w-[140px] p-1 rounded-3xl to-[#DF39FD]">
                    <div className="border-dashed border-[2px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                      PLACE A BID
                    </div>
                  </div>
                  <div className="flex items-center font-bold text-gray-400">
                    <AiFillHeart className="text-gray-700 text-xl items-center me-2" />
                    59
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="rounded-xl col-span-6 md:max-lg:col-span-2 lg:col-span-3 p-5 pt-2 bg-[#1D1933] sm:max-md:col-span-2 xl:col-span-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://themebeyond.com/html/nftmak/assets/img/others/top_col_avatar.png"
                      alt=""
                    />
                    <p className="ms-2 text-sm font-semibold text-gray-400">
                      <span className="me-2 text-[#E039FD]">By</span>jonson
                    </p>
                  </div>
                  <div className="text-5xl items-center text-gray-300 font-bold">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="">
                  <img
                    className="rounded-xl mt-2"
                    src="https://themebeyond.com/html/nftmak/assets/img/others/top_collection04.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between my-5 ">
                  <p className="text-xl font-semibold text-white">
                    Pie Collection
                  </p>
                  <div className="items-center flex">
                    <p className="font-bold text-sm items-center text-[rgb(224,57,253)]">
                      5.4 ETH
                    </p>
                  </div>
                </div>
                <hr className="h-px bg-gray-700 border-0" />
                <div className="mt-4 flex justify-between">
                  <div className="bg-gradient-to-r from-[#5338B5] w-[140px] p-1 rounded-3xl to-[#DF39FD]">
                    <div className="border-dashed border-[2px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                      PLACE A BID
                    </div>
                  </div>
                  <div className="flex items-center font-bold text-gray-400">
                    <AiFillHeart className="text-gray-700 text-xl items-center me-2" />
                    59
                  </div>
                </div>
              </div>
              <div className="rounded-xl col-span-6 md:max-lg:col-span-2 lg:col-span-3 p-5 pt-2 bg-[#1D1933] sm:max-md:col-span-2 xl:col-span-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://themebeyond.com/html/nftmak/assets/img/others/top_col_avatar.png"
                      alt=""
                    />
                    <p className="ms-2 text-sm font-semibold text-gray-400">
                      <span className="me-2 text-[#E039FD]">By</span>jonson
                    </p>
                  </div>
                  <div className="text-5xl items-center text-gray-300 font-bold">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="">
                  <img
                    className="rounded-xl mt-2"
                    src="https://themebeyond.com/html/nftmak/assets/img/others/top_collection04.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between my-5 ">
                  <p className="text-xl font-semibold text-white">
                    Pie Collection
                  </p>
                  <div className="items-center flex">
                    <p className="font-bold text-sm items-center text-[rgb(224,57,253)]">
                      5.4 ETH
                    </p>
                  </div>
                </div>
                <hr className="h-px bg-gray-700 border-0" />
                <div className="mt-4 flex justify-between">
                  <div className="bg-gradient-to-r from-[#5338B5] w-[140px] p-1 rounded-3xl to-[#DF39FD]">
                    <div className="border-dashed border-[2px] text-center p-2 rounded-3xl text-sm border-white font-[poppins] font-semibold text-white">
                      PLACE A BID
                    </div>
                  </div>
                  <div className="flex items-center font-bold text-gray-400">
                    <AiFillHeart className="text-gray-700 text-xl items-center me-2" />
                    59
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* feature  */}
        <div className="bg-[#11122B] mt-12">
          <div className="grid grid-cols-12 bg-[#11122B]">
            <div className="hidden lg:block col-span-1"></div>
            <div className="col-span-12 lg:col-span-11">
              <FeaturesOfTheWeek />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 bg-[#11122B]">
          <div className="hidden lg:block col-span-1"></div>
          <div className="lg:col-span-11  col-span-12 bg-[#070B24]">
            {/* footer  */}
            <div className="bg-[#070B24] px-6 sm:ms-3 sm:p-20 pb-10 xl:py-16 xl:pb-16 pt-12 grid grid-cols-6 xl:h-[340px]  xl:px-4">
              <div className="md:col-span-2 sm:col-span-4  col-span-6 md:ps-4">
                <img
                  className="mb-3 h-[50px]"
                  src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
                  alt=""
                />
                <p className="font-semibold w-[200px] sm:max-md:w-[200px] text-gray-300 md:max-lg:w-[220px] md:w-[250px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus veritatis sequi doloribus fuga.
                </p>
                {/* icon group  */}
                <div className="flex justify-between mt-5 w-[190px] ">
                  <div className="col-span-1 bg-[#28243F] text-gray-300 hover:bg-[#E039FD] duration-200 justify-center flex items-center text-2md w-[40px] h-[40px] rounded-sm">
                    <TiSocialFacebook />
                  </div>
                  <div className="col-span-1 bg-[#28243F] text-gray-300 hover:bg-[#E039FD] duration-200 justify-center flex items-center text-md w-[40px] h-[40px] rounded-sm">
                    <AiOutlineTwitter />
                  </div>
                  <div className="col-span-1 bg-[#28243F] text-gray-300 hover:bg-[#E039FD] duration-200 justify-center flex items-center text-lg w-[40px] h-[40px] rounded-sm">
                    <FaLinkedinIn />
                  </div>
                  <div className="col-span-1 bg-[#28243F] text-gray-300 hover:bg-[#E039FD] duration-00 justify-center flex items-center text-lg w-[40px] h-[40px] rounded-sm">
                    <FaPinterestP />
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 sm:col-span-2 mt-8 sm:mt-0 col-span-6  pt-3">
                <p className="text-md font-bold text-gray-200 font-[poppins] mb-5">
                  Useful Links
                </p>
                <p className=" text-gray-300 font-[poppins] mb-2 hover:translate-x-2 hover:text-[#E039FD] duration-[0.55s] text-sm ">
                  All NFTs
                </p>
                <p className=" text-gray-300 font-[poppins] mb-2 hover:translate-x-2 hover:text-[#E039FD] duration-[0.55s] text-sm ">
                  How It Works
                </p>
                <p className=" text-gray-300 font-[poppins] mb-2 hover:translate-x-2 hover:text-[#E039FD] duration-[0.55s] text-sm ">
                  Create
                </p>
                <p className=" text-gray-300 font-[poppins] mb-2 hover:translate-x-2 hover:text-[#E039FD] duration-[0.55s] text-sm ">
                  Explore
                </p>
                <p className=" text-gray-300 font-[poppins] mb-2 hover:translate-x-2 hover:text-[#E039FD] duration-[0.55s] text-sm ">
                  Privacy & Terms
                </p>
              </div>
              <div className="md:col-span-1 mt-7 md:mt-0 sm:col-span-2  col-span-6  pt-3 md:ps-8">
                <p className="text-md font-bold text-gray-200 font-[poppins] mb-5">
                  Community
                </p>
                <p className=" text-gray-300 font-[poppins] mb-2 hover:translate-x-2 hover:text-[#E039FD] duration-[0.55s] text-sm ">
                  Help Center
                </p>
                <p className=" text-gray-300 font-[poppins] mb-2 hover:translate-x-2 hover:text-[#E039FD] duration-[0.55s] text-sm ">
                  Partners
                </p>
                <p className=" text-gray-300 font-[poppins] mb-2 hover:translate-x-2 hover:text-[#E039FD] duration-[0.55s] text-sm ">
                  Suggestions
                </p>
                <p className=" text-gray-300 font-[poppins] mb-2 hover:translate-x-2 hover:text-[#E039FD] duration-[0.55s] text-sm ">
                  Blog
                </p>
                <p className=" text-gray-300 font-[poppins] mb-2 hover:translate-x-2 hover:text-[#E039FD] duration-[0.55s] text-sm ">
                  Newsletter
                </p>
              </div>
              <div className="md:col-span-2 mt-7 md:mt-0 sm:col-span-4   col-span-6  md:ms-12 pt-3 md:pe-9 ">
                <p className="text-md sm:text-end xl:text-start font-bold text-gray-200 font-[poppins] mb-5">
                  Subscribe Us
                </p>
                <form>
                  <div className="flex ">
                    <div className="relative sm:w-[230px] w-full sm:ms-auto xl:w-full">
                      <input
                        type="search"
                        className="block rounded-s-md placeholder:font-[poppins]  placeholder-gray-500 placeholder- h-[50px] p-2.5 w-full z-20 text-sm text-gray-900 bg-[#1D1933]"
                        placeholder="info@youmail.com"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute top-0 right-0 p-2.5 h-[50px] px-5 text-sm font-medium  bg-gradient-to-r from-[#5338B5] to-[#DF39FD] rounded-e-md"
                      >
                        <FaRocket className="text-white text-3xl" />
                        <span className="sr-only">Search</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* copy right  */}
            <div className="p-4 pt-9 xl:flex bg-[#11122B] flex-none justify-between">
              <p className=" text-gray-300 text-center xl:text-start font-[poppins] mb-2  text-sm ">
                All rights reserved © 2022 by{" "}
                <span className="text-white">ThemeBeyond</span>
              </p>
              <div className="flex justify-center mt-3 xl:mt-0">
                <p className=" text-gray-300 font-[poppins] mb-2  hover:text-[#E039FD] duration-200 text-sm px-3 xl:px-4 border-e-[1px] border-gray-600">
                  Newsletter
                </p>
                <p className=" text-gray-300 font-[poppins] mb-2  hover:text-[#E039FD] duration-200 text-sm px-3 xl:px-4 border-e-[1px] border-gray-600">
                  Terms And Condition
                </p>
                <p className=" text-gray-300 font-[poppins] mb-2  hover:text-[#E039FD] duration-200 text-sm px-3 xl:px-4">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
