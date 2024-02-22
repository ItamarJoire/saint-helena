import { useState } from "react";

import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

import { Link } from "react-scroll"; 

import Logo from '../assets/logo-white.svg'

export function Header(){
  const [navbar, setNavbar] = useState(false);

  return(
    <section>
      <div className='relative z-10 md:hidden'>
        <nav className='absolute z-20 bg-primary w-full drop-shadow-md'>
          <div className="justify-between mx-auto md:items-center md:flex md:px-8 lg:max-w-7xl">
              <div className="flex items-center justify-between py-4 md:block md:py-5">
                <div className="flex w-full px-6 items-center justify-between">
                  <a href="/"><img src={Logo} width={70} height={70} alt="" /></a>
                  <button className='p-2' onClick={() => setNavbar(!navbar)}>
                    {navbar ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                  </button>
                </div>
              </div>
            <div className="bg-primary mx-2 rounded-b-2xl">
              <div className={`flex-1  justify-self-center block pt-6 pl-6 md:mt-0 transition-all duration-300 ease-in ${navbar ? 'pb-8 px-2 md:p-0 block' : 'hidden'}`}>
                <ul className="font-['Bungee'] font-normal tracking-widest flex flex-col gap-6  items-center">
                  <li className="text-xl text-primary-2 text-center ">
                    <Link to="about" spy={true} smooth={true} offset={0} duration={500} onClick={() => setNavbar(!navbar)}>Quem somos</Link>
                  </li>
                  <li className="text-xl text-primary-2 text-center">
                  <Link to="services" spy={true} smooth={true} offset={-10} duration={500} onClick={() => setNavbar(!navbar)}>Serviços</Link>
                  </li>
                  <li className="text-xl text-primary-2 text-center">
                  <Link to="faq" spy={true} smooth={true} offset={-10} duration={500} onClick={() => setNavbar(!navbar)}>FAQ</Link>
                  </li>
                  <li className="flex gap-3 text-center">
                    <button className="font-['Bungee'] text-xl shadow-md font-medium rounded-lg px-6 py-3 bg-gradient-to-r from-secondary-yellow to-secondary-yellow-dark text-white hover:opacity-90 duration-200">
                      Entre em contato
                    </button>
                  </li>
                  <li className="flex gap-3 text-center">
                    <a className="text-primary-2" href="https://api.whatsapp.com/send?l=pt&phone=5571996811525&text=Olá! Tudo bem? Quero tirar algumas dúvidas, por favor." target="_blank" onClick={() => setNavbar(!navbar)}><FaWhatsapp className="size-7"/></a>
                    <a className="text-primary-2" href="https://www.instagram.com/dinah.decor/" target="_blank" onClick={() => setNavbar(!navbar)}><FaInstagram className="size-7"/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <header className={`drop-shadow-md max-md:hidden flex px-6 h-[84px] items-center justify-around ${navbar ? 'hidden' : 'max-md:h-[60vh] max-md:flex-col max-md:gap-1 max-md:items-start max-md:justify-start bg-primary max-md:w-full'}`}>
      <a href="/"><img src={Logo} width={80} height={80} alt="" /></a>

        <ul className="flex gap-8 max-md:flex-col">
        <Link to="about" spy={true} smooth={true} offset={0} duration={500} className="text-white text-base font-semibold hover:opacity-60 duration-150 cursor-pointer"><li>Sobre</li></Link>
        <Link to="services" spy={true} smooth={true} offset={0} duration={500} className="text-white text-base font-semibold hover:opacity-60 duration-150 cursor-pointer"><li>Serviços</li></Link>
        <Link to="faq" spy={true} smooth={true} offset={0} duration={500} className="text-white text-base font-semibold hover:opacity-60 duration-150 cursor-pointer"><li>FAQ</li></Link>
        </ul>
        
        <div className="hidden lg:flex lg:gap-3">
          <a className="text-white cursor-pointer" href="https://api.whatsapp.com/send?l=pt&phone=5571996811525&text=Olá! Tudo bem? Quero tirar algumas dúvidas, por favor." target="_blank" onClick={() => setNavbar(!navbar)}><FaWhatsapp className="w-6 h-6"/></a>
          <a className="text-white cursor-pointer" href="https://www.instagram.com/dinah.decor/" target="_blank" onClick={() => setNavbar(!navbar)}><FaInstagram className="w-6 h-6"/></a>
          
        </div>
      </header>
  </section>
  )
}

