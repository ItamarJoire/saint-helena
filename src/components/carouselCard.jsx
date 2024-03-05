import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './carouselCard.css';

import { Imgs } from '../lib/imgs';

import {EffectCreative, EffectCards } from 'swiper/modules';

export function CarouselCard() { 

  return (
    <>
      <Swiper
        effect={'creative'}
        grabCursor={true}
        modules={[EffectCreative]}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, 0, -500],
          },
          next: {
            translate: ['120%', 0, -500]
          }
        }}
        className="mySwiper"
      >
       { 
          Imgs.map((img, index) => (
            <SwiperSlide key={index}>
                <img className='w-[260px] h-[300px] border-4 p-0 border-primary rounded-2xl sm:w-[500px] ' src={img.src} alt={img.alt} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
