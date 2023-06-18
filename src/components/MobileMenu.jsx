import React from "react";
import { FaInstagram, FaPinterest, FaTimes, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
const MobileMenu = ({isOpen,setIsOpen}) => {
  return (
    <div onClick={()=>setIsOpen(!isOpen)} className={`${isOpen ? "translate-x-[500px]" : "translate-x-0"} transform duration-1000 fixed  inset-0 bg-transparent bg-opacity-25  backdrop-blur-[2px] z-10`}>
      <div onClick={(e) => e.stopPropagation()}className={` bg-primary w-[75%] h-screen ms-auto`}>
        <div className="flex flex-col gap-3 py-5">
          <div className="flex justify-between items-center px-4">
            <div className="">
              <img
                src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
                className="h-[30px]"
                alt=""
              />
            </div>
            <div onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer">
              <FaTimes className={`${isOpen ? "null" : "rotate-[180deg] duration-[1.5s]"} text-heading_text `} />
            </div>
          </div>
          <div className="border border-icon_border" />
          <div className="ps-4 pe-1">
            <p className="text-[10px] font-semibold text-heading_text hover:text-purple duration-500 cursor-pointer">
              Home
            </p>
          </div>
          <div className="border border-icon_border" />
          <div className="ps-4 pe-1">
            <p className="text-[10px] font-semibold text-heading_text hover:text-purple duration-500 cursor-pointer">
              Explore
            </p>
          </div>
          <div className="border border-icon_border" />
          <div className="ps-4 pe-1">
            <p className="text-[10px] font-semibold text-heading_text hover:text-purple duration-500 cursor-pointer">
              Collection
            </p>
          </div>
          <div className="border border-icon_border" />
          <div className="flex justify-between items-center ps-4 pe-2">
            <div className="">
              <p className="text-[10px] font-semibold text-heading_text hover:text-purple duration-500 cursor-pointer">
                Pages
              </p>
            </div>
            <div className="flex justify-center items-center h-[25px] w-[25px] bg-slate-700 cursor-pointer">
              <HiChevronDown className="text-heading_text text-[15px]" />
            </div>
          </div>
          <div className="border border-icon_border" />
          <div className="flex justify-between items-center ps-4 pe-2">
            <div className="">
              <p className="text-[10px] font-semibold text-heading_text hover:text-purple duration-500 cursor-pointer">
                Blog
              </p>
            </div>
            <div className="flex justify-center items-center h-[25px] w-[25px] bg-slate-700 cursor-pointer">
              <HiChevronDown className="text-heading_text text-[15px]" />
            </div>
          </div>
          <div className="border border-icon_border" />
          <div className="flex items-center gap-3 px-4">
            <div className="flex justify-center items-center h-[30px] w-[30px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaTwitter className="text-heading_text text-xs"/>
            </div>
            <div className="flex justify-center items-center h-[30px] w-[30px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaFacebookF className="text-heading_text text-xs"/>
            </div>
            <div className="flex justify-center items-center h-[30px] w-[30px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaPinterest className="text-heading_text text-xs"/>
            </div>
            <div className="flex justify-center items-center h-[30px] w-[30px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaInstagram className="text-heading_text text-xs"/>
            </div>
            <div className="flex justify-center items-center h-[30px] w-[30px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaYoutube className="text-heading_text text-xs"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;