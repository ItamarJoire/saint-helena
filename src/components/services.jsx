import { Link } from "react-router-dom"

import { Grid } from "../containers"

import Flex from '../assets/flex.svg'
import Solutions from '../assets/solutions.svg'
import Insight from '../assets/insight.svg'
import { CarouselCard } from "../components"

export function Services(){
  return(
    <div className=" bg-[#EDEDEF]">
      
      <section className="py-6 lg:py-16 ">
        <Grid>
          <div className="lg:mx-48">
            <div className="text-center">
              <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">Educação infantil</h1>
              <h3 className="font-['Bungee'] text-gray-400 text-2xl text-center font-extrabold tracking-widest">Baseada em 3 pilares</h3>
            </div>

            <div className=" lg:mt-8 lg:justify-center ">
              <div className="mt-6 mx-3 border-4 border-secondary-yellow p-4 drop-shadow-xl rounded-xl flex flex-col items-center md:mx-44 lg:mx-0">
              <div className="flex items-center leading-6">
                <h6 className="font-['Bungee'] tracking-widest text-secondary-yellow text-xl font-bold ml-2 text-center lg:text-xl">Afetividade</h6>
              </div>
            </div>

            <div className="mt-6 mx-3 border-4 border-primary p-4 drop-shadow-xl rounded-xl flex flex-col items-center md:mx-44 lg:mx-0">
              <div className="flex items-center leading-6">
                <h6 className="font-['Bungee'] tracking-widest text-primary text-xl font-bold ml-2 text-center lg:text-xl">Desenvolvimento integral</h6>
              </div>
            </div>

            <div className="mt-6 mx-3 border-4 border-[#44A930] p-4 drop-shadow-xl rounded-xl flex flex-col items-center md:mx-44 lg:mx-0">
              <div className="flex items-center leading-6">
                <h6 className="font-['Bungee'] tracking-widest text-[#44A930] text-xl font-bold ml-2 text-center lg:text-xl">O brincar</h6>
              </div>
            </div>
          </div>
          </div>
        </Grid>
      </section>

      <section>
        <div className="py-6 lg:py-16 bg-gradient-to-t from-primary-dark to-primary">
          <Grid>
            
            <div className="text-center">
              <h1 className="font-['Bungee'] text-primary-2 text-2xl text-center font-extrabold tracking-widest">Seu filho bilíngue com</h1>
              <h3 className="font-['Bungee'] text-secondary-yellow text-2xl text-center font-extrabold tracking-widest">Saint Helena</h3>
            </div>

            <div className="mt-8 flex flex-col gap-8">
              <div className="flex flex-col items-center text-center">
                <img className="size-24" src={Flex} alt="" />
                <p className="mt-4 text-white">Maior flexibilidade de pensamento</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img className="size-24" src={Solutions} alt="" />
                <p className="mt-4 text-white">Abertura a diferentes soluções frente aos problemas vividos</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <img className="size-24" src={Insight} alt="" />
                <p className="mt-4 text-white">Agilidade de raciocínio</p>
              </div>
            </div>
          </Grid>
          
        </div>
      </section>

      <section  id="services" className="py-6 lg:py-16 bg-[url('/bg-gallery.jpg')] bg-cover bg-no-repeat h-auto text-center">
        
        <div className="">
          {/* <Grid> */}
            <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">Galeria</h1>

            <div className="mx-2 mt-8">
              <CarouselCard />
            </div>

        


            <Link to='/educacao-infantil'>
              <button className="font-['Bungee'] mt-16 text-xl shadow-md font-medium rounded-lg px-6 py-3 bg-gradient-to-t from-primary-dark to-primary text-white hover:opacity-90 duration-200">
                Saiba mais
              </button>
            </Link>
          {/* </Grid> */}
        </div>
        
      </section>
      

    </div>
  )
}