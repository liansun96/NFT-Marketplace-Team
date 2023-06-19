import React from "react";
import { abouts } from "../../constants/index";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiFolderDownload , HiCloudDownload } from "react-icons/hi";
import {RiSettings4Fill} from "react-icons/ri"

const About = () => {
  return (
    <div className="bg-[#070b24] flex items-center">
      <div className="w-[90%] 3xl:w-[70%] 4xl:w-[55%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-2 mb-6">
          <div className="relative duration-700 hover:-translate-y-5 lg:w-[260px] 2xl:w-[300px] h-[180px] bg-primary rounded-xl p-7 space-y-5">
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-purple">
              <HiFolderDownload className="text-xl text-white" />
            </div>
            <div className="">
              <h5 className="text-xl font-bold text-heading_text">Free</h5>
              <p className="text-body_text text-sm tracking-wider font-light">
                only two download
              </p>
            </div>
            <HiFolderDownload className="text-8xl text-[#171429] absolute -top-4 right-4" />
          </div>
          <div className="relative duration-700 hover:-translate-y-5 lg:w-[260px] 2xl:w-[300px] h-[180px] bg-primary rounded-xl p-7 space-y-5">
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-purple">
              <HiCloudDownload className="text-xl text-white" />
            </div>
            <div className="">
              <h5 className="text-xl font-bold text-heading_text">Unlimited</h5>
              <p className="text-body_text text-sm tracking-wider font-light">
                Personal & commercial use
              </p>
            </div>
            <HiCloudDownload className="text-8xl text-[#171429] absolute -top-4 right-4" />
          </div>
          <div className="relative duration-700 hover:-translate-y-5 lg:w-[260px] 2xl:w-[300px] h-[180px] bg-primary rounded-xl p-7 space-y-5">
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-purple">
              <HiChatBubbleLeftRight className="text-xl text-white" />
            </div>
            <div className="">
              <h5 className="text-xl font-bold text-heading_text">Unlimited</h5>
              <p className="text-body_text text-sm tracking-wider font-light">
                You can download
              </p>
            </div>
            <HiChatBubbleLeftRight className="text-8xl text-[#171429] absolute -top-4 right-4" />
          </div>
          <div className="relative duration-700 hover:-translate-y-5 lg:w-[260px] 2xl:w-[300px] h-[180px] bg-primary rounded-xl p-7 space-y-5">
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-purple">
              <RiSettings4Fill className="text-xl text-white" />
            </div>
            <div className="">
              <h5 className="text-xl font-bold text-heading_text">Pravite</h5>
              <p className="text-body_text text-sm tracking-wider font-light">
                Personal data collection
              </p>
            </div>
            <RiSettings4Fill className="text-8xl text-[#171429] absolute -top-4 right-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
