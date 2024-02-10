import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

import Img1 from '../assets/img-1.png'

const Imgs = [
  { src: Img1, alt: '' },
  { src: Img1, alt: '' },
  { src: Img1, alt: '' },
  { src: Img1, alt: '' },
  { src: Img1, alt: '' },
  { src: Img1, alt: '' },
  { src: Img1, alt: '' },
  { src: Img1, alt: '' },
  { src: Img1, alt: '' },
]

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
        '--swiper-navigation-top-offset': '50%',
        '--swiper-navigation-sides-offset': '16px',
        // '--swiper-navigation-color': '#09B451',
      }}

      className='mySwiper my-4 mx-6 md:mx-16 lg:mx-28'
      spaceBetween={12}
      slidesPerView={4}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      centeredSlides={true}
      modules={[Navigation, Autoplay ]}
      navigation={navigationEnabled ? true : false}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
      }}
    >
      { 
        Imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <div>
              <img className='rounded sm:w-[500px]' src={img.src} alt={img.alt} />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

