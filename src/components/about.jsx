import { Grid } from "../containers"

import ImgWhoWeAre from "../assets/about.png"

export function About(){
  return(
    <Grid>
      <div className="py-10">
        <img className="rounded mx-auto"  src={ImgWhoWeAre} alt="" />
        <h2 className="mt-4 uppercase text-xl font-bold text-center tracking-wide text-primary">Quem somos</h2>
        <p className="mt-4 px-3 text-[#9e9e9e] text-xl text-center leading-8">
        Bem-vindo à <span className="font-bold">Dinar Decor</span>, onde transformamos residências em verdadeiras obras de arte. Acreditamos que cada lar é uma expressão única do estilo e personalidade de seus moradores.<br/><br/> Nossa missão é oferecer soluções de decoração que transcendem o comum, utilizando mármores esculpidos para criar ambientes que não apenas encantam visualmente, mas também elevam a experiência de viver em cada espaço.

        </p>
      </div>
    </Grid>
  )
}