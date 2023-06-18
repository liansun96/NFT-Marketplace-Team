import { HiArrowNarrowRight } from "react-icons/hi";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testiomonail = () => {
  return (
    <div className="bg-[#070b24] py-10">
      <Swiper
       
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=" py-10">
          <div className="w-[90%] md:w-[60%] mx-auto text-center space-y-6">
            <img
              className="w-[250px] mx-auto"
              src={
                "https://themebeyond.com/html/nftmak/assets/img/others/star.png"
              }
              alt=""
            />
            <p className="text-body_text text-lg italic">
              “ What even is an NFT? NFT stands for non-fungible token, which
              basically means that it's one kind digital asset that belongs to
              you and you only. The most popular NFTs right include artwork and
              music, include videos and even tweets “
            </p>
            <div className="">
              <h5 className="text-lg font-bold text-heading_text">
                Alexandra Pilot
              </h5>
              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <p className="duration-300 text-purple hover:text-dark_blue">
                  See All Reviews
                </p>
                <HiArrowNarrowRight className=" text-purple hover:text-dark_blue text-xl" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <div className="w-[90%] md:w-[60%] mx-auto text-center space-y-6">
            <img
              className="w-[250px] mx-auto"
              src={
                "https://themebeyond.com/html/nftmak/assets/img/others/star.png"
              }
              alt=""
            />
            <p className="text-body_text text-lg italic">
              “ What even is an NFT? NFT stands for non-fungible token, which
              basically means that it's one kind digital asset that belongs to
              you and you only. The most popular NFTs right include artwork and
              music, include videos and even tweets “
            </p>
            <div className="">
              <h5 className="text-lg font-bold text-heading_text">
                Alexandra Pilot
              </h5>
              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <p className="duration-300 text-purple hover:text-dark_blue">
                  See All Reviews
                </p>
                <HiArrowNarrowRight className=" text-purple hover:text-dark_blue text-xl" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <div className="w-[90%] md:w-[60%] mx-auto text-center space-y-6">
            <img
              className="w-[250px] mx-auto"
              src={
                "https://themebeyond.com/html/nftmak/assets/img/others/star.png"
              }
              alt=""
            />
            <p className="text-body_text text-lg italic">
              “ What even is an NFT? NFT stands for non-fungible token, which
              basically means that it's one kind digital asset that belongs to
              you and you only. The most popular NFTs right include artwork and
              music, include videos and even tweets “
            </p>
            <div className="">
              <h5 className="text-lg font-bold text-heading_text">
                Alexandra Pilot
              </h5>
              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <p className="duration-300 text-purple hover:text-dark_blue">
                  See All Reviews
                </p>
                <HiArrowNarrowRight className=" text-purple hover:text-dark_blue text-xl" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testiomonail;
