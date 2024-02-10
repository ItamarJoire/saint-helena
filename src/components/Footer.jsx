import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

import { Grid } from "../containers";

export function Footer(){
  return(
    <div className="bg-black pt-12">
      <Grid>
        <div className='md:flex md:flex-row-reverse md:justify-end md:items-center md:gap-12'> 
          <div className="flex gap-12">
            <div>
              <ul className="grid gap-2">
                <li className="text-white text-sm font-normal"><a href="/">Sobre</a></li>
                <li className="text-white text-sm font-normal"><a href="/">Serviços</a></li>
                <li className="text-white text-sm font-normal"><a href="/">Depoimentos</a></li>
                <li className="text-white text-sm font-normal"><a href="/">FAQ</a></li>
              </ul>
            </div>
            <div>
              <ul className="grid gap-2">
                <li className="text-white text-sm font-normal"><a href="/">Sobre</a></li>
                <li className="text-white text-sm font-normal"><a href="/">Serviços</a></li>
                <li className="text-white text-sm font-normal"><a href="/">Depoimentos</a></li>
                <li className="text-white text-sm font-normal"><a href="/">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className='mt-12 pb-12'>
              <h2 className='text-white font-bold text-3xl'>WiSchool</h2>
              <ul className='flex gap-4 mt-6'>
                <li><a href="/"><FaInstagram className='text-primary' size={24}/></a></li>
                <li><a href="/"><FaTwitter  className='text-primary' size={24}/></a></li>
                <li><a href="/"><FaFacebook  className='text-primary' size={24}/></a></li>
                <li><a href="/"><FaWhatsapp  className='text-primary' size={24}/></a></li>
              </ul>
          </div>
        </div>
      </Grid>
    </div>
  )
}