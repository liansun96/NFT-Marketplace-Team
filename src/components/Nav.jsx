import React from "react";
import { BiSearch } from "react-icons/bi";
import { navLinks } from "../constants/index";

const Nav = () => {
  return (
    <div className="w-[90%] mx-auto border border-slate-900 relative top-8 p-[7px] rounded-xl">
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
                className="w-[220px] py-2 focus:outline-none bg-transparent text-white placeholder:text-xs"
                placeholder="Search Artwork"
              />
            </div>
          </div>
          <div className="flex items-center gap-10">
            <ul className="flex gap-8">
              {navLinks?.map((navLink) => (
                <li className="text-heading_text text-sm tracking-wider cursor-pointer duration-500 hover:text-dark_blue" key={navLink.id}>
                  {navLink.title}
                </li>
              ))}
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
