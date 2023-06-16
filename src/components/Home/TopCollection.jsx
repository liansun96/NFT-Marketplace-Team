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
    <div className="bg-[#070b24] h-[90vh] flex items-center">
      <div className="w-[90%] mx-auto ">
        <div className="flex items-center gap-2 mb-10 translate-y-[70px]">
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
            className="mySwiper"
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
