import React from "react";
import { latestNewsUpdate } from "../../constants/index";
import LatestNewsUpdateCard from "./LatestNewsUpdateCard";

const LatestNewsUpdate = () => {
  return (
    <div className="bg-[#070b24] h-auto flex items-center py-20">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <h4 className="text-heading_text text-2xl font-semibold">
            Latest News Update
          </h4>
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/icons/title_icon01.png"
            alt="explore-product-image"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6">
          {latestNewsUpdate?.map((latestUpd) => (
            <LatestNewsUpdateCard key={latestUpd.id} latestUpd={latestUpd} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsUpdate;
