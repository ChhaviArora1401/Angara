"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function RelatedProducts({ relatedProducts }) {
  return (
    <Swiper
      navigation
      slidesPerView={4}
      lazy={{ loadPrevNext: true }}
      pagination={{ type: "bullets", clickable: true }}
      modules={[Navigation, Pagination]}
      loop
      className="mySwiper"
    >
      {relatedProducts?.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="flex justify-center flex-col items-center p-2">
            <img src={img.src} alt={img.alt || `Slide ${i + 1}`} loading="lazy" className="otherimages" />
            <span>{img.name}</span>
            <span>{img.price}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}