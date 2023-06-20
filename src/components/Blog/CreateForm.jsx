import React from "react";
import { IoMdHeart } from "react-icons/io";
import { AiFillTags } from "react-icons/ai";
import { RxLapTimer } from "react-icons/rx";
import { FaUserClock } from "react-icons/fa";

const CreateForm = () => {
  return (
    <main className="flex justify-between mx-5 md:mx-16 gap-4 flex-col md:flex-row">
      <div className="md:w-[25%]">
        <h4 className="text-white text-lg font-semibold mb-3">Preview item</h4>
        <div className="h-[470px] lg:w-[260px] lg:h-[390px] 2xl:w-[290px] 4xl:w-[310px] 2xl:h-[430px] p-5  bg-primary rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                className="w-7 h-7 rounded-full"
                src="https://themebeyond.com/html/nftmak/assets/img/others/top_col_avatar.png"
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
            src="https://themebeyond.com/html/nftmak/assets/img/others/top_collection06.jpg"
            alt=""
          />
          <div className="flex justify-between items-center">
            <h5 className="text-lg font-bold text-heading_text">
              NFT Collection
            </h5>
            <p className="text-body_text text-sm">
              5.4
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
      </div>
      <div className="md:w-[75%]">
        <h4 className="font-semibold text-white text-lg mb-3">Select Method</h4>
        <div className="w-full flex flex-wrap items-center gap-5 p-5 mb-5 bg-[#1D1933] border rounded-lg border-[#242424]">
          <button className="flex items-center justify-center text-white gap-2 text-sm px-6 py-2 font-semibold rounded-full bg-[#2B2648] active [&.active]:bg-gradient-to-r from-[#6345ed] to-[#bc3cd3]">
            <AiFillTags />
            Fixed Price
          </button>
          <button className="flex items-center justify-center text-white gap-2 text-sm px-6 py-2 font-semibold rounded-full bg-[#2B2648] hover:bg-gradient-to-r from-[#6345ed] to-[#bc3cd3]">
            <RxLapTimer />
            Time Auctions
          </button>
          <button className="flex items-center justify-center text-white gap-2 text-sm px-6 py-2 font-semibold rounded-full bg-[#2B2648] hover:bg-gradient-to-r from-[#6345ed] to-[#bc3cd3]">
            <FaUserClock />
            Open For Bids
          </button>
        </div>
        <div className="mb-5">
          <h4 className="font-semibold text-white text-lg mb-3">Upload File</h4>
          <input
            type="file"
            className="text-body_text text-sm font-semibold border-2 border-[#343953] w-full rounded-lg px-5 py-6 file:text-white file:mr-3 file:border-0 file:px-4 file:py-2 file:rounded-full file:bg-gradient-to-l from-[#bc3cd3] to-[#6345ed]"
          />
        </div>
        <div className="mb-5">
          <h4 className="font-semibold text-white text-lg mb-3">Price</h4>
          <input
            type="text"
            className="text-body_text text-sm font-semibold border-2 border-[#343953] w-full rounded-lg px-5 py-6 bg-transparent focus-visible:outline-none"
            placeholder="Enter price for one item(ETH)"
          />
        </div>
        <div className="mb-5">
          <h4 className="font-semibold text-white text-lg mb-3">Total</h4>
          <input
            type="text"
            className="text-body_text text-sm font-semibold border-2 border-[#343953] w-full rounded-lg px-5 py-6 bg-transparent focus-visible:outline-none"
            placeholder="Enter price for one item(ETH)"
          />
        </div>
        <div className="mb-5">
          <h4 className="font-semibold text-white text-lg mb-3">Description</h4>
          <textarea
            type="textarea"
            rows={4}
            className="text-body_text text-sm font-semibold border-2 border-[#343953] w-full rounded-lg px-5 py-6 bg-transparent focus-visible:outline-none"
            placeholder="e.g. This is very limited item"
          />
        </div>
        <div className="mb-5 flex gap-5 flex-col md:flex-row">
          <div className="w-full">
          <h4 className="font-semibold text-white text-lg mb-3">Royalties</h4>
          <input
            type="text"
            className="text-body_text text-sm font-semibold border-2 border-[#343953] w-full rounded-lg px-5 py-6 bg-transparent focus-visible:outline-none"
            placeholder="(10%)"
          />
          </div>
          <div className="w-full">
          <h4 className="font-semibold text-white text-lg mb-3">Size</h4>
          <input
            type="text"
            className="text-body_text text-sm font-semibold border-2 border-[#343953] w-full rounded-lg px-5 py-6 bg-transparent focus-visible:outline-none"
            placeholder="e.g. size"
          />
          </div>
        </div>
          <button className="px-8 py-4 my-5 mb-10 text-white outline-white outline-dashed outline-1 -outline-offset-[6px] text-sm font-semibold rounded-full bg-gradient-to-r from-[#7144EF] to-[#D83AFC] hover:bg-gradient-to-l transition duration-500 ">
            CREATE ITEM
          </button>
      </div>
    </main>
  );
};

export default CreateForm;
