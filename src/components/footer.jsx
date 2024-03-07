import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

import { Grid } from "../containers";

import Logo from '../assets/logo-white.svg'
import Face from '../assets/face.svg'

export function Footer(){
  return(
    <section className="bg-gradient-to-t from-primary-dark to-primary pt-4 lg:pt-20 text-left">
      <Grid>
        <div> 
          <div className="flex flex-col gap-8 sm:gap-0 sm:grid sm:grid-cols-2 sm:text-left sm:items-end lg:flex lg:flex-row lg:gap-40">
            <div className='flex flex-col gap-8'>
              <a href="/"><img src={Logo} alt="" width={70} height={70} className='xl:w-[80px]'/></a>
              <div>
                <ul className="grid gap-2">
                  <li className="text-white text-base font-normal xl:text-lg"><a href="/">Sobre</a></li>
                  <li className="text-white text-base font-normal xl:text-lg"><a href="/">Nossa Estrutura</a></li>
                  <li className="text-white text-base font-normal xl:text-lg"><a href="/">Educação infantil</a></li>
                  <li className="text-secondary-yellow text-base font-normal xl:text-lg"><a href="/">Entre em contato</a></li>
                  
  
                  <li className="text-white text-base font-normal xl:text-lg"><a href="https://sainthelena.com.br/">Conheça nossa <span className='text-secondary-yellow'>matriz</span></a></li>
                </ul>
              </div>
            </div>
            
            <div className='flex flex-col gap-8 '>
              <div className='flex gap-2 '>
                <p className="text-white text-base font-normal lg:max-w-[400px] xl:text-lg">Rua Estácio Gonzaga, nº 107 Horto - Floresta Esquina Dep. Fernando Wilsom Magalhães</p>
              </div>

              <div className='flex flex-col gap-2 '>
                <p className="text-white text-base font-normal lg:max-w-[400px] xl:text-lg">Estamos abertos de <span className='font-bold'>segunda</span> a <span className=' font-bold'>sexta</span> das 07:30h às 18:00h</p>
              </div>
              <div className='flex flex-col gap-2 '>
                <p className="text-white text-base font-normal lg:max-w-[400px] xl:text-lg">contatosalvador@sainthelena.com.br</p>
                <p className="text-white text-base font-normal lg:max-w-[400px] xl:text-lg">(71) 3215-6901</p>
              </div>

            </div>
          </div>
        
          <div className='mt-8 border-t-[1px] border-[#CDCDCD] border-opacity-30 rounded'></div>
          <div className=' text-white text-base font-medium text-center py-8 xl:text-lg'>
             © 2024 - Todos os direitos reservados
            <ul className='flex gap-3 mt-4 justify-center'>
                <li><a href="https://api.whatsapp.com/send?l=pt&phone=5571993019812&text=Olá! Tudo bem? Quero tirar algumas dúvidas, por favor." target='_blank'><FaWhatsapp  className='text-white ' size={24}/></a></li>
                <li><a href="https://www.instagram.com/sainthelena.salvador/" target='_blank'><FaInstagram className='text-white' size={24}/></a></li>
                <li><a href="https://www.facebook.com/sainthelenasalvador/" target='_blank'><img src={Face} alt=""  className='text-white' size={24}/></a></li>
              </ul>
          </div>
        </div>
      </Grid>
    </section>
  )
}
