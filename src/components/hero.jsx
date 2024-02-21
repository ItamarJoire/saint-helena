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
            {/* <div className='border-2 rounded-sm mb-8 w-[30%] border-secondary-yellow mx-auto'></div>
            <div>
              <h1 className="font-['Bungee'] text-primary text-4xl font-extrabold tracking-widest">Anos de excelência em <span className="text-secondary-yellow">educação bilíngue</span></h1>
              <h3 className="mt-3 text-primary-2 opacity-90 text-2xl font-medium">Inspirada no sonho de um avô visionário em Maringá.</h3> 
            </div> */}
            <button className="mt-8 text-lg  shadow-md  font-medium rounded-lg px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white hover:opacity-90">
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
    </div>
  );
}