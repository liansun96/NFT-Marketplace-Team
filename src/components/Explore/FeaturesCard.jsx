import React from "react";
import { AiFillHeart } from "react-icons/ai";

const FeaturesCard = ({ feature }) => {
  return (
    <div className=" bg-primary rounded-xl shadow-lg p-5">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-5">
          <div className="cursor-pointer">
            <img src={feature?.profile} alt="" />
          </div>
          <div className="flex-col">
            <h1 className="font-semibold text-heading_text text-lg hover:text-purple cursor-pointer">
              {feature?.title}
            </h1>
            <p className="text-sm text-body_text">
              Created by{" "}
              <span className="font-semibold text-heading_text hover:text-purple cursor-pointer">
                {feature?.name}
              </span>
            </p>
          </div>
        </div>
        <div className="group flex items-center gap-1 bg-info px-2 py-2 rounded-lg cursor-pointer">
          <div className="">
            <AiFillHeart className="text-icon text-lg group-hover:text-purple  transition duration-300" />
          </div>
          <p className="font-semibold text-heading_text text-sm">100</p>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <div className="">
          <img src={feature?.image1} className="md:w-[302px]" alt="" />
        </div>
        <div className="flex flex-col justify-between gap-3 items-center">
          <div className="flex items-center gap-3">
            <div>
              <img src={feature?.image2} className="md:w-[150px]" alt="" />
            </div>
            <div>
              <img src={feature?.image3} className="md:w-[150px]" alt="" />
            </div>
          </div>
          <div className="">
            <img src={feature?.image4} className="md:w-[295px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
