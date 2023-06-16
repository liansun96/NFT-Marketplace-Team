import React from "react";
import appsDelete from "../icons/apps-delete.svg";
import bookAlt from "../icons/book-alt.svg";
import butterfly from "../icons/butterfly.svg";
import capming from "../icons/camping.svg";
import crown from "../icons/crown.svg";
import settings from "../icons/settings.svg";
import toolMarquee from "../icons/tool-marquee.svg";

const Sidebar = () => {
  return (
    <div className="hidden lg:block px-6 py-3 w-[110px] bg-primary h-screen fixed top-0 left-0">
      <div>
        <img
          className="w-7 mt-10  mx-auto"
          src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
          alt=""
        />
      </div>

      <div>
        <ul className="space-y-6 mt-6">
          <li>
            <div className="w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={appsDelete} alt="" />
            </div>
          </li>
          <li>
            <div className="w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={bookAlt} alt="" />
            </div>
          </li>
          <div className="mx-auto ms-3 w-[30px] py-[3px] bg-secondary rounded-[3px]"></div>
          <li>
            <div className="w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={butterfly} alt="" />
            </div>
          </li>
          <li>
            <div className="w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={capming} alt="" />
            </div>
          </li>
          <li>
            <div className="w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={crown} alt="" />
            </div>
          </li>
          <li>
            <div className="w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={settings} alt="" />
            </div>
          </li>
          <li className="!mt-[80px]">
            <div className="w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
              <img className="w-8 " src={toolMarquee} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
