import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

import { ImgsGallery, ImgsGallery2 } from '../lib/imgs';

export function CarouselCard() { 

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3600, disableOnInteraction: false }}
        watchSlidesProgress={true}
        spaceBetween={12}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          700: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1380: { slidesPerView: 5 },
          1800: { slidesPerView: 6 },
        }}
        className="mySwiper pb-3 px-20"
      >
       { 
          ImgsGallery.map((img, index) => (
            <SwiperSlide key={index}>
                <img className='border-8 w-[300px] h-[300px] rounded-2xl border-secondary-yellow' src={img.src} alt={img.alt} />
            </SwiperSlide>
          ))
        }

      </Swiper>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000,  disableOnInteraction: false, reverseDirection: true }}
        watchSlidesProgress={true}
        spaceBetween={12}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          700: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1380: { slidesPerView: 5 },
          1800: { slidesPerView: 6 },
        }}
        className="mySwiper pb-6 px-20"
      >
       { 
          ImgsGallery2.map((img, index) => (
            <SwiperSlide key={index}>
                <img className='border-8 w-[300px]  h-[300px] rounded-2xl border-primary' src={img.src} alt={img.alt} />
            </SwiperSlide>
          ))
        }

      </Swiper>
      
    </>
  );
}
