import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'

import { Grid } from "../containers";

import Logo from '../assets/logo-white.svg'

export function Footer(){
  return(
    <section className="bg-gradient-to-t from-primary-dark to-primary pt-4 lg:pt-20 text-left">
      <Grid>
        <div> 
          <div className="flex flex-col gap-8 sm:gap-0 sm:grid sm:grid-cols-2 sm:text-left sm:items-end lg:flex lg:flex-row lg:gap-40">
            <div className='flex flex-col gap-8'>
              <a href="/"><img src={Logo} alt="" width={70} height={70}/></a>
              <div>
                <ul className="grid gap-2">
                  <li className="text-white text-base font-normal"><a href="/">Sobre</a></li>
                  <li className="text-white text-base font-normal"><a href="/">Nossa Estrutura</a></li>
                  <li className="text-white text-base font-normal"><a href="/">Educação infantil</a></li>
                  <li className="text-secondary-yellow text-base font-normal"><a href="/">Entre em contato</a></li>
                  
  
                  <li className="text-white text-base font-normal"><a href="https://sainthelena.com.br/">Conheça nossa <span className='text-secondary-yellow'>matriz</span></a></li>
                </ul>
              </div>
            </div>
            
            <div className='flex flex-col gap-8 '>
              <div className='flex gap-2 '>
                <p className="text-white text-base font-normal lg:max-w-[400px]">Rua Estácio Gonzaga, nº 107 Horto - Floresta Esquina Dep. Fernando Wilsom Magalhães</p>
              </div>

              <div className='flex flex-col gap-2 '>
                <p className="text-white text-base font-normal lg:max-w-[400px]">Estamos abertos de <span className='font-bold'>segunda</span> a <span className=' font-bold'>sexta</span> das 07:30h às 18:00h</p>
              </div>
            </div>
          </div>
        
          <div className='mt-8 border-t-[1px] border-[#CDCDCD] border-opacity-30 rounded'></div>
          <div className=' text-white text-base font-medium text-center py-8'>
            © 2024 - Todos os direitos reservados
            <ul className='flex gap-3 mt-4 justify-center'>
                <li><a href="/"><FaWhatsapp  className='text-white ' size={24}/></a></li>
                <li><a href="/"><FaInstagram className='text-white' size={24}/></a></li>
                {/* <li><a href="/"><FaFacebook className='text-white' size={24}/></a></li> */}
              </ul>
          </div>
        </div>
      </Grid>
    </section>
  )
}
