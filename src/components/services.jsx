import { Link } from "react-router-dom"

import { Grid } from "../containers"

import Flex from '../assets/flex.svg'
import Solutions from '../assets/solutions.svg'
import Insight from '../assets/insight.svg'
import { CarouselCard } from "../components"

import circle1 from '../assets/circle-1.svg'
import circle2 from '../assets/circle-2.svg'

export function Services(){
  return(
    <div className=" bg-[#EDEDEF] relative"> 
      <img className="max-sm:hidden absolute size-44 opacity-45 right-[-60px] top-[180px]" src={circle1} alt="" />
      <section className="py-6 lg:py-16">
        <Grid>
            <div className="">
              <div className="text-center">
                <h1 className="font-['Caveat'] text-primary text-4xl text-center font-extrabold tracking-widest xl:text-5xl">Educação infantil</h1>
                <h3 className="font-['Bungee'] text-gray-400 text-2xl text-center font-extrabold tracking-widest xl:text-3xl">Baseada em 3 pilares</h3>
              </div>

              <div className="sm:mx-40 lg:flex lg:gap-8 lg:mt-8 lg:justify-center">
                <div className="mt-6 mx-3 border-dashed border-4 border-secondary-yellow p-4 drop-shadow-xl rounded-3xl flex flex-col items-center justify-center md:mx-44 lg:mx-0">
                  <div className="flex items-center leading-6">
                    <h6 className="font-['Bungee'] tracking-widest text-secondary-yellow text-xl font-bold ml-2 text-center lg:text-xl xl:text-2xl">Afetividade</h6>
                  </div>
                </div>

                <div className="mt-6 mx-3 border-dashed border-4 border-primary p-4 drop-shadow-xl rounded-3xl flex flex-col items-center justify-center md:mx-44 lg:mx-0">
                  <div className="flex items-center leading-6">
                    <h6 className="font-['Bungee'] tracking-widest text-primary text-xl font-bold ml-2 text-center lg:text-xl xl:text-2xl">Desenvolvimento<br /> integral</h6>
                  </div>
                </div>

                <div className="mt-6 mx-3 border-dashed border-4 border-[#44A930] p-4 drop-shadow-xl rounded-3xl flex flex-col items-center  justify-center md:mx-44 lg:mx-0">
                  <div className="flex items-center leading-6">
                    <h6 className="font-['Bungee'] tracking-widest text-[#44A930] text-xl font-bold ml-2 text-center lg:text-xl xl:text-2xl">O brincar</h6>
                  </div>
                </div>
            </div>
          </div>
        </Grid>
      </section>

      <section>
        <div className="py-6 lg:py-16 bg-gradient-to-t from-primary-dark to-primary relative">
        <img className="max-sm:hidden absolute size-44 opacity-45 left-[-40px] top-[80px]" src={circle2} alt="" />
          <Grid>
            <div className="text-center">
              <h1 className="font-['Bungee'] text-primary-2 text-2xl text-center font-extrabold tracking-widest xl:text-3xl">Seu filho bilíngue com</h1>
              <h3 className="font-['Bungee'] text-secondary-yellow text-2xl text-center font-extrabold tracking-widest xl:text-3xl">Saint Helena</h3>
            </div>

            <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:justify-center sm:gap-12">
              <div className="flex flex-col items-center text-center">
                <img className="size-24" src={Flex} alt="" />
                <p className="mt-4 text-white sm:max-w-[200px] xl:text-lg">Maior flexibilidade de pensamento</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img className="size-24" src={Solutions} alt="" />
                <p className="mt-4 text-white sm:max-w-[200px] xl:text-lg">Abertura a diferentes soluções frente aos problemas vividos</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <img className="size-24" src={Insight} alt="" />
                <p className="mt-4 text-white sm:max-w-[200px] xl:text-lg">Agilidade de raciocínio</p>
              </div>
            </div>
          </Grid>
          
        </div>
      </section>

      <section  id="services" className="py-20 bg-[url('/bg-gallery.jpg')] bg-cover bg-no-repeat h-auto text-center"> 
        <div className="">
          <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest xl:text-3xl">Galeria</h1>

          <div className="mx-6 sm:mx-8 mt-8 xl:mx-24">
            <CarouselCard />
          </div>
          
          <Link to='/educacao-infantil'>
            <button className="font-['Bungee'] mt-16 text-xl shadow-md font-medium rounded-lg px-6 py-3 bg-gradient-to-t from-primary-dark to-primary text-white hover:opacity-90 duration-200 xl:text-2xl">
              Saiba mais
            </button>
          </Link>
        </div> 
      </section>
    </div>
  )
}