import { Grid } from "../containers";

import Local from '../assets/children-3.jpg'
import { Carousel } from "../components";

export function StructureSalvador(){
  return(
    <section>
      <Grid>
        <div className="pb-10">
          <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">Estrutura</h1>
          <p className="mt-4 mb-8 text-center text-xl text-gray-500 sm:mx-16">Saiba mais sobre o que Saint Helena Salvador pode oferecer</p>

          <div className=" bg-primary rounded-xl sm:flex sm:space-y-6 ">
            <img src={Local} alt="" className=" size-[400px] rounded-t-xl"/>
            <div className="py-8 px-6 ">
              <h1 className="font-['Bungee'] text-primary-2 text-2xl text-center font-extrabold tracking-widest">Espaço com mais de 1.500m²</h1>
              <p className="mt-4 text-left text-xl text-white ">
                A Saint Helena está preparada para oferecer a melhor estrutura para os seus alunos, com amplo espaço e contato com a natureza.
              </p>
            </div>
          </div>
        </div>
      </Grid>

      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F6B115" fill-opacity="1" d="M0,160L120,165.3C240,171,480,181,720,170.7C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <div className="bg-gradient-to-t from-secondary-yellow-dark to-secondary-yellow pb-8">
          <Grid>
            <p className="mt-4 text-center text-xl text-white ">
            A <strong>Saint Helena</strong> possui salas de aula com duas entradas em cada uma delas para favorecer o intercâmbio entre os ambientes. Isso potencializa as relações entre as crianças, as descobertas que acontecem por meio da exploração dos espaços bem como a autonomia. 
            <br />
            <br />
            Além disso, embora todas sejam climatizadas, as duas entradas e as grandes janelas promovem uma ventilação e iluminação natural incrível! A Saint Helena possui dois parques infantis ao ar livre, um parque coberto e uma quadra poliesportiva.
            </p>
          </Grid>
    
          <Carousel />

          <div className="flex justify-center">
            <a href="">
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