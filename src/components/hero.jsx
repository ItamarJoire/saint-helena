import { Link } from 'react-router-dom'

import LogoContainer from '../assets/logo-container.svg'

import { Grid } from '../containers'

export function Hero() {
  return (
    <div>
      <section className="pt-20 flex items-center justify-center w-full bg-hero-pattern bg-no-repeat bg-center bg-cover sm:pt-0 lg:h-[80vh]">
        <div className="m-4 text-center px-4 py-8 rounded-xl sm:max-w-[60%] ">
            <img className='size-60 opacity-90' src={LogoContainer} alt="" />
        </div>   
      </section>
      
      <div className='bg-primary'>
        <Grid>
          <div className='flex flex-col items-center lg:pt-20'>
            <h1 className="font-['Bungee'] text-primary-2 text-2xl text-center font-extrabold tracking-widest">12 anos de excelência em <span className="text-secondary-yellow">educação bilíngue</span></h1>
            <h3 className="mt-3 text-primary-2 text-center opacity-90 text-xl font-medium">Inspirada no sonho de um avô visionário em Maringá.</h3> 
            <Link to='/sobre'> 
              <button className="font-['Bungee'] mt-8 text-xl shadow-md font-medium rounded-lg px-6 py-3 bg-white text-primary hover:opacity-90 duration-200">
                Saiba mais
              </button>
            </Link>
          </div>
        </Grid>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" className='bg-[#EDEDEF]' viewBox="0 0 1440 320"><path fill="#004F93" fill-opacity="1" d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,117.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </div>
  );
}