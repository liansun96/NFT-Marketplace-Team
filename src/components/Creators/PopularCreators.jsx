import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination,Autoplay } from "swiper";
import { creators } from "./Contacts";
import PopularCard from "./PopularCard";

const PopularCreators = () => {
  return (
    <div className="bg-info">
      <div className="py-10 md:pt-10 w-[90%] md:w-[85%] lg:w-[90%] 3xl:w-[70%] 4xl:w-[55%] mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <h1 className="text-heading_text text-2xl font-semibold">
            Popular Creators
          </h1>
          <img
            src="	https://themebeyond.com/html/nftmak/assets/img/icons/title_icon01.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-5 justify-between creator-swiper">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper hidden lg:block"
          >
            {creators?.map((creator) => (
              <SwiperSlide key={creator?.id}>
                <PopularCard creator={creator} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper block md:hidden"
          >
            {creators?.map((creator) => (
              <SwiperSlide key={creator?.id}>
                <PopularCard creator={creator} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper hidden md:block lg:hidden"
          >
            {creators?.map((creator) => (
              <SwiperSlide key={creator?.id}>
                <PopularCard creator={creator} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularCreators;
