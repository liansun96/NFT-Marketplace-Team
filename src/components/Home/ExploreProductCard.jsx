import React from "react";
import { IoMdHeart } from "react-icons/io";

const ExploreProductCard = ({explordPd}) => {
  return (
    <div className="lg:w-[260px] lg:h-[390px] 2xl:w-[290px] 2xl:h-[430px] 3xl:w-[330px] h-[430px] p-5  bg-primary rounded-xl space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-7 h-7 rounded-full"
            src={explordPd.profile}
            alt=""
          />
          <p className="font-bold text-sm text-slate-500">By Jonson</p>
        </div>
        <div className="flex item gap-1">
          <div className="w-[11px] h-[11px] rounded-full bg-slate-700"></div>
          <div className="w-[11px] h-[11px] rounded-full bg-slate-500"></div>
          <div className="w-[11px] h-[11px] rounded-full bg-slate-300"></div>
        </div>
      </div>
      <img
        className="rounded-xl"
        src={explordPd.image}
        alt=""
      />
      <div className="flex justify-between items-center">
        <h5 className="text-lg font-bold text-heading_text">{explordPd.title}</h5>
        <p className="text-body_text text-sm">
          {explordPd.price}{"  "}
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

export default ExploreProductCard;
