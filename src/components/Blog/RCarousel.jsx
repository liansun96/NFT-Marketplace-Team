import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

export default function RCarousel() {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        className="my-10"
      >
        <SwiperSlide className="pb-10">
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/others/sidebar_img01.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="pb-10">
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/others/sidebar_img03.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="pb-10">
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/others/sidebar_img02.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
