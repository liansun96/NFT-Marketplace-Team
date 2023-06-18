import React from 'react'
import appsDelete from "../icons/apps-delete.svg";
import bookAlt from "../icons/book-alt.svg";
import butterfly from "../icons/butterfly.svg";
import capming from "../icons/camping.svg";
import crown from "../icons/crown.svg";
import settings from "../icons/settings.svg";
import toolMarquee from "../icons/tool-marquee.svg";

const Navmb = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <div className="flex items-center gap-4 p-4 bg-primary ">
            <div className="">
                <img src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png" className='h-[30px]' alt="" />
            </div>
            <div className="flex justify-center items-center rounded-lg bg-media_bg h-[30px] w-[30px] shadow-lg hover:bg-secondary border border-icon_border duration-300">
                <img src={appsDelete} className='h-[15px]' alt="" />
            </div>
            <div className="flex justify-center items-center rounded-lg bg-media_bg h-[30px] w-[30px] shadow-lg hover:bg-secondary border border-icon_border duration-300">
                <img src={bookAlt} className='h-[15px]' alt="" />
            </div>
            <div className="">
                <p className='text-secondary'>|</p>
            </div>
            <div className="flex justify-center items-center rounded-lg bg-media_bg h-[30px] w-[30px] shadow-lg hover:bg-secondary border border-icon_border duration-300">
                <img src={butterfly} className='h-[15px]' alt="" />
            </div>
            <div className="flex justify-center items-center rounded-lg bg-media_bg h-[30px] w-[30px] shadow-lg hover:bg-secondary border border-icon_border duration-300">
                <img src={capming} className='h-[15px]' alt="" />
            </div>
            <div className="flex justify-center items-center rounded-lg bg-media_bg h-[30px] w-[30px] shadow-lg hover:bg-secondary border border-icon_border duration-300">
                <img src={crown} className='h-[15px]' alt="" />
            </div>
            <div className="flex justify-center items-center rounded-lg bg-media_bg h-[30px] w-[30px] shadow-lg hover:bg-secondary border border-icon_border duration-300">
                <img src={settings} className='h-[15px]' alt="" />
            </div>
            <div className="flex justify-center items-center rounded-lg bg-media_bg h-[30px] w-[30px] shadow-lg hover:bg-secondary border border-icon_border duration-300">
                <img src={toolMarquee} className='h-[15px]' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navmb