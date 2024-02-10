import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

export function Carousel(){
  const [navigationEnabled, setNavigationEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640 && navigationEnabled) {
        setNavigationEnabled(false);
      } else if (window.innerWidth >= 640 && !navigationEnabled) {
        setNavigationEnabled(true);
      }
    };

    // Adiciona um ouvinte de redimensionamento para atualizar o estado quando a largura da tela mudar
    window.addEventListener('resize', handleResize);

    // Remove o ouvinte de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navigationEnabled]);

  return (
    <Swiper
      style={{
        '--swiper-navigation-size': '24px',
        '--swiper-navigation-top-offset': '40%',
        '--swiper-navigation-sides-offset': '40px',
        '--swiper-navigation-color': '#000',
      }}

      className='mySwiper'
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Autoplay ]}
      navigation={navigationEnabled ? true : false}
      pagination={{ enabled: navigationEnabled ? false : true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024:{ slidesPerView: 4 },
      }}
    >
      <SwiperSlide><div className='h-8 bg-primary'>Item</div></SwiperSlide>
      <SwiperSlide><div className='h-8 bg-primary'>Item</div></SwiperSlide>
      <SwiperSlide><div className='h-8 bg-primary'>Item</div></SwiperSlide>
      <SwiperSlide><div className='h-8 bg-primary'>Item</div></SwiperSlide>
      <SwiperSlide><div className='h-8 bg-primary'>Item</div></SwiperSlide>
      <SwiperSlide><div className='h-8 bg-primary'>Item</div></SwiperSlide>
      <SwiperSlide><div className='h-8 bg-primary'>Item</div></SwiperSlide>
      <SwiperSlide><div className='h-8 bg-primary'>Item</div></SwiperSlide>
      <SwiperSlide><div className='h-8 bg-primary'>Item</div></SwiperSlide>
      <SwiperSlide><div className='h-8 bg-primary'>Item</div></SwiperSlide>
      <SwiperSlide><div className='h-8 bg-primary'>Item</div></SwiperSlide>
    </Swiper>
  );
};

