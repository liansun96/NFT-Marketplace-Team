import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { navLinks } from "../constants/index";
import { Animated } from "react-animated-css";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-[90%] 3xl:w-[70%] 4xl:w-[55%] mx-auto border border-slate-800  p-[7px] rounded-xl relative">
      <div className="py-4 bg-primary  rounded-lg">
        <div className="flex justify-between items-center px-6">
          <div className="flex items-center gap-6">
            <img
              src={
                "https://themebeyond.com/html/nftmak/assets/img/logo/naftmak.svg"
              }
              alt=""
            />
            <div className="h-[31px] w-[4px] rounded-[3px] bg-header_border hidden md:block"></div>
            <div className="hidden md:block">
              <div className="flex gap-3 px-2 items-center border border-[#322C50] border-dashed rounded bg-secondary">
                <BiSearch className="text-icon transform -scale-x-100" />
                <input
                  type="text"
                  className="md:w-[200px] w-[220px] py-2 focus:outline-none bg-transparent text-white placeholder:text-xs"
                  placeholder="Search Artwork"
                />
              </div>
            </div>
            <div onClick={() => setIsOpen(!isOpen)}>
              <HiMenuAlt3 className="block md:hidden cursor-pointer text-white text-4xl ms-32" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center md:gap-3 gap-8">
              <ul className="flex gap-8">
                {navLinks?.map((navLink) => (
                  <li
                    className="mt-[3px] text-heading_text text-sm tracking-wider cursor-pointer duration-300 hover:text-dark_blue"
                    key={navLink.id}
                  >
                    <NavLink to={navLink.link}>{navLink.title}</NavLink>
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
                    <span className="group-hover:animate__fadeInUp group-hover:block hidden cursor-pointer w-[260px] py-7 z-10 absolute top-5 -left-4">
                      <div className="bg-primary border border-header_border custom-shoadow-lg px-3 py-4">
                        <ul className="text-heading_text text-sm tracking-wider space-y-[3px]">
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            <NavLink to={"/marketsingle"}>
                              Market Single
                            </NavLink>
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Activity
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            <NavLink to={"/category"}>
                              Category
                            </NavLink>
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Ranking
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Creators
                          </li>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Live Bidding
                          </li>
                          <Link to={"/create"}>
                            <li className="hover:text-dark_blue px-2 py-2 duration-300">
                              Create Item
                            </li>
                          </Link>
                          <li className="hover:text-dark_blue px-2 py-2 duration-300">
                            Author Profile
                          </li>
                          <NavLink to={"/loginandregister"}>
                            <li className="hover:text-dark_blue px-2 py-2 duration-300">
                              Login & Register
                            </li>
                          </NavLink>
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
                          <Link to={"/blog"}>
                            <li className="hover:text-dark_blue px-2 py-2 duration-300">
                              Our Blog
                            </li>
                          </Link>
                          <Link to={"/blog-detail"}>
                            <li className="hover:text-dark_blue px-2 py-2 duration-300">
                              Blog Details
                            </li>
                          </Link>
                        </ul>
                      </div>
                    </span>
                  </div>
                </li>
              </ul>
              <div className="transform duration-1000 transition hover:bg-gradient-to-l from-[#CC42E4] to-[#6345ED] bg-gradient-to-r p-1 rounded-full">
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
      <div className="absolute top-0 right-0 block md:hidden">
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
export default Nav;
