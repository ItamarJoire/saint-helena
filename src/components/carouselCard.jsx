import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

import { ImgsGallery } from '../lib/imgs';

export function CarouselCard() { 

  return (
    <>
      <Swiper
        style={{
          '--swiper-pagination-color': '#0059A7',
        }}
        modules={[Pagination, Autoplay]}
        pagination={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
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
        className="mySwiper pb-12"
      >
       { 
          ImgsGallery.map((img, index) => (
            <SwiperSlide key={index}>
                <img className='border-8 w-full sm:w-auto h-[360px] rounded-2xl border-primary' src={img.src} alt={img.alt} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
