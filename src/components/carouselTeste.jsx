import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.css';

import { Imgs } from '../lib/imgs';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function CarouselTest() {
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
