import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './carouselGallery.css';

import { Imgs } from '../lib/imgs';

import { EffectCards } from 'swiper/modules';

export function CarouselGallery() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
       { 
          Imgs.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='carouselScrollImg'>
                <img className='w-full h-[300px] border-4 p-0 border-secondary-yellow rounded-2xl sm:w-[500px] ' src={img.src} alt={img.alt} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
