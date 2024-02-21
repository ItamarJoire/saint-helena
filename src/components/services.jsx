import { Grid } from "../containers";
import { Carousel } from "./carousel";

export function Services(){
  return(
    <div className="bg-primary-2">
    <section id="services" className="h-[80vh] ">
      <Grid>
        <h1 className="font-['Bungee'] text-primary text-xl text-center font-extrabold tracking-widest">Na Saint Helena seu <span className="text-secondary-yellow">filho tem contato</span> com a natureza</h1>
        <h3 className="mt-3 text-zinc-500 text-center opacity-90 text-lg font-medium">Na <strong>Saint Helena Salvador</strong>, priorizamos experiências ao ar livre! Nossas crianças têm contato com a natureza e aprendem desde cedo a cuidar e a se relacionar com o ambiente ao seu redor.</h3> 

        <Carousel />
      </Grid>
    </section>
    </div>
  )
}