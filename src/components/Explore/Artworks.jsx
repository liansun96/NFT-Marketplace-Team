import React from "react";
import { TiFilter } from "react-icons/ti";
import "./Switch/Switch.css";
import { artworks } from "./ExploreImage/Contacts";
import ArtworkCard from "./ArtworkCard";

const Artworks = ({ isToggle, onToggle }) => {
  return (
    <div className="bg-info">
      <div className="px-3 pt-10 md:px-5 md:pt-10 lg:p-16  3xl:w-[70%] mx-auto">
        <div className="flex gap-2 items-center ">
          <h1 className="text-2xl font-semibold  text-heading_text">
            Artworks
          </h1>
          <div className="">
            <img
              className="h-[30px]"
              src="https://themebeyond.com/html/nftmak/assets/img/icons/title_icon01.png"
              alt=""
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap flex-col md:flex-row items-start md:items-center gap-7">
            <div className="flex items-center gap-3">
              <h1 className="font-semibold uppercase text-body_text">
                filter by:
              </h1>
              <div className="">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isToggle}
                    onChange={onToggle}
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="font-semibold text-body_text">Has list price:</h1>
              <div className="">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isToggle}
                    onChange={onToggle}
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="font-semibold text-body_text">Has open offer</h1>
              <div className="">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isToggle}
                    onChange={onToggle}
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="font-semibold text-body_text">Owned by creater</h1>
              <div className="">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isToggle}
                    onChange={onToggle}
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-3">
                <h1 className="font-semibold text-body_text">Has sold</h1>
                <div className="">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isToggle}
                      onChange={onToggle}
                    />
                    <span className="slider" />
                  </label>
                </div>
              </div>
              <div className="transform  transition hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                  <div className="flex items-center gap-1 px-7 py-2 ">
                    <TiFilter className="text-heading_text text-xl transform -scale-x-100" />
                    <div className="">
                      <button className="text-sm font-bold text-heading_text">
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {artworks?.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artworks;
