import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Mascot from '../assets/mascot.svg'

import { ImgsLocals } from '../lib/imgs'

export function CarouselStructure(){
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

  return(
    <div className="relative bg-primary max-w-[400px] mx-auto rounded-xl sm:max-w-none sm:mx-0 lg:max-w-[640px] lg:mx-auto  ">
      <img className="absolute size-20 right-0 top-[-40px] sm:top-[-60px] z-10" src={Mascot} alt="" />
      <div className="mySwiper">
      <Swiper
        style={{
          '--swiper-navigation-size': '24px',
          '--swiper-navigation-top-offset': '50%',
          '--swiper-navigation-sides-offset': '16px',
          
          '--swiper-pagination-color': '#fff',
          
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
        { 
          ImgsLocals.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='border-4 rounded-t-lg'>
                <img className='w-full h-[340px] lg:h-[460px] mx-auto object-cover' src={img.src} alt={img.alt} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="py-8 px-6 sm:py-8 lg:p-12 mx-auto">
        <h1 className="font-['Bungee'] text-primary-2 text-2xl text-center font-extrabold tracking-widest ">Saint Helena - Bilingual Education</h1>
        <p className="mt-4 text-left text-xl text-white ">
          A Saint Helena está preparada para oferecer a melhor estrutura para os seus alunos, com amplo espaço e contato com a natureza.
        </p>
      </div>
      </div>
    </div>
  )
}