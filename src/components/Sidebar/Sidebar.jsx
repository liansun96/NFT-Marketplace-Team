import React, { useState } from "react";
import appsDelete from "../../icons/apps-delete.svg";
import bookAlt from "../../icons/book-alt.svg";
import butterfly from "../../icons/butterfly.svg";
import capming from "../../icons/camping.svg";
import crown from "../../icons/crown.svg";
import settings from "../../icons/settings.svg";
import toolMarquee from "../../icons/tool-marquee.svg";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  const [fullScreen, setFullScreen] = useState(false);

  const handleFullScreenClick = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const handleExitFullScreenClick = () => {
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const toggleFullScreen = () => {
    if (fullScreen) {
      handleFullScreenClick();
      setFullScreen(!fullScreen);
    } else {
      handleExitFullScreenClick();
      setFullScreen(!fullScreen);
    }
  };

  return (
    <div className="flex flex-row md:justify-center md:flex-col px-6 w-screen h-[90px] lg:w-[110px] lg:h-screen bg-primary  fixed -bottom-2 lg:top-0 left-0 custom-shadow z-10 overflow-x-scroll">
      <ul className="flex flex-row gap-4 md:gap-7 md:justify-between md:mt-2 items-center lg:flex-col lg:gap-6 lg:mt-6">
        <img
          className="block md:hidden h-10 md:w-7 lg:mt-4"
          src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
          alt=""
        />

        <li>
          <Link to={"/"}>
            <img
              className="hidden md:block md:w-7 lg:mt-4 mx-auto"
              src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
              alt=""
            />
          </Link>
        </li>
        <li>
          <div className="sidebar-link w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <NavLink to={"/"}>
              <img className="w-6 md:w-8 " src={appsDelete} alt="" />
            </NavLink>
          </div>
        </li>
        <li>
          <div className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <NavLink to={"/explore"}>
              <img className="w-6 md:w-8 " src={bookAlt} alt="" />
            </NavLink>
          </div>
        </li>
        <div className="hidden lg:block mx-auto  lg:w-[30px] lg:py-[3px] bg-secondary rounded-[3px]"></div>
        <li>
          <div className="block lg:hidden mx-auto h-[30px] px-[3px] lg:w-[30px] lg:py-[3px] bg-secondary rounded-[3px]"></div>
        </li>
        <li>
          <div className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <NavLink to={"/nftactivity"}>
              <img className="w-6 md:w-8 " src={butterfly} alt="" />
            </NavLink>
          </div>
        </li>
        <li>
          <div className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <NavLink to={"/marketsingle"}>
              <img className="w-6 md:w-8 " src={capming} alt="" />
            </NavLink>
          </div>
        </li>
        <li>
          <div className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <NavLink to={"/authorprofile"}>
              <img className="w-6 md:w-8 " src={crown} alt="" />
            </NavLink>
          </div>
        </li>
        <li>
          <div className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary">
            <NavLink to={"/loginandregister"}>
              <img className="w-6 md:w-8 " src={settings} alt="" />
            </NavLink>
          </div>
        </li>
        <li className="me-5 md:ms-[60px] lg:ms-0 lg:me-0 lg:!mt-[30px]">
          <div
            onClick={toggleFullScreen}
            className="w-[50px] md:w-[55px] rounded-[9px] border border-icon_border p-3 transition ease-out hover:icon-bg bg-secondary"
          >
            <img className="w-6 md:w-8 " src={toolMarquee} alt="" />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
