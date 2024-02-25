import { FaInstagram, FaWhatsapp, FaClock } from 'react-icons/fa'
import { MdPlace } from "react-icons/md";

import { Grid } from "../containers";

import Logo from '../assets/logo-white.svg'

export function Footer(){
  return(
    <section className="bg-primary pt-2 text-center">
      <Grid>
        <div className='md:flex md:flex-row-reverse md:justify-end md:items-center md:gap-12'> 
          <div className="flex flex-col gap-10 justify-center items-center">
            {/* <div>
              <ul className="grid gap-2">
                <li className="text-white text-base font-normal"><a href="/">Sobre</a></li>
                <li className="text-white text-base font-normal"><a href="/">Nossa Estrutura</a></li>
                <li className="text-white text-base font-normal"><a href="/">Educação infantil</a></li>
                <li className="text-white text-base font-normal"><a href="/">FAQ</a></li>
              </ul>
            </div> */}
            <a href="/"><img src={Logo} alt="" width={70} height={70}/></a>
            <div className='flex flex-col gap-2 items-center'>
              <MdPlace className='text-secondary-yellow size-5 w-8'/>
              <p className="text-white text-base font-normal">Rua Estácio Gonzaga, nº 107 <br /> Horto Floresta <br /> Esquina Dep. Fernando Wilsom Magalhães</p>
            </div>

            <div className='flex flex-col gap-2 items-center'>
              <FaClock className='text-secondary-yellow size-4 w-8'/>
              <p className="text-white text-base font-normal">Estamos abertos de <span className='font-bold'>segunda</span> a <span className=' font-bold'>sexta</span> das 07:30h às 18:00h</p>
            </div>

            
          </div>
        
          <div className='mt-8 border-t-[1px] border-[#CDCDCD] border-opacity-30 rounded'></div>
          <div className=' text-white text-base font-medium text-center py-8'>
            © 2024 - Todos os direitos reservados
            <ul className='flex gap-3 mt-4 justify-center'>
                <li><a href="/"><FaWhatsapp  className='text-white ' size={24}/></a></li>
                <li><a href="/"><FaInstagram className='text-white' size={24}/></a></li>
              </ul>
          </div>
        </div>
      </Grid>
    </section>
  )
}
