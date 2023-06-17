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
    <div className="flex flex-row md:flex-col px-6 py-3 w-screen h-[90px] md:w-[110px] md:h-screen bg-primary  fixed -bottom-2 md:top-0 left-0 custom-shadow z-10 overflow-x-scroll">
      <ul className="flex flex-row gap-4 md:justify-center items-center md:flex-col md:gap-6 md:mt-6">
        <img
          className="block md:hidden h-10 md:w-7 md:mt-4"
          src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
          alt=""
        />
        <li>
          <img
            className="hidden md:block md:w-7 md:mt-4 mx-auto"
            src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
            alt=""
          />
        </li>
        <li>
          <div className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <img className="w-6 md:w-8 " src={appsDelete} alt="" />
          </div>
        </li>
        <li>
          <div className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <img className="w-6 md:w-8 " src={bookAlt} alt="" />
          </div>
        </li>
        <div className="hidden md:block mx-auto ms-3 md:w-[30px] md:py-[3px] bg-secondary rounded-[3px]"></div>
        <div className="block md:hidden mx-auto h-[30px] px-[3px] bg-secondary rounded-[3px]"></div>
        <li>
          <div className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <img className="w-6 md:w-8 " src={butterfly} alt="" />
          </div>
        </li>
        <li>
          <div className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <img className="w-6 md:w-8 " src={capming} alt="" />
          </div>
        </li>
        <li>
          <div className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <img className="w-6 md:w-8 " src={crown} alt="" />
          </div>
        </li>
        <li>
          <div className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <img className="w-6 md:w-8 " src={settings} alt="" />
          </div>
        </li>
        <li className="me-5 md:me-0 md:!mt-[60px]">
          <div className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <img className="w-6 md:w-8 " src={toolMarquee} alt="" />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
