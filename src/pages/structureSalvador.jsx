import { Grid } from "../containers";

import Local from '../assets/structure.png'
import Mascot from '../assets/mascot.svg'
import Circle3 from '../assets/circle-3.svg'
import { Carousel } from "../components";

export function StructureSalvador(){
  return(
    <section>
      <Grid>
        <div className="">
          <img className="absolute size-44 opacity-15 top-[80px] left-[-120px] lg:top-[160px] lg:left-[-100px]" src={Circle3} alt="" />
          <img className="absolute size-44 opacity-20 bottom-[0px] right-[-140px] lg:right-[-90px]" src={Circle3} alt="" />

          <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">Estrutura</h1>
          <p className="mt-4 mx-16 mb-16 text-center text-xl text-gray-500 lg:mx-32 xl:mx-60 xl:text-2xl">Saiba mais sobre o que <u>Saint Helena</u> Salvador pode oferecer</p>

          <div className="relative bg-primary max-w-[400px] mx-auto rounded-xl sm:max-w-none sm:mx-0 xl:mx-64">
            <img className="absolute size-20 right-0 top-[-40px] sm:top-[-60px]" src={Mascot} alt="" />
            <div className="sm:flex">
              <img src={Local} alt="" className="p-1 rounded-t-xl h-[300px] w-full sm:rounded-tr-none sm:rounded-bl-xl sm:w-[300px] sm:h-auto "/>
              <div className="py-12 px-6 sm:py-8 mx-auto">
                <h1 className="font-['Bungee'] text-primary-2 text-2xl text-center font-extrabold tracking-widest sm:text-left ">Espaço com mais de 1.500m²</h1>
                <p className="mt-4 text-left text-xl text-white ">
                  A Saint Helena está preparada para oferecer a melhor estrutura para os seus alunos, com amplo espaço e contato com a natureza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Grid>

      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F6B115" fill-opacity="1" d="M0,160L120,165.3C240,171,480,181,720,170.7C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        
        <div className="bg-gradient-to-t from-secondary-yellow-dark to-secondary-yellow pb-8 xl:px-56">
          
          <Grid>
            <p className="text-center text-xl text-white xl:text-2xl">
              A <strong>Saint Helena</strong> possui salas de aula com duas entradas em cada uma delas para favorecer o intercâmbio entre os ambientes. Isso potencializa as relações entre as crianças, as descobertas que acontecem por meio da exploração dos espaços bem como a autonomia. 
              <br />
              <br />
              Além disso, embora todas sejam climatizadas, as duas entradas e as grandes janelas promovem uma ventilação e iluminação natural incrível! A Saint Helena possui dois parques infantis ao ar livre, um parque coberto e uma quadra poliesportiva.
            </p>
          </Grid>
                   
          <Carousel />

          <div className="flex justify-center">
            <a href="https://api.whatsapp.com/send?l=pt&phone=5571993019812&text=Olá! Tudo bem? Quero tirar algumas dúvidas, por favor." target="_blank">
            <button className="font-['Bungee'] mt-8 mb-10  text-xl shadow-md font-medium rounded-lg px-6 py-3 bg-white text-secondary-yellow hover:opacity-90 duration-200">
                Entrar em contato
              </button>
            </a>
          </div>
         
        </div>
      </div>
    </section>
  )
}