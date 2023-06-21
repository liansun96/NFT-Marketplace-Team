import React from "react";
import { TiFilter } from "react-icons/ti";
import BrowserCard from "./BrowserCard";
import { browsers } from "./CollectionImage/Image";

const BrowserByCategory = () => {
  return (
    <div className="bg-warning">
      <div className="w-[90%] md:w-[85%] lg:w-[90%] 3xl:w-[70%] 4xl:w-[60%] mx-auto">
        <div className="pt-20">
        <div className="flex flex-col md:flex-row gap-5  justify-between items-start md:items-center">
        <div className="flex items-center gap-2">
            <h1 className="font-semibold text-2xl text-heading_text">
              Browser by category
            </h1>
            <div className="">
              <img
                className="h-[35px]"
                src="	https://themebeyond.com/html/nftmak/assets/img/icons/title_icon02.png"
                alt=""
              />
            </div>
          </div>
          <div className="transform  transition hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
            <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
              <div className="flex items-center gap-1 px-7 py-2 ">
                <TiFilter className="text-heading_text text-xl transform -scale-x-100" />
                <div className="">
                  <button className="text-sm font-bold text-heading_text">
                    EXPLORE MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="flex flex-col lg:flex-row gap-5 mt-10 pb-20">
            {browsers?.map((browser) => (
              <BrowserCard key={browser?.id} browser={browser} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserByCategory;
