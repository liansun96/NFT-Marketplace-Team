import React from "react";
import TopCollectionCard from "./TopCollectionCard";
import { topcollections } from "../../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TopCollection = () => {
  return (
    <div className="bg-[#070b24] flex items-center md:pt-20 lg:pt-0">
      <div className="w-[90%] md:w-[85%] lg:w-[90%] 3xl:w-[70%] 4xl:w-[55%] mx-auto ">
        <div className="flex items-center gap-2 mb-10 translate-y-[100px]">
          <h4 className="text-heading_text text-2xl font-semibold ">
            Top Collection
          </h4>
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/icons/title_icon01.png"
            alt="topseller-image"
          />
        </div>
        <div className="top-collection">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper hidden lg:block"
          >
            {topcollections?.map((topcollection) => (
              <SwiperSlide key={topcollection.id}>
                <TopCollectionCard topcollection={topcollection} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper hidden md:block lg:hidden"
          >
            {topcollections?.map((topcollection) => (
              <SwiperSlide key={topcollection.id}>
                <TopCollectionCard topcollection={topcollection} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper block md:hidden"
          >
            {topcollections?.map((topcollection) => (
              <SwiperSlide key={topcollection.id}>
                <TopCollectionCard topcollection={topcollection} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
