import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";
import { navLinks } from "../constants/index";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-[98%] mx-auto border border-slate-900  p-[7px] rounded-xl">
      <div className="py-4 bg-primary  rounded-lg">
        <div className="flex justify-between items-center px-6">
          <div className="flex items-center gap-3">
            <img
              src={
                "https://themebeyond.com/html/nftmak/assets/img/logo/naftmak.svg"
              }
              alt=""
            />
            <div className="h-[31px] w-[4px] rounded-[3px] bg-header_border"></div>
            <div className="hidden sm:flex gap-3 px-2 items-center border border-[#322c50] border-dashed rounded bg-secondary">
              <BiSearch className="text-icon transform -scale-x-100" />
              <input
                type="text"
                className="w-[180px] py-2 focus:outline-none border-0 bg-transparent text-white placeholder:text-xs"
                placeholder="Search Artwork"
              />
            </div>
          </div>

          <div className="flex">
            <div className=" hidden md:flex items-center gap-4 xl:gap-10">
              <ul className="xl:gap-8 gap-5 hidden lg:flex">
                {/* <ul className="flex xl:gap-8 gap-5 hidden"> */}
                {navLinks?.map((navLink) => (
                  <li
                    className="mt-[3px] text-heading_text text-sm tracking-wider cursor-pointer duration-300 hover:text-dark_blue"
                    key={navLink.id}
                  >
                    {navLink.title}
                  </li>
                ))}
                <li>
                  <div className="group relative inline-flex">
                    <div
                      className="flex items-center text-heading_text text-sm tracking-wider cursor-pointer duration-300 hover:text-dark_blue"
                      href=""
                    >
                      Pages
                      <FiChevronDown className="ml-1" />
                    </div>
                    <span className="group-hover:block hidden cursor-pointer w-[260px] py-7 z-10 absolute top-5 -left-4">
                      <div className="bg-primary border border-header_border custom-shoadow-lg px-3 py-4">
                        <ul className="text-heading_text text-sm tracking-wider space-y-[3px]">
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Activity
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Category
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Ranking
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Creators
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            <Link to={"/marketsingle"}>Market Single</Link>
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Live Bidding
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Create Item
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Author Profile
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Login & Register
                          </li>
                        </ul>
                      </div>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="group relative inline-flex">
                    <div
                      className="flex items-center text-heading_text text-sm tracking-wider cursor-pointer duration-300 hover:text-dark_blue"
                      href=""
                    >
                      Blog
                      <FiChevronDown className="ml-1" />
                    </div>
                    <span className="group-hover:block hidden cursor-pointer w-[260px] py-7 z-10 absolute top-5 -left-4">
                      <div className="bg-primary border border-header_border custom-shoadow-lg px-3 py-4">
                        <ul className="text-heading_text text-sm tracking-wider space-y-[3px]">
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Our Blog
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Blog Details
                          </li>
                        </ul>
                      </div>
                    </span>
                  </div>
                </li>
              </ul>

              <div className="hidden xl:block transform duration-1000 transition hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                  <button className="px-5 py-3 text-sm font-bold text-heading_text">
                    WALLET CONNECT
                  </button>
                </div>
              </div>
              {/* <div className="xl:hidden hidden lg:block transform duration-1000 transition hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                  <button className="p-2   text-sm font-bold text-heading_text">
                    <FaWallet />
                  </button>
                </div>
              </div> */}
            </div>

            {/* nav  */}
            <div className="">
              <button
                data-collapse-toggle="navbar-multi-level"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                // aria-controls="navbar-multi-level"
                // aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className="hidden w-full fixed z-50 top-32 right-0   md:w-auto"
                id="navbar-multi-level"
              >
                <ul className="flex flex-col gap-y-2 font-medium p-4 mx-4 sm:ms-[7.6rem] mt-4 border text-white border-[#5338B5] rounded-lg bg-primary xl:flex-row ">
                  {/* <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> */}
                  <li>
                    <a
                      href="#"
                      className=" block py-2 pl-3 pr-4 text-white bg-gradient-to-r from-[#5338B5] to-[#DF39FD] rounded md:bg-transparent "
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block py-2 text-white pl-3 pr-4 rounded hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] md:hover:bg-transparent md:border-0"
                    >
                      Explore
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 text-white pl-3 pr-4 rounded hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] md:hover:bg-transparent md:border-0"
                    >
                      Collection
                    </a>
                  </li>
                  <li>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex text-white items-center rounded-md hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] justify-between w-full py-2 pl-3 pr-4   md:hover:bg-transparent md:border-0 md:w-auto "
                    >
                      Pages
                      <svg
                        className="w-5 h-5 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div
                      id="dropdownNavbar"
                      className="z-10 text-white  hidden font-normal bg-secondary divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        // aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Activity
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Category
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Ranking
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Creators
                          </a>
                        </li>
                        <li>
                          <a
                            href="/marketsingle"
                            className="block text-white px-4 py-2 hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Market Single
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Live Bidding
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Create Item
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Author Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Login & Register
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <button
                      id="dropdownNavbarLink1"
                      data-dropdown-toggle="dropdownNavbar1"
                      className="flex text-white items-center rounded-md hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] justify-between w-full py-2 pl-3 pr-4   md:hover:bg-transparent md:border-0 md:w-auto "
                    >
                      Blog
                      <svg
                        className="w-5 h-5 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div
                      id="dropdownNavbar1"
                      className="z-10 text-white hidden font-normal bg-secondary divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Our Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gradient-to-r from-[#5338B5] to-[#DF39FD] dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* nav   */}
            <div className="xl:hidden ms-4 w-[40px] transform duration-1000 transition hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
              <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                <button className="p-2   text-sm font-bold text-heading_text">
                  <FaWallet />
                </button>
              </div>
            </div>
          </div>
          {/* ff  */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
