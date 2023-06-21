import React from "react";
import './Pagination.css'

const PopularCard = ({ creator }) => {
  return (
    <div className="flex flex-col gap-4 px-5 py-4  bg-primary rounded-xl shadow-lg items-center relative">
      <div className="absolute top-3 right-3">
        <img
          className="h-[15px]"
          src="https://themebeyond.com/html/nftmak/assets/img/icons/start.png"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center bg-gradient-to-r from-[#cc42e4] to-[#6345ed] w-[110px] h-[110px] rounded-full">
        <div className="">
          <img src={creator?.profile} alt="" />
        </div>
      </div>
      <div className="text-center">
        <h5 className="text-heading_text font-semibold text-lg">
          {creator?.name}
        </h5>
        <p className="text-purple text-xs font-semibold">{creator?.price}</p>
      </div>
      <div className="transform duration-1000 transition hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
        <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl px-3">
          <button className="px-6 py-2 text-sm font-bold text-heading_text">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
