import { Grid } from "../containers";

import { ImgsChildrensNature } from "../lib/imgs";

import { FaArrowLeft } from "react-icons/fa";

export function Nature(){
  return(
    <section className="mt-20 pt-6 pb-96 bg-hero-pattern-nature-page bg-cover bg-no-repeat h-auto">
      {/* <div className="pl-4 flex items-center gap-3">
        <FaArrowLeft className="text-primary size-6"/>
      </div> */}
      <Grid>
        <div className="mb-20">
          <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">O contato das crianças com a <span className="text-[#44A930]">natureza</span></h1>
          <p className="mt-4 text-center text-xl text-zinc-500 ">
            É extremamente importante que as crianças entrem em contato com a natureza, pois melhora a saúde física e mental, a aprendizagem, o desempenho escolar, além de reduzir os sintomas relacionados à déficit de atenção e hiperatividade, e aumentar o estímulo ao convívio social.
            <br />
            <br />
            Plantar árvores colabora para um mundo melhor, combatendo o aquecimento global e melhorando a qualidade de vide de todos nós.
          </p>
        </div>
       
        
          
      </Grid>
      
      <div className="bg-[#44a930] pt-14">
          <h1 className="font-['Bungee'] text-white text-center text-2xl">Galeria</h1>
      <div class="bg-hero-pattern-nature-texture pb-32 bg-cover mt-10 grid grid-cols-3 md:grid-cols-4 gap-4">
            {
              ImgsChildrensNature.map((img) => (
                <div className="shadow-xl flex items-center mx-auto justify-center rounded-full bg-secondary-yellow opacity-90 h-[148px] w-[148px] overflow-hidden">
                <div className="bg-contain rounded-full h-[140px] w-[140px] overflow-hidden" src>
                  <img className="size-[140px]" src={img.src}  alt={img.alt} />
                </div>
            </div>
              ))
            }
       
          </div>
          </div>
          <Grid>
          <div className="mt-20 flex gap-4 items-center">
            <div className="inline-block rounded-lg h-40 w-4 bg-secondary-yellow"></div>
            <p className="max-w-[312px] text-xl text-zinc-500">
              <span className="font-bold">Incentivamos</span> nossos alunos a
              cuidarem dos recursos naturais,
              ensinando-os a plantar, cuidar
              e admirar as plantas.
            </p>
          </div>
          </Grid>

    </section>
  )
}