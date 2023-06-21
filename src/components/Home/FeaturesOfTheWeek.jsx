import React from "react";
import FeaturesCard from "./FeaturesCard.jsx";
import { features } from "../../constants";
const FeaturesOfTheWeek = () => {
  return (
    <div className="bg-secondary">
      <div className="w-[90%] md:w-[85%] lg:w-[90%] 3xl:w-[70%] 4xl:w-[55%] mx-auto p-3">
        <div className="pt-20">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-2xl text-heading_text">
              Features of the week
            </h1>
            <div className="">
              <img
                className="h-[35px]"
                src="   https://themebeyond.com/html/nftmak/assets/img/icons/title_icon02.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col lg:justify-between lg:flex-row gap-5 mt-10 pb-20">
            {features?.map((feature) => (
              <FeaturesCard  key={feature?.id} feature={feature}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTheWeek;