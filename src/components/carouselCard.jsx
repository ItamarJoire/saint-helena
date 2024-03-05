import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './carouselCard.css';

import { ImgsMobile } from '../lib/imgs';

import {EffectCreative } from 'swiper/modules';

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
          ImgsMobile.map((img, index) => (
            <SwiperSlide key={index}>
                <img className='w-[500px] h-[500px] border-4 p-0 border-primary rounded-2xl ' src={img.src} alt={img.alt} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
