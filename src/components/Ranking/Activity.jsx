import React from "react";
import { ImBug } from "react-icons/im";
import { FaCrown } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";
import { TbBrandSnowflake } from "react-icons/tb";
import { IoIosTennisball } from "react-icons/io";
import { GiTrade } from "react-icons/gi";
import AllActivityTable from "./AllActivityTable";

const Activity = () => {
  return (
    <div className="h-min bg-dark py-20">
      <div className="flex flex-col-reverse lg:flex-row items-start gap-5 w-[90%] 3xl:w-[70%] 4xl:w-[55%] mx-auto">
        <div className="w-full lg:w-[25%] space-y-4 mt-10 lg:mt-0">
          <div className="group flex items-center justify-start p-5 gap-4 bg-primary border border-header_border w-full h-[85px] rounded-xl">
            <ImBug className="text-icon text-4xl duration-300 group-hover:text-purple" />
            <div className=" ">
              <h6 className="text-lg font-bold text-heading_text">
                Domain Names
              </h6>
              <p className="text-body_text text-xs tracking-wider font-light">
                find your website name
              </p>
            </div>
          </div>
          <div className="group flex items-center justify-start p-5 gap-4 bg-primary border border-header_border w-full h-[85px] rounded-xl">
            <FaCrown className="text-icon text-4xl duration-300 group-hover:text-purple" />
            <h6 className="text-lg font-bold text-heading_text">Collections</h6>
          </div>
          <div className="group flex items-center justify-start p-5 gap-4 bg-primary border border-header_border w-full h-[85px] rounded-xl">
            <MdPhotoLibrary className="text-icon text-4xl duration-300 group-hover:text-purple" />
            <h6 className="text-lg font-bold text-heading_text">Photography</h6>
          </div>
          <div className="group flex items-center justify-start p-5 gap-4 bg-primary border border-header_border w-full h-[85px] rounded-xl">
            <TbBrandSnowflake className="text-icon text-4xl duration-300 group-hover:text-purple" />
            <h6 className="text-lg font-bold text-heading_text">
              Virtual Worlds
            </h6>
          </div>
          <div className="group flex items-center justify-start p-5 gap-4 bg-primary border border-header_border w-full h-[85px] rounded-xl">
            <IoIosTennisball className="text-icon text-4xl duration-300 group-hover:text-purple" />
            <h6 className="text-lg font-bold text-heading_text">Sports</h6>
          </div>
          <div className="group flex items-center justify-start p-5 gap-4 bg-primary border border-header_border w-full h-[85px] rounded-xl">
            <GiTrade className="text-icon text-4xl duration-300 group-hover:text-purple" />
            <h6 className="text-lg font-bold text-heading_text">
              Trading Cards
            </h6>
          </div>
        </div>
        <div className="w-full lg:w-[75%]">
          <div className="flex flex-col md:flex-row items-center justify-around lg:justify-between p-5 lg:px-20 lg:p-10 h-min lg:h-[200px]  mx-auto rounded-[13px] activity-bg">
            <div className="">
              <img
                src="https://themebeyond.com/html/nftmak/assets/img/others/welcome_img02.png"
                alt="welcome-img"
                className="lg:mb-16"
              />
            </div>
            <div className="text-center lg:text-start space-y-4">
              <h3 className="text-xl lg:text-3xl text-heading_text font-bold md:tracking-wide leading-[30px] md:leading-[60px]">
                Welcome To NFT Activity
              </h3>
              <p className="text-text_secondary font-semibold">
                The top NFTs on Nftmar, ranked by volume, floor price and
                <br className="hidden lg:block" />
                other <span className="text-purple">statistics.</span>
              </p>
            </div>
          </div>
          <AllActivityTable/>
        </div>
      </div>
    </div>
  );
};

export default Activity;
