import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ImgsDesktop, ImgsMobile } from '../lib/imgs'

export function CarouselFade(){
  const [navigationEnabled, setNavigationEnabled] = useState(true);
  
  const isDesktop = useMediaQuery({ minWidth: 768 })

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
    

    <div className='mySwiper'>
      <Swiper
        style={{
          '--swiper-navigation-size': '24px',
          '--swiper-navigation-top-offset': '50%',
          '--swiper-navigation-sides-offset': '16px',
          
          '--swiper-pagination-color': '#004E92',
          
        }}

        className='mySwiper'
        effect={'fade'}
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        centeredSlides={true}
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        pagination={navigationEnabled ? false : true}
        navigation={navigationEnabled ? true : false}
     
      >
        { isDesktop ? (
          <div>
            { 
              ImgsDesktop.map((img, index) => (
                <SwiperSlide key={index}>
                    <img className='w-screen h-auto lg:h-[84vh] ' src={img.src} alt={img.alt} />
                </SwiperSlide>
              ))
            }
          </div>
        ) : (
          <div>
            { 
              ImgsMobile.map((img, index) => (
                <SwiperSlide key={index}>
                    <img className='w-screen h-auto' src={img.src} alt={img.alt} />
                </SwiperSlide>
              ))
            }
          </div>
        )
        }
      </Swiper>
    </div>
  );
};