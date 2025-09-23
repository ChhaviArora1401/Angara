"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function CarouselWithThumbs({ images }) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="gallery-container">
      <Swiper
        spaceBetween={10}
        navigation
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className="main-swiper"
      >
        <div className="flex justify-center">
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img.src}
              alt={img.alt || `Slide ${i + 1}`}
              loading="lazy"
              className="main-image"
            />
          </SwiperSlide>
        ))}
        </div>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[Thumbs]}
        className="thumbs-swiper"
>
        {images.map((img, i) => {
          return <SwiperSlide key={i}>
            <img
              src={img.src}
              alt={`thumb-${i + 1}`}
              className="thumb-image"
              loading="lazy"
            />
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
}