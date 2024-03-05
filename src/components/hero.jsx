import { Link } from 'react-router-dom'

import LogoContainer from '../assets/logo-container.svg'

import { Grid } from '../containers'
import { CarouselFade } from './carouselFade';

export function Hero() {

  
  return (
    <section>
      <div>
        <CarouselFade />

        <div className='bg-gradient-to-t from-primary-dark to-primary'>
          <Grid>
            <div className='flex flex-col pb-8 items-center lg:pt-20'>
              <h1 className="font-['Bungee'] text-primary-2 text-2xl text-center font-extrabold tracking-widest">12 anos de excelência em <span className="text-secondary-yellow">educação bilíngue</span></h1>
              <h3 className="mt-3 text-primary-2 text-center opacity-90 text-xl font-medium">Inspirada no sonho de um avô visionário em Maringá.</h3> 
              <Link to='/educacao-infantil'> 
                <button className="font-['Bungee'] mt-8 text-xl shadow-md font-medium rounded-lg px-6 py-3 bg-gradient-to-t from-secondary-yellow-dark to-secondary-yellow text-white hover:opacity-90 duration-200">
                  Saiba mais
                </button>
              </Link>
            </div>
          </Grid>
        </div>

        {/* <svg xmlns="http://www.w3.org/2000/svg" className='bg-[#EDEDEF]' viewBox="0 0 1440 320"><path fill="#003461" fill-opacity="1" d="M0,64L120,53.3C240,43,480,21,720,26.7C960,32,1200,64,1320,80L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
      </div>

    </section>

  );
}