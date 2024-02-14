import { Grid } from "../containers"

import { FaWhatsapp } from 'react-icons/fa'

export function Hero(){
  return(
    <div className="bg-primary">
      <Grid>
        <div className="pt-20 pb-40 lg:flex lg:px-16">
          <div>
            <h2 className="font-['Poppins'] font-bold text-white text-5xl capitalize leading-[64px] max-w-[400px] mt-16 md:max-w-[500px] md:text-4xl md:leading-[52px]">O seu lar com beleza e autenticidade</h2>
            <h4 className="mt-4 font-normal text-white text-xl leading-8">Somos apaixonados por transformar rochas naturais em obras-primas esculturais que elevam a decoração da sua casa a um patamar único.</h4>
            
            <div className="bg-white flex items-center justify-center gap-3 w-full h-16 px-6 mt-10 rounded-xl cursor-pointer hover:opacity-90">
              <FaWhatsapp className="w-6 h-6"/>
              <a className="text-primary font-bold text-base uppercase" href="/">Entrar em contato</a>
            </div>
          </div>
        </div>
     </Grid>
    </div>
  )
}