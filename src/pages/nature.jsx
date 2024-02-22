import { Grid } from "../containers";

import { ImgsChildrensNature } from "../lib/imgs";

export function Nature(){
  return(
    <section className="mt-20 pb-96 bg-hero-pattern-nature-page bg-cover bg-no-repeat h-auto">
      <Grid>
        <div className="">
        <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">O contato das crianças com a <span className="text-[#44A930]">natureza</span></h1>
        <p className="mt-4 text-center text-xl text-zinc-500 ">
          É extremamente importante que as crianças entrem em contato com a natureza, pois melhora a saúde física e mental, a aprendizagem, o desempenho escolar, além de reduzir os sintomas relacionados à déficit de atenção e hiperatividade, e aumentar o estímulo ao convívio social.
          <br />
          <br />
          Plantar árvores colabora para um mundo melhor, combatendo o aquecimento global e melhorando a qualidade de vide de todos nós.
        </p>
        </div>
       
          
          
      </Grid>
      
      <div class="mt-10 mx-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {
              ImgsChildrensNature.map((img) => (
                <div className="shadow-xl flex items-center mx-auto justify-center rounded-full bg-[#44A930] opacity-90 h-[148px] w-[148px] overflow-hidden">
                <div className="bg-contain rounded-full h-[140px] w-[140px] overflow-hidden" src>
                  <img className="size-40" src={img.src}  alt={img.alt} />
                </div>
            </div>
              ))
            }
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