import React from "react";
import { IoMdHeart } from "react-icons/io";

const AuthCard = ({ card }) => {
  return (
    <div className="flex flex-col gap-4 px-5 py-4  bg-primary rounded-xl shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer text-sm font-semibold">
          <div className="">
            <img src={card?.profile} alt="" />
          </div>
          <p className="text-purple">
            By <span className="text-slate-500">Jonson</span>
          </p>
        </div>
        <div className="flex item gap-1">
          <div className="w-[11px] h-[11px] rounded-full bg-slate-700"></div>
          <div className="w-[11px] h-[11px] rounded-full bg-slate-500"></div>
          <div className="w-[11px] h-[11px] rounded-full bg-slate-300"></div>
        </div>
      </div>
      <div className="">
        <img
          src={card?.image}
          className="md:w-[270px] lg:w-[220px] 2xl:w-[245px] 3xl:w-[255px] rounded-lg"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center py-2">
        <h5 className="font-semibold text-heading_text cursor-pointer">
          {card?.title}
        </h5>
        <p className="text-body_text text-sm">
          {card?.price}
          {"  "}
          <span className="duration-300 text-purple hover:text-dark_blue">
            Eth
          </span>
        </p>
      </div>
      <hr className=" border-header_border" />
      <div className="flex justify-between items-center">
        <div className="transform duration-1000 transition hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
          <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
            <button className="px-6 py-2 text-sm font-bold text-heading_text">
              PLACE A BID
            </button>
          </div>
        </div>
        <div className="group flex items-center gap-2 cursor-pointer">
          <IoMdHeart className="text-icon duration-300 group-hover:text-purple" />{" "}
          <span className="text-body_text text-sm font-bold">59</span>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
