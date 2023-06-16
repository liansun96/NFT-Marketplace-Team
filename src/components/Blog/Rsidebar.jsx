import React from "react";
import { IoCalendarClear } from "react-icons/io5";
import { MdKeyboardArrowRight, MdTipsAndUpdates } from "react-icons/md";
import { FaMountain } from "react-icons/fa";
import RCarousel from "./RCarousel";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

const Rsidebar = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={false}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className=" absolute w-96 bg-[#241A3D] overflow-y-auto right-0 top-0 p-7 h-screen"
      >
        <SwiperSlide>
          <main className="w-full py-10">
            <div className="  flex flex-col justify-center items-center ">
              <div className="w-[112px] h-[112px]  flex justify-center items-center bg-white rounded-full bg-gradient-to-b from-[#E82F32] to-[#151122]">
                <img
                  className="w-[106px]"
                  src="https://themebeyond.com/html/nftmak/assets/img/others/author_img.png"
                  alt=""
                />
              </div>
              <h2 className="text-[#C9C6AD] text-lg font-semibold">
                Author Profile
              </h2>
              <p className="text-[#C9C6AD] text-xs">Super Author</p>
              <button className="text-white px-8 py-3 outline-dashed outline-1 -outline-offset-[6px] text-sm font-semibold rounded-full bg-gradient-to-r from-[#7144EF] to-[#D83AFC] hover:bg-gradient-to-l transition duration-500 ">
                CHECKOUT
              </button>
            </div>
            <div>
              <RCarousel />
            </div>
            <div className="text-white flex flex-col gap-3">
              <h2 className="text-[#C9C6AD] font-semibold">OVERVIEW</h2>
              <div className="flex justify-between items-center w-full h-[70px] rounded-lg px-5 bg-[#0C1029]">
                <div className="flex items-center gap-3">
                  <button className="text-[#FFF] text-xl w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-[#009FBB]">
                    <IoCalendarClear />
                  </button>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">Open project</p>
                    <p className="font-semibold">820</p>
                  </div>
                </div>
                <button className="w-7 h-7 flex justify-center items-center text-xl rounded-full bg-[#1D1933]">
                  <MdKeyboardArrowRight />
                </button>
              </div>
              <div className="flex justify-between items-center w-full h-[70px] rounded-lg px-5 bg-[#0C1029]">
                <div className="flex items-center gap-3">
                  <button className="text-[#FFF] text-xl w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-[#F2994A]">
                    <FaMountain />
                  </button>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">Successful completed</p>
                    <p className="font-semibold">546</p>
                  </div>
                </div>
                <button className="w-7 h-7 flex justify-center items-center text-xl rounded-full bg-[#1D1933]">
                  <MdKeyboardArrowRight />
                </button>
              </div>
              <div className="flex justify-between items-center w-full h-[70px] rounded-lg px-5 bg-[#0C1029]">
                <div className="flex items-center gap-3">
                  <button className="text-[#FFF] text-xl w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-[#FF5E3D]">
                    <MdTipsAndUpdates />
                  </button>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">Trending</p>
                    <p className="font-semibold">82</p>
                  </div>
                </div>
                <button className="w-7 h-7 flex justify-center items-center text-xl rounded-full bg-[#1D1933]">
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
          </main>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Rsidebar;
