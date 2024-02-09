import { Grid } from "../containers"

import ImgHero from '../assets/img-hero.png'

export function Hero(){
  return(
    <Grid>
      <div className="bg-hero-pattern bg-no-repeat bg-center bg-cover mt-3 md:rounded-3xl">
        <div className="py-16 md:flex md:px-16">
          <div>
            <h2 className="font-['Poppins'] font-bold text-3xl leading-10 capitalize w-full mt-16 md:-w-full md:text-4xl md:leading-[52px]"><span className="text-primary">Educação de qualidade</span> por qualquer meio necessário.</h2>

            <div className="bg-primary flex items-center justify-center w-48 h-16 px-6 mt-8 rounded cursor-pointer hover:opacity-90">
              <a className="text-white font-semibold text-base capitalize" href="/">Entrar em contato</a>
            </div>
          </div>
          <img className="mt-16 mx-auto md:w-[500px] md:h-[400px]" src={ImgHero} alt="" />
        </div>
      </div>
    </Grid>
  )
}