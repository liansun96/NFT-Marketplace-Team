import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { navLinks } from "../constants/index";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-[90%] mx-auto border border-slate-900  p-[7px] rounded-xl">
      <div className="py-4 bg-primary  rounded-lg">
        <div className="flex justify-between items-center px-6">
          <div className="flex items-center gap-10">
            <img
              src={
                "https://themebeyond.com/html/nftmak/assets/img/logo/naftmak.svg"
              }
              alt=""
            />
            <div className="h-[31px] w-[4px] rounded-[3px] bg-header_border"></div>
            <div className="flex gap-3 px-2 items-center border border-[#322c50] border-dashed rounded bg-secondary">
              <BiSearch className="text-icon transform -scale-x-100" />
              <input
                type="text"
                className="md:w-[200px] w-[220px] py-2 focus:outline-none bg-transparent text-white placeholder:text-xs"
                placeholder="Search Artwork"
              />
            </div>
          </div>
          <div className="flex items-center md:gap-3 gap-8">
            <ul className="flex gap-8">
              {navLinks?.map((navLink) => (
                <Link to={navLink.link}>
                  <li
                    className="mt-[3px] text-heading_text text-sm tracking-wider cursor-pointer duration-300 hover:text-dark_blue"
                    key={navLink.id}
                  >
                    {navLink.title}
                  </li>
                </Link>
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
                          Market Single
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
                        <Link to={"blog"}>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Our Blog
                          </li>
                        </Link>
                        <li className="hover:text-dark_blue px-2 py-2 duration-300">
                          Blog Details
                        </li>
                      </ul>
                    </div>
                  </span>
                </div>
              </li>
            </ul>
            <div className="transform duration-1000 transition hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
              <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                <button className="px-5 py-3 text-sm font-bold text-heading_text">
                  WALLET CONNECT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
