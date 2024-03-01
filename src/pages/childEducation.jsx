import { useEffect } from "react";

import { Grid } from "../containers";

import { ImgsChildrensNature } from "../lib/imgs";
import { ChildrenCard } from "../components";

export function ChildEducation(){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <section className="pt-3 h-auto bg-[#EDEDEF] lg:">
      <div className="pb-2">
        <Grid>
          <div>
            <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">Dois idiomas, mais modos de <span className="text-secondary-yellow">pensar</span> e <span className="text-secondary-yellow">expressar</span></h1>

            <p className="mt-6 text-center text-xl text-gray-400 ">
              Na Saint Helena, a língua inglesa é utilizada como meio de comunicação, tornando a aprendizagem significativa e prazerosa para as crianças. Em todos os estágios de nossa educação infantil, temos uma professora musicista, com mais de 30 anos de experiência em educação musical, que ministra aulas de inicialização musical, e também um educador físico que trabalha o desenvolvimento psicomotor com as crianças. 
              <br />
              <br />
              Além disso, em todas as turmas há a presença da professora regente de um dos idiomas mais a professora auxiliar que, inclusive, acompanha os alunos nas aulas de música e desenvolvimento motor.
            </p>
          </div>
          </Grid>
      </div>
      
      <ChildrenCard />
     
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#44A930" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,266.7C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <div className="bg-[#44A930]">
        <Grid>
          <div className="">
            <h1 className="font-['Bungee'] text-secondary-yellow text-2xl text-center font-extrabold tracking-widest">O contato das crianças <span className="text-white">com a natureza</span></h1>
            <p className="mt-4 text-center text-xl text-white ">
              É extremamente importante que as crianças entrem em contato com a natureza, pois melhora a saúde física e mental, a aprendizagem, o desempenho escolar, além de reduzir os sintomas relacionados à déficit de atenção e hiperatividade, e aumentar o estímulo ao convívio social.
              <br />
              <br />
              Cuidar da natureza colabora para um mundo mehor.
            </p>
            
            <div className="bg-[#44a930] pt-12">
              <h1 className="font-['Bungee'] text-secondary-yellow text-center text-2xl">Galeria</h1>
              <div class="bg-hero-pattern-texture pb-32 bg-fill bg-no-repeat bg-center mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 mx-8 lg:grid-cols-5">
                {
                  ImgsChildrensNature.map((img) => (
                    <div className="shadow-xl flex items-center mx-auto justify-center rounded-md bg-secondary-yellow opacity-90 h-[148px] w-[148px] overflow-hidden">
                    <div className="bg-contain rounded-md h-[140px] w-[140px] overflow-hidden" src>
                      <img className="size-[140px]" src={img.src}  alt={img.alt} />
                    </div>
                </div>
                  ))
                }
              </div>
            </div>
          </div>   
        </Grid>
      </div>
  
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#44a930" fill-opacity="1" d="M0,64L120,53.3C240,43,480,21,720,26.7C960,32,1200,64,1320,80L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      <section>
        <Grid>
          <div className="mt-0 pb-16 flex gap-4 items-center">
            <div className="inline-block rounded-lg h-40 w-3 bg-secondary-yellow"></div>
            <p className="max-w-[312px] text-xl text-gray-400">
              <span className="font-bold">Incentivamos</span> nossos alunos a cuidarem dos recursos naturais, ensinando-os a plantar, cuidar e admirar as plantas.
            </p>
          </div>
        </Grid>

        <div className="flex justify-center pb-16">
          <a href="">
            <button className="font-['Bungee']  text-xl shadow-md font-medium rounded-lg px-6 py-3 bg-[#44a930] text-white hover:opacity-90 duration-200">
              Entre em contato
            </button>
          </a>
        </div>
      </section>
    </section>
  )
}