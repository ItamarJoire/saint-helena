import LogoContainer from '../assets/logo-container.svg'
import { Grid } from '../containers';

export function Hero() {
  return (
    <div>
      <section className=" pt-20 flex items-center justify-center w-full bg-hero-pattern bg-no-repeat bg-center bg-cover md:justify-start md:pt-0 md:h-[40vh] lg:h-[70vh]">
          <div className="m-4 text-center px-4 py-8  rounded-xl sm:max-w-[60%]  lg:max-w-[40%] lg:mx-0 lg:ml-16 lg:px-8">
          <div>
            <img className='size-60 opacity-80' src={LogoContainer} alt="" />
          </div>
            <button className="font-['Bungee'] mt-8 text-lg  shadow-md  font-medium rounded-lg px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white hover:opacity-90 duration-200">
              Saiba mais
            </button>
          </div>  
          
      </section>
      <div className='bg-primary '>
        <Grid>
          <h1 className="font-['Bungee'] text-primary-2 text-xl text-center font-extrabold tracking-widest">12 anos de excelência em <span className="text-secondary-yellow">educação bilíngue</span></h1>
          <h3 className="mt-3 text-primary-2 text-center opacity-90 text-lg font-medium">Inspirada no sonho de um avô visionário em Maringá.</h3> 
        </Grid>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className='bg-[#F8F8F8]' viewBox="0 0 1440 320"><path fill="#004F93" fill-opacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,202.7C672,235,768,245,864,245.3C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
  );
}