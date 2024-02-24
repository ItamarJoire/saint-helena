import { Grid } from "../containers";

import { ImgsChildrensNature } from "../lib/imgs";

export function ChildEducation(){
  return(
    <section className="mt-20 pt-6 h-auto bg-[#EDEDEF]">
      <p className="text-red-600 font-bold">FALAR SOBRE A EDUCAÇÃO INFANTIL</p>
      <Grid>
        <div className="mb-20">
          <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">O contato das crianças com a <span className="text-[#44A930]">natureza</span></h1>
          <p className="mt-4 text-center text-xl text-gray-400 ">
            É extremamente importante que as crianças entrem em contato com a natureza, pois melhora a saúde física e mental, a aprendizagem, o desempenho escolar, além de reduzir os sintomas relacionados à déficit de atenção e hiperatividade, e aumentar o estímulo ao convívio social.
            <br />
            <br />
            Plantar árvores colabora para um mundo melhor, combatendo o aquecimento global e melhorando a qualidade de vide de todos nós.
          </p>
        </div>
       
        
          
      </Grid>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#44a930" fill-opacity="1" d="M0,128L120,128C240,128,480,128,720,112C960,96,1200,64,1320,48L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <div className="bg-[#44a930] pt-2">
        
        <h1 className="font-['Bungee'] text-white text-center text-2xl">Galeria</h1>
        <div class="bg-hero-pattern-texture pb-32 bg-cover mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
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
      
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#44a930" fill-opacity="1" d="M0,64L120,64C240,64,480,64,720,58.7C960,53,1200,43,1320,37.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <Grid>
          <div className="mt-0 pb-24 flex gap-4 items-center">
            <div className="inline-block rounded-lg h-40 w-4 bg-secondary-yellow"></div>
            <p className="max-w-[312px] text-xl text-gray-400">
              <span className="font-bold">Incentivamos</span> nossos alunos a
              cuidarem dos recursos naturais,
              ensinando-os a plantar, cuidar
              e admirar as plantas.
            </p>
          </div>
        </Grid>
      </section>
    </section>
  )
}