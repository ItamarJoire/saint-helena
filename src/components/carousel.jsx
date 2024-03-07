import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ImgsMobile } from '../lib/imgs'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Carousel(){
  const [navigationEnabled, setNavigationEnabled] = useState(true);
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.carouselScrollImg', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.carouselContainer',
        start: 'top 700px',
        end: 'bottom 400px',
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf('.carouselScroll')
    }
  }, [])  


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
    <div className='carouselContainer mySwiper my-12 mx-2 lg:mx-20'>
      <Swiper
        style={{
          '--swiper-navigation-size': '24px',
          '--swiper-navigation-top-offset': '50%',
          '--swiper-navigation-sides-offset': '16px',
          
          '--swiper-pagination-color': '#F6B115',
          
        }}

        className=''
        spaceBetween={12}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        centeredSlides={true}
        modules={[Navigation, Autoplay, Pagination]}
        pagination={navigationEnabled ? false : true}
        navigation={navigationEnabled ? true : false}
        breakpoints={{
          640: { slidesPerView: 1 },
          767: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
      
        { 
          ImgsMobile.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='carouselScrollImg border-8 rounded-xl border-primary-2'>
                <img className='w-full h-[340px] object-cover rounded-lg sm:w-[500px] ' src={img.src} alt={img.alt} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};