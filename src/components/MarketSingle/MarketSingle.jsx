import React from "react";
import "../../index.css";
import { AiFillHeart, AiOutlineTwitter, AiOutlineRight } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { HiShare } from "react-icons/hi";
import { FaPinterestP, FaLinkedinIn, FaRocket } from "react-icons/fa";
import { NavLink, Outlet, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "../Nav";
import Layout from "../Layout";


const MarketSingle = () => {
  return (
    <Layout>
      <div className="sm:ms-[98px] sm:p-4 p-1  bg-[#070B24]">
        <div className="">
          <div className="mb-6 my-5">
            <Nav />
          </div>

          <div className="my-6 mx-3 sm:mx-0 lg:mx-14 flex 3xl:mx-auto 3xl:w-3/4 3xl:px-10 justify-between lg:px-3 sm:px-4">
            <div className="">
              <h1 className="sm:p-4 p-2 text-gray-300 px-4 sm:px-6 text-xs sm:text-sm rounded-full  hover:bg-[#E039FD] duration-200 bg-[#241F3D] font-semibold">
                GO BACK TO HOME
              </h1>
            </div>
            <div className="flex items-center">
              <h1 className=" sm:px-1 mx-1  hover:text-[#E039FD]  duration-200 text-gray-300 text-sm">
                Home
              </h1>
              <h1 className="font-bold sm:px-1 mx-1 text-gray-300  ">
                <AiOutlineRight />
              </h1>
              <h1 className=" sm:px-1 mx-1  hover:text-[#E039FD] duration-200 text-gray-300 text-sm">
                Product Details
              </h1>
            </div>
          </div>
        </div>

        {/* container  */}
        <div className=" col-span-8 lg:mx-14 grid gap-2 mx-auto grid-cols-8">
          {/* img */}
          <div className="hidden 3xl:block col-span-1"></div>
          <div className=" p-3 sm:max-md:col-span-8 col-span-8 3xl:col-span-3 lg:col-span-4">
            <motion.img
              className="mx-auto "
              src="https://themebeyond.com/html/nftmak/assets/img/others/market_details_img.png"
              alt="photo"
            />
          </div>
          {/* text */}
          <div className=" p-3 sm:max-md:col-span-8 sm:max-md:px-8 3xl:col-span-3 col-span-8 lg:col-span-4">
            {/* header  */}
            <div className="flex justify-between">
              <div className="">
                <p className="text-white font-[poppins] items-center flex h-full sm:text-[2rem] text-[1.6rem]">
                  Anatomy Science Club
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[45px] duration-[0.3s] bg-[#241F3D] hover:bg-[#E039FD] text-white flex justify-center items-center h-[45px]  rounded-full">
                  <HiShare />
                </div>
                <div className="sm:ms-4 ms-2 duration-[0.3s] bg-[#241F3D] hover:bg-[#E039FD] text-white text-lg w-[45px] h-[45px] flex justify-center items-center rounded-full">
                  <BsThreeDots />
                </div>
              </div>
            </div>
            {/* below header  */}
            <div className="mt-3 flex">
              <p className="text-gray-300 font-bold">
                Owned by <span className=" ms-1 text-[#E039FD]">B14484</span>
              </p>
              <p className="ms-7 font-bold text-gray-300  flex items-center">
                <AiFillHeart className="me-2 text-[#E039FD]" />6 favorites
              </p>
            </div>
            {/* card */}
            <div className="columns-2 mt-6 gap-3 sm:gap-7 ">
              <div className="bg-[#241F3D] shadow-xl md:max-lg:flex-col flex-none  xl:flex rounded-md p-4">
                <img
                  className="rounded-full md:max-lg:mx-auto md:max-lg:mb-2 mx-auto xl:mx-0 md:max-lg:w-[50px] h-[50px]"
                  src="https://themebeyond.com/html/nftmak/assets/img/others/mp_avatar01.png"
                  alt="girl"
                />
                <div className="md:max-lg:text-center text-center xl:ms-5">
                  <h1 className="font-semibold sm:font-bold mt-2 sm:mt-0 text-lg hover:text-[#E039FD] duration-200 text-white">
                    David Michels
                  </h1>
                  <p className="text-gray-300 xl:text-start">Creators by</p>
                </div>
              </div>
              {/* card  */}
              <div className="bg-[#241F3D] shadow-xl md:max-lg:flex-col flex-none  xl:flex rounded-md p-4">
                <img
                  className="rounded-full md:max-lg:mx-auto md:max-lg:mb-2 mx-auto xl:mx-0 md:max-lg:w-[50px] h-[50px]"
                  src="https://themebeyond.com/html/nftmak/assets/img/others/mp_avatar02.png"
                  alt="girl"
                />
                <div className="md:max-lg:text-center text-center xl:ms-5">
                  <h1 className="font-semibold sm:font-bold mt-2 sm:mt-0 duration-200 text-lg hover:text-[#E039FD] text-white">
                    MR. Tartos
                  </h1>
                  <p className="text-gray-300 xl:text-start">Creators by</p>
                </div>
              </div>
            </div>
            {/* text  */}
            <p className="text-[17px] my-6 text-gray-300 mt-6">
              What even is an NFT? NFT stands for non-fungible token, which
              basically means that it's one-of-kind digital asset that belongs
              to you and you only. The most popular NFTs right now include
              artwork and music also include videos.
            </p>
            {/* block */}
            <div className="grid bg-[#241F3D] p-5  pb-6 rounded-lg mt-5 grid-cols-2 gap-1">
              <div className="md:max-lg:col-span-2 col-span-2 xl:col-span-1">
                <p className=" font-semibold text-white">Highest bid</p>
                <div className="flex mt-5">
                  <img
                    className="rounded-full h-[50px]"
                    src="https://themebeyond.com/html/nftmak/assets/img/others/heighest_avatar.png"
                    alt="girl"
                  />
                  <div className="ms-5">
                    <h1 className="font-semibold duration-200 hover:text-[#E039FD] text-white">
                      Tomas lindahl
                    </h1>
                    <p className="text-gray-300 text-sm ">3.005wETH</p>
                  </div>
                </div>
              </div>
              <div className="md:max-lg:col-span-2 col-span-2 xl:col-span-1 md:max-lg:mt-3">
                <p className=" font-semibold text-white">Auction has ended</p>
                <div className="mt-4  rounded-md p-1 bg-gradient-to-r from-[#5338B5] to-[#DF39FD] gap-2">
                  <div className="grid p-2 pe-3 rounded-sm bg-[#241F3D] grid-cols-4">
                    <div className="text-white text-center">
                      <p className="font-semibold">0 0</p>
                      <p className="text-xs font-light">DAY</p>
                    </div>
                    <div className="text-white text-center">
                      <p className="font-semibold">0 0</p>
                      <p className="text-xs font-light">HOURS</p>
                    </div>
                    <div className="text-white text-center">
                      <p className="font-semibold">0 0</p>
                      <p className="text-xs font-light">MINUT</p>
                    </div>
                    <div className="text-center text-white">
                      <p className=" font-semibold">0 0</p>
                      <p className="text-xs font-light ">SECOND</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* bit */}
            <div className="mt-5 border-[3px] border-white duration-200 group hover:border-[#E039FD] p-3 rounded-full justify-center flex">
              <p className="text-lg font-semibold  duration-200 group-hover:text-[#E039FD] text-white">
                PLACE A BID
              </p>
            </div>
          </div>
        </div>
        {/* second container  */}
        <div className=" lg:mx-14 col-span-8 my-8  grid gap-2 mx-auto grid-cols-8">
          <div className="hidden 3xl:block col-span-1"></div>
          {/* scroll */}
          <div className="md:px-3 3xl:col-span-3 px-2 sm:px-6 col-span-8  md:col-span-4 sm:max-md:col-span-8 sm:max-md:mx-auto">
            {/* <div className="md:px-3 px-6 col-span-8 md:max-lg:mx-auto  md:col-span-4 sm:max-md:col-span-8 sm:max-md:mx-auto"> */}
            <div className="relative overflow-x-auto sm:rounded-lg">
              <div className="w-[600px] h-[445px]">
                <table className="w-full ">
                  <tbody>
                    <tr className="text-white ">
                      <th
                        colSpan={2}
                        className="text-3xl font-[poppins] py-4 ps-3 font-semibold text-start"
                      >
                        Description
                      </th>
                      <td className="text-[20px] text-gray-300 font-[poppins]">
                        Floor Price
                      </td>
                      <td className="text-[20px] text-gray-300 font-[poppins]">
                        Owners
                      </td>
                      <td className="text-[20px] text-gray-300 font-[poppins] text-center">
                        Assets
                      </td>
                    </tr>
                    <tr className="bg-[#1D1933] border-[#070B24] border-y-[10px]  mt-4 text-white">
                      <td colSpan={2} className="p-4  items-center">
                        <img
                          src="https://themebeyond.com/html/nftmak/assets/img/others/mp_activity_author01.png"
                          alt=""
                          className="inline"
                        />
                        <h1 className="text-gray-200 text-[15px] font-semibold font-[poppins] inline ms-3">
                          Trading Pet
                        </h1>
                      </td>
                      <td className="text-gray-300 font-semibold text-center">
                        +5486%
                      </td>
                      <td className="text-gray-300 font-semibold text-center">
                        -965%{" "}
                      </td>
                      <td className=" text-gray-300 font-semibold text-center pe-4">
                        2,356 ETH
                      </td>
                    </tr>
                    <tr className="bg-[#1D1933]  border-[#070B24] border-y-[15px]  mt-4 text-white">
                      <td colSpan={2} className="p-4 items-center">
                        <img
                          src="https://themebeyond.com/html/nftmak/assets/img/others/mp_activity_author02.png"
                          alt=""
                          className="inline"
                        />
                        <h1 className="text-[15px] text-gray-200 font-semibold font-[poppins] inline ms-3">
                          Trading Craft
                        </h1>
                      </td>
                      <td className="text-gray-300 font-semibold text-center">
                        +5486%
                      </td>
                      <td className="text-gray-300 font-semibold text-center">
                        -965%
                      </td>
                      <td className="text-gray-300 font-semibold text-center pe-4">
                        2,356 ETH
                      </td>
                    </tr>
                    <tr className="bg-[#1D1933]  border-[#070B24] border-y-[10px]  mt-4 text-white">
                      <td colSpan={2} className="p-4 items-center">
                        <img
                          src="https://themebeyond.com/html/nftmak/assets/img/others/mp_activity_author03.png"
                          alt=""
                          className="inline"
                        />
                        <h1 className="text-[15px] text-gray-200 font-semibold font-[poppins] inline ms-3">
                          Trading Card
                        </h1>
                      </td>
                      <td className="text-gray-300 font-semibold text-center">
                        +5486%
                      </td>
                      <td className="text-gray-300 font-semibold text-center">
                        -965%
                      </td>
                      <td className="text-gray-300 font-semibold text-center pe-4">
                        2,356 ETH
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* right scroll   */}
          <div className=" text-white 3xl:col-span-3 p-3 xl:px-3 px-2 sm:px-6 col-span-8  md:col-span-4 sm:max-md:col-span-8 sm:max-md:mx-auto sm:max-md:px-11">
            <div className="felx">
              <div className="grid grid-cols-8 border-b-2 mb-3 border-gray-800 py-2 pb-4">
                <div className="col-span-3 xl:col-span-2 md:max-lg:col-span-3">
                  <NavLink
                    to=" "
                    className={({ isActive }) =>
                      isActive
                        ? "inline font-semibold text-lg font-[poppins] text-transparent bg-clip-text bg-gradient-to-r from-[#5338B5] to-[#DF39FD]"
                        : "font-[poppins] text-lg"
                    }
                  >
                    Bid History
                  </NavLink>
                </div>
                <div className="col-span-2 xl:col-span-1 md:max-lg:col-span-2">
                  <NavLink
                    to="info"
                    className={({ isActive }) =>
                      isActive
                        ? "inline font-semibold text-lg font-[poppins] text-transparent bg-clip-text bg-gradient-to-r from-[#5338B5] to-[#DF39FD]"
                        : "font-[poppins] text-lg"
                    }
                  >
                    Info
                  </NavLink>
                </div>
                <div className="col-span-1">
                  <NavLink
                    to="pro"
                    className={({ isActive }) =>
                      isActive
                        ? "inline font-semibold text-lg font-[poppins] text-transparent bg-clip-text bg-gradient-to-r from-[#5338B5] to-[#DF39FD]"
                        : "font-[poppins] text-lg"
                    }
                  >
                    Provenance
                  </NavLink>
                </div>
              </div>
              <div className="h-[345px] overflow-y-auto">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        {/* third screen cards */}
        <div className=" lg:mx-14 grid grid-cols-8 relative overflow-x-auto  mt-3">
          {/* <div className="col-span-1 bg-slate-700"></div> */}
          {/* container  */}
          <div className="hidden 3xl:block col-span-1"></div>
          <div className=" col-span-8 3xl:col-span-6 ">
            <div className="">
              <div className="justify-start ms-4 my-8 mb-10 flex">
                <h1 className="font-[poppins] text-3xl font-bold text-white  ">
                  Live Auctions
                </h1>
                <img
                  className="h-[30px] ms-3"
                  src="https://themebeyond.com/html/nftmak/assets/img/icons/title_icon01.png"
                  alt=""
                />
              </div>
              {/* cards  */}
              <div className="grid grid-cols-4 px-4  sm:max-md:px-8  mb-8 xl:px-4 md:max-lg:gap-10 md:max-lg:px-10 gap-10 md:gap-5">
                <div className="rounded-xl col-span-4 md:max-lg:col-span-2 sm:max-md:col-span-2 p-5 pt-2 bg-[#1D1933] lg:col-span-1">
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
                <div className="rounded-xl col-span-4 md:max-lg:col-span-2 sm:max-md:col-span-2 p-5 pt-2 bg-[#1D1933] lg:col-span-1">
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
                <div className="rounded-xl col-span-4 md:max-lg:col-span-2 p-5 pt-2 bg-[#1D1933] sm:max-md:col-span-2 lg:col-span-1">
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
                <div className="rounded-xl col-span-4 md:max-lg:col-span-2 p-5 pt-2 bg-[#1D1933] sm:max-md:col-span-2 lg:col-span-1">
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
            <div className="h-[50px]"></div>
            {/* footer  */}
            <div className="bg-[#11122B] px-6 sm:ms-3 sm:p-20 pb-10 xl:py-16 xl:pb-16 pt-12 grid grid-cols-6 xl:h-[340px]  xl:px-4">
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
            <div className="p-4 pt-9 xl:flex flex-none justify-between">
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

export default MarketSingle;
