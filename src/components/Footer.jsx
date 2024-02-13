import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

import { Grid } from "../containers";

export function Footer(){
  return(
    <div className="bg-primary pt-12">
      <Grid>
        <div className='md:flex md:flex-row-reverse md:justify-end md:items-center md:gap-12'> 
          <div className="flex gap-12">
            <div>
              <ul className="grid gap-4">
                <li className="text-white text-sm font-normal"><a href="/">Sobre</a></li>
                <li className="text-white text-sm font-normal"><a href="/">Serviços</a></li>
                <li className="text-white text-sm font-normal"><a href="/">Depoimentos</a></li>
                <li className="text-white text-sm font-normal"><a href="/">FAQ</a></li>
              </ul>
            </div>
          </div>
        
          <div className='mt-8 border-t-[1px] border-[#CDCDCD] border-opacity-30 rounded'></div>
          <div className=' text-[#CDCDCD] text-sm font-medium text-center py-8'>
            © Desde 2024 - Todos os direitos reservados
            <ul className='flex gap-3 mt-4 justify-center'>
                <li><a href="/"><FaWhatsapp  className='text-[#CDCDCD] ' size={24}/></a></li>
                <li><a href="/"><FaInstagram className='text-[#CDCDCD]' size={24}/></a></li>
              </ul>
          </div>
        </div>
      </Grid>
    </div>
  )
}