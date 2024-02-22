import { Link } from "react-router-dom"

import { Grid } from "../containers"
import { Carousel } from "./carousel"

import { ButtonGradient } from '../components';

export function Services(){
  return(
    <div className="bg-hero-pattern-nature bg-cover bg-no-repeat pb-72">
      <section  id="services" className="h-auto text-center">
        <Grid>
          <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">Na Saint Helena seu <span className="text-secondary-yellow">filho tem contato</span> com a natureza
          </h1>
          <h3 className="mt-3 text-zinc-500 text-center opacity-90 text-xl font-medium">Na <strong>Saint Helena Salvador</strong>, priorizamos experiências ao ar livre! Nossas crianças têm contato com a natureza e aprendem desde cedo a cuidar e a se relacionar com o ambiente ao seu redor.
          </h3> 
          
          <Carousel />

          <Link to='/contato-com-a-natureza'>
            <ButtonGradient name='Saiba mais' from='secondary-yellow' to='secondary-yellow-dark' mt='8'/>
          </Link>
        </Grid>
      </section>
    </div>
  )
}