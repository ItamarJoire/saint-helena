import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

import Img1 from '../assets/img-1.png'

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
      slidesPerView={4}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      centeredSlides={true}
      modules={[Navigation, Autoplay ]}
      navigation={navigationEnabled ? true : false}
      // pagination={{ enabled: navigationEnabled ? false : true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024:{ slidesPerView: 4 },
      }}
    >
      <SwiperSlide>
        <div>
          <img className='rounded' src={Img1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className='rounded' src={Img1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className='rounded' src={Img1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className='rounded' src={Img1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className='rounded' src={Img1} alt="" />
        </div>
      </SwiperSlide>
    
    </Swiper>
  );
};

