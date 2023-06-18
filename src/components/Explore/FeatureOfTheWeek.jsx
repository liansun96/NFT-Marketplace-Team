import React from "react";
import { features } from "./ExploreImage/Contacts";
import FeaturesCard from "./FeaturesCard";

const FeatureOfTheWeek = () => {
  return (
    <div className="bg-warning">
      <div className="w-[90%] 3xl:w-[70%] 4xl:w-[60%] mx-auto p-3">
        <div className="pt-20">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-2xl text-heading_text  animate__animated animate__bounce ">
              Features of the week
            </h1>
            <div className="">
              <img
                className="h-[35px]"
                src="	https://themebeyond.com/html/nftmak/assets/img/icons/title_icon02.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 mt-10 pb-20">
            {features?.map((feature) => (
              <FeaturesCard  key={feature?.id} feature={feature}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureOfTheWeek;
