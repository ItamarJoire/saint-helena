import { useEffect } from 'react' 

import { Link } from 'react-router-dom'

import { CarouselFade } from './carouselFade';

import ImgHero from '../assets/locais-15.jpg' 

export function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <section>
      <div>
        <CarouselFade />

          <div className='py-16 bg-gradient-to-t from-primary-dark to-primary sm:flex sm:justify-center sm:items-center'>
            <div className='mx-3 py-12 sm:mx-12'>
              <div className='flex flex-col items-center sm:items-start sm:max-w-[500px]'>
                <h1 className="font-['Bungee'] text-primary-2 text-2xl text-center sm:text-left font-extrabold tracking-widest xl:text-3xl">12 anos de excelência em <span className="text-secondary-yellow">educação bilíngue</span></h1>
                <h3 className="mt-3 text-primary-2 text-center sm:text-left opacity-90 text-xl font-medium xl:text-2xl">Inspirada no sonho de um avô visionário em Maringá.</h3> 
                <Link to='/educacao-infantil'> 
                  <button className="font-['Bungee'] mt-8 text-xl shadow-md font-medium rounded-lg px-6 py-3 bg-gradient-to-t from-secondary-yellow-dark to-secondary-yellow text-white hover:opacity-90 duration-200">
                    Saiba mais
                  </button>
                </Link>
              </div>
            </div>

            <div className='max-sm:hidden px-12'>
              <img className='border-8 rounded-2xl border-secondary-yellow w-[500px] h-[340px] lg:h-[400px] object-cover' src={ImgHero} alt="" />
            </div>
          </div>
      </div>

    </section>

  );
}
