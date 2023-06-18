import React from "react";
import {TiPlus} from "react-icons/ti"
import {RiShareFill} from "react-icons/ri"

const TopSellerCard = ({topSeller}) => {
  return (
    <div className="flex justify-center items-center lg:w-[260px] 2xl:w-[300px] 3xl:w-[370px] h-[120px] bg-primary border-[3px] duration-300 border-dark_blue hover:border-purple rounded-xl">
      <div className="w-[40%]">
        <img
          className="w-16 h-16 mx-auto rounded-full"
          src={topSeller.image}
          alt=""
        />
      </div>
      <div className="w-[60%] space-y-1 cursor-pointer">
        <h5 className="text-lg font-bold text-heading_text">{topSeller.name}</h5>
        <p className="text-body_text text-sm">
          {topSeller.price} <span className="duration-300 text-purple hover:text-dark_blue">Eth</span>
        </p>
        <div className="flex gap-2">
            <div className="w-7 h-7 flex justify-center items-center duration-300 border  border-header_border hover:border-purple">
             <TiPlus className="text-icon font-bold hover:text-purple"/>
            </div>
            <div className="w-7 h-7 flex justify-center items-center duration-300 border border-header_border hover:border-purple">
             <RiShareFill className="text-icon font-bold hover:text-purple"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellerCard;
