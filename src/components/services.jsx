import { Link } from "react-router-dom"

import { Grid } from "../containers"

import Flex from '../assets/flex.svg'
import Solutions from '../assets/solutions.svg'
import Insight from '../assets/insight.svg'
import { CarouselGallery } from "../components"

export function Services(){
  return(
    <div className="bg-[#EDEDEF]">
      <section className="pb-12">
        <Grid>
          <div>
            <div className="text-center">
              <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">Educação infantil</h1>
              <h3 className="font-['Bungee'] text-gray-400 text-2xl text-center font-extrabold tracking-widest">Baseada em 3 pilares</h3>
            </div>

            <div className="mt-6 mx-3 bg-secondary-yellow  p-4 drop-shadow-xl rounded-xl flex flex-col items-center md:mx-44 lg:mx-0">
              <div className="flex items-center leading-6">
                <h6 className="font-['Bungee'] tracking-widest text-white text-xl font-bold ml-2 text-center lg:text-xl">Afetividade</h6>
              </div>
            </div>

            <div className="mt-6 mx-3 bg-secondary-yellow p-4 drop-shadow-xl rounded-xl flex flex-col items-center md:mx-44 lg:mx-0">
              <div className="flex items-center leading-6">
                <h6 className="font-['Bungee'] tracking-widest text-white text-xl font-bold ml-2 text-center lg:text-xl">Desenvolvimento cognitivo</h6>
              </div>
            </div>

            <div className="mt-6 mx-3 bg-secondary-yellow p-4 drop-shadow-xl rounded-xl flex flex-col items-center md:mx-44 lg:mx-0">
              <div className="flex items-center leading-6">
                <h6 className="font-['Bungee'] tracking-widest text-white text-xl font-bold ml-2 text-center lg:text-xl">O brincar</h6>
              </div>
            </div>
          </div>
        </Grid>
      </section>

      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#004E92" fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,170.7C1120,181,1280,235,1360,261.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className="bg-primary pb-16">
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

      <section  id="services" className="pb-20 bg-[url('/bg-gallery.jpg')] bg-cover h-auto text-center">
        <div>
          <Grid>
            <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">Galeria</h1>

            <div className="mt-4">
              <CarouselGallery />
            </div>

            <Link to='/contato-com-a-natureza'>
              <button className="font-['Bungee'] mt-10 text-xl shadow-md font-medium rounded-lg px-6 py-3 bg-gradient-to-r from-secondary-yellow to-secondary-yellow-dark text-white hover:opacity-90 duration-200">
                Entre em contato
              </button>
            </Link>
          </Grid>
        </div>
      </section>

    </div>
  )
}