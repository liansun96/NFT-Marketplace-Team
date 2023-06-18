import React from "react";
import appsDelete from "../icons/apps-delete.svg";
import bookAlt from "../icons/book-alt.svg";
import butterfly from "../icons/butterfly.svg";
import capming from "../icons/camping.svg";
import crown from "../icons/crown.svg";
import settings from "../icons/settings.svg";
import toolMarquee from "../icons/tool-marquee.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    // <div className="flex py-4 z-50 bg-primary w-full justify-around fixed overflow-scroll  bottom-0">
    <div className=" sm:overflow-y-auto justify-start flex sm:block z-50 sm:justify-start bottom-0 overflow-x-auto px-6 py-4 sm:py-3 w-full sm:w-[110px] bg-primary sm:h-screen fixed  sm:top-0 sm:left-0">
      <img
        className=" h-[45px] px-0 my-auto sm:mx-auto sm:mt-10"
        // className="w-7 mt-10  mx-auto"
        src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
        alt=""
      />

      <div>
        {/* <ul className=" ms-7 items-center w-screen gap-5 flex"> */}
        <ul className=" sm:space-y-6 ms-7 sm:ms-0 items-center flex sm:block gap-5 sm:gap-0 sm:items-start sm:mt-6">
          <li>
            <div className="w-[55px] sm:mx-auto rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={appsDelete} alt="" />
            </div>
          </li>
          <li>
            <div className="w-[55px] sm:mx-auto rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={bookAlt} alt="" />
            </div>
          </li>
          <div className="sm:mx-auto  hidden sm:block sm:w-[50px] sm:py-[3px] sm:bg-secondary sm:rounded-[3px]"></div>
          <li>
            <div className="w-[55px] sm:mx-auto rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={butterfly} alt="" />
            </div>
          </li>
          <li>
            <div className="w-[55px] sm:mx-auto rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={capming} alt="" />
            </div>
          </li>
          <li>
            <div className="w-[55px] sm:mx-auto rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={crown} alt="" />
            </div>
          </li>
          <li>
            <div className="w-[55px] sm:mx-auto rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={settings} alt="" />
            </div>
          </li>
          <li className="">
          {/* <li className="sm:!mt-[80px]"> */}
            <div className="w-[55px] sm:mx-auto rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={toolMarquee} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
