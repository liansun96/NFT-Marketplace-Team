import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {  Autoplay, Pagination} from "swiper";

export default function RCarousel() {
  return (
    <>
      <Swiper pagination={{clickable: true}} autoplay={{delay:3000}} modules={[Autoplay, Pagination]} className="my-10">
        <SwiperSlide>
            <img src="https://themebeyond.com/html/nftmak/assets/img/others/sidebar_img01.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://themebeyond.com/html/nftmak/assets/img/others/sidebar_img03.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://themebeyond.com/html/nftmak/assets/img/others/sidebar_img02.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
