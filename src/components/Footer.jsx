import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

import { Grid } from "../containers";

export function Footer(){
  return(
    <div className="bg-primary pt-12">
      <Grid>
        <div className='md:flex md:flex-row-reverse md:justify-end md:items-center md:gap-12'> 
          <div className="flex gap-12">
            <div>
              <ul className="grid gap-3">
                <li className="text-white text-sm font-normal"><a href="/">Sobre</a></li>
                <li className="text-white text-sm font-normal"><a href="/">Serviços</a></li>
                <li className="text-white text-sm font-normal"><a href="/">Depoimentos</a></li>
                <li className="text-white text-sm font-normal"><a href="/">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className='mt-10 pb-12'>
              <h2 className='text-white font-bold text-3xl'>Dinar Decor</h2>
              <ul className='flex gap-3 mt-4'>
                <li><a href="/"><FaWhatsapp  className='text-white' size={24}/></a></li>
                <li><a href="/"><FaInstagram className='text-white' size={24}/></a></li>
              </ul>
          </div>
        </div>
      </Grid>
    </div>
  )
}