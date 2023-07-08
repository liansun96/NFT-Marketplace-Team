import React, { useState } from "react";
import {
  FaInstagram,
  FaPinterest,
  FaTimes,
  FaTwitter,
  FaYoutube,
  FaAngleDoubleLeft,
} from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${
        isOpen ? "translate-x-[900px]" : "translate-x-0"
      } transform duration-1000 fixed  inset-0 bg-transparent bg-opacity-25  backdrop-blur-[2px] z-50 overflow-scroll`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={` bg-primary w-[75%] md:w-[40%] min-h-screen ms-auto`}
      >
        <div className="flex flex-col gap-2 py-5">
          <div className="flex justify-between items-center px-6">
            <div className="">
              <img
                src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
                className="h-[40px]"
                alt=""
              />
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              <FaTimes
                className={`${
                  isOpen ? "null" : "rotate-[180deg] duration-[1.5s]"
                } text-heading_text `}
              />
            </div>
          </div>
          <div className="border border-icon_border" />
          <div className="ps-6 pe-1 my-2">
            <p className="text-base font-semibold text-heading_text hover:text-purple duration-500 cursor-pointer">
              <NavLink to={"/"}>Home</NavLink>
            </p>
          </div>
          <div className="border border-icon_border" />
          <div className="ps-6 pe-1 my-2">
            <p className="text-base font-semibold text-heading_text hover:text-purple duration-500 cursor-pointer">
              <NavLink to={"/explore"}>Explore</NavLink>
            </p>
          </div>
          <div className="border border-icon_border" />
          <div className="ps-6 pe-1 my-2">
            <p className="text-base font-semibold text-heading_text hover:text-purple duration-500 cursor-pointer">
              <NavLink to={"/creators"}>Creators</NavLink>
            </p>
          </div>
          <div className="border border-icon_border" />
          <div className="flex justify-between items-center ps-6 pe-2 mt-2">
            <div classNae="">
              <p className="text-base font-semibold text-heading_text hover:text-purple duration-500 cursor-pointer">
                Pages
              </p>
            </div>
            <div
              onClick={() => setShow(!show)}
              className="flex justify-center items-center h-[30px] w-[30px] bg-slate-700 cursor-pointer"
            >
              <HiChevronDown
                className={`${
                  show ? "rotate-90" : "rotate-0"
                } duration-500 text-heading_text text-[15px]`}
              />
            </div>
          </div>
          <div
            className={
              show
                ? "drop h-[355px] scale-y-1 opacity-100 duration-700"
                : "h-0 drop scale-y-0 opacity-0 duration-700"
            }
          >
            <ul className="text-heading_text text-sm tracking-wider space-y-[3px] ms-8">
              <li className="hover:text-dark_blue px-2 py-2 duration-300">
                <NavLink to={"/nftactivity"}>Activity</NavLink>
              </li>
              <li className="hover:text-dark_blue px-2 py-2 duration-300">
                <NavLink to={"/category"}>Category</NavLink>
              </li>
              <li className="hover:text-dark_blue px-2 py-2 duration-300">
                <NavLink to={"/ranking"}>Ranking</NavLink>
              </li>
              <li className="hover:text-dark_blue px-2 py-2 duration-300">
                <NavLink to={"/creators"}>Creators</NavLink>
              </li>              
              <li className="hover:text-dark_blue px-2 py-2 duration-300">
                <NavLink to={"/livebidding"}>Live Bidding</NavLink>
              </li>
              <li className="hover:text-dark_blue px-2 py-2 duration-300">
                <NavLink to={"/createitem"}>Create Item</NavLink>
              </li>
              <li className="hover:text-dark_blue px-2 py-2 duration-300">
                <NavLink to={"/authorprofile"}>Author Profile</NavLink>
              </li>
              <li className="hover:text-dark_blue px-2 py-2 duration-300">
                <NavLink to={"/loginandregister"}>Login & Register</NavLink>
              </li>
            </ul>
          </div>
          <div className="border border-icon_border" />
          <div className="flex justify-between items-center ps-6 pe-2 mt-2">
            <div classNae="">
              <p className="text-base font-semibold text-heading_text hover:text-purple duration-500 cursor-pointer">
                Blog
              </p>
            </div>
            <div
              onClick={() => setShow1(!show1)}
              className="flex justify-center items-center h-[30px] w-[30px] bg-slate-700 cursor-pointer"
            >
              <HiChevronDown
                className={`${
                  show1 ? "rotate-90" : "rotate-0"
                } duration-500 text-heading_text text-[15px]`}
              />
            </div>
          </div>
          <div
            className={
              show1
                ? "drop h-[80px] scale-y-1 duration-500"
                : "h-0 drop scale-y-0 duration-500"
            }
          >
            <ul className="text-heading_text text-sm tracking-wider space-y-[3px] ms-8">
              <li className="hover:text-dark_blue px-2 py-2 duration-300">
                <NavLink to={"/blog"}>Our Blog</NavLink>
              </li>
              <li className="hover:text-dark_blue px-2 py-2 duration-300">
                <NavLink to={"/blogdetail"}>Blog Details</NavLink>
              </li>
            </ul>
          </div>
          <div className="border border-icon_border" />
          <div className="flex justify-between items-center gap-3 mt-4 px-8">
            <div className="flex justify-center items-center h-[40px] w-[40px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaTwitter className="text-heading_text" />
            </div>
            <div className="flex justify-center items-center h-[40px] w-[40px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaFacebookF className="text-heading_text" />
            </div>
            <div className="flex justify-center items-center h-[40px] w-[40px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaPinterest className="text-heading_text" />
            </div>
            <div className="flex justify-center items-center h-[40px] w-[40px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaInstagram className="text-heading_text" />
            </div>
            <div className="flex justify-center items-center h-[40px] w-[40px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaYoutube className="text-heading_text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
