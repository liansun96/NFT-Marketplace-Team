import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { BsCalendar2WeekFill } from "react-icons/bs";

const LatestNewsUpdateCard = ({ latestUpd }) => {
  return (
    <div className="h-fit md:w-[330px] overflow-hidden group rounded-md relative">
      <img
        src={latestUpd.bgImage}
        className="duration-1000 group-hover:scale-105 -z-[10005]"
        alt=""
      />
      <div className="bg-thumb-shadow absolute left-5 bottom-5 w-[90%] rounded-md bg-gradient-to-b from-red-600 via-primary to-secondary p-1">
        <div className="h-full bg-secondary space-y-4 p-5">
          <div className="flex justify-start items-center gap-4 ">
            <div className="flex items-center gap-2">
              <HiUserCircle className="text-icon text-2xl" />
              <p className="text-body_text text-sm font-bold">
                {latestUpd.name}
              </p>
            </div>
            <div className="h-[20px] w-[4px] rounded-[3px] bg-header_border"></div>
            <div className="flex items-center gap-2">
              <BsCalendar2WeekFill className="text-icon text-xl" />
              <p className="text-body_text text-sm font-bold">
                {latestUpd.date}
              </p>
            </div>
          </div>
          <div className="border border-header_border"></div>
          <div className="space-y-4">
            <h6 className="text-heading_text text-lg font-semibold cursor-pointer duration-500 hover:text-purple">
              {latestUpd.title}
            </h6>
            <div className="w-[140px] ms-auto transform duration-1000 transition hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">              <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                <button className="px-5 py-2 text-sm font-bold text-heading_text">
                  PLACE A BID
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsUpdateCard;
