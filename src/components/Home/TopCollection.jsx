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
    <div className="bg-[#070b24] h-[80vh] flex items-center">
      <div className="w-[90%] mx-auto ">
        <div className="flex items-center gap-2 mb-6">
          <h4 className="text-heading_text text-2xl font-semibold">
            Top Collection
          </h4>
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/icons/title_icon01.png"
            alt="topseller-image"
          />
        </div>
        <div className="">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            navigation={true}
            modules={[Autoplay, FreeMode, Navigation]}
            className="mySwiper"
          >
            {topcollections?.map((topcollection) => (
              <SwiperSlide>
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
