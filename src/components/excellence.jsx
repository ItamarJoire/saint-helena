import { Grid } from "../containers";

import ImgStamp from '../assets/stampCamb.png'

export function Excellence(){
  return(
    <section className="bg-hero-pattern-camb bg-cover h-auto">
      <Grid >
        <div className="flex flex-col items-center space-y-6">

          <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">Currículo internacional <span className="text-secondary-yellow">"Cambridge internacional school"</span></h1>

          <img src={ImgStamp}  className="w-[260px]" alt="" />
        </div>
      </Grid>
    </section>
  )
}