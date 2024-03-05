import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { ImgsChildrensNature } from '../lib/imgs';

export function CarouselCard() { 

  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 2 },
          767: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
       { 
          ImgsChildrensNature.map((img, index) => (
            <SwiperSlide key={index}>
                <img className='border-4 rounded-2xl border-primary ' src={img.src} alt={img.alt} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
