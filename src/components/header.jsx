import { useState } from "react";

import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

import { Link } from "react-router-dom"; 

import Logo from '../assets/logo-white.svg'

export function Header(){
  const [navbar, setNavbar] = useState(false);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Toca da Coruja - Saint Helena.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Toca da Coruja - Saint Helena.pdf';
        alink.click();
      })
    })
  }

  return(
    <section>
      <div className='relative z-10 lg:hidden '>
        <nav className='absolute z-20 bg-primary w-full drop-shadow-md sm:px-16'>
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
                    <Link to="/sobre" onClick={() => setNavbar(!navbar)}>Início</Link>
                  </li>
                  <li className="text-xl text-primary-2 text-center">
                  <Link to="/estrutura-salvador" onClick={() => setNavbar(!navbar)}>Nossa estrutura</Link>
                  </li>
                  <li className="text-xl text-primary-2 text-center">
                  <Link to="/educacao-infantil" onClick={() => setNavbar(!navbar)}>Educação infantil</Link>
                  </li>
                  <li className="text-xl text-primary-2 text-center underline hover:cursor-pointer" onClick={onButtonClick}>
                    Toca da coruja
                  </li>

                  <li className="pb-2 flex gap-3 text-center">
                    <a href="https://api.whatsapp.com/send?l=pt&phone=5571993019812&text=Olá! Tudo bem? Quero tirar algumas dúvidas, por favor." target="_blank">
                      <button className="font-['Bungee'] text-xl shadow-md font-medium rounded-lg px-6 py-3 bg-gradient-to-t from-secondary-yellow-dark to-secondary-yellow text-white hover:opacity-90 duration-200">
                        Entre em contato
                      </button>
                    </a>
                  </li>
                  
                  
                  <li className="text-xl text-primary-2 text-center">
                  <div className="pt-6 border-t-[1px] border-[#CDCDCD]"></div>
                  <a href="https://sainthelena.com.br/" target="_blank" onClick={() => setNavbar(!navbar)}>Conheça nossa <span className="text-secondary-yellow underline">matriz</span></a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <header className={`drop-shadow-md max-md:hidden flex px-6 h-[84px] xl:h-[94px] items-center justify-around ${navbar ? 'hidden' : 'max-md:h-[60vh] max-md:flex-col max-md:gap-1 max-md:items-start max-md:justify-start bg-primary max-md:w-full'}`}>
      <a href="/"><img src={Logo} width={80} height={80} alt="" className="xl:w-[90px]"/></a>

        <ul className="flex gap-8 max-md:flex-col items-center">
          <Link to="/sobre" className="font-['Bungee'] text-white text-base font-semibold hover:opacity-60 duration-150 hover:cursor-pointer tracking-widest xl:text-xl"><li>Início</li></Link>

          <Link to="/estrutura-salvador" className="font-['Bungee'] text-white text-base font-semibold hover:opacity-60 duration-150 hover:cursor-pointer tracking-widest xl:text-xl"><li>Estrutura</li></Link>
          
          <Link to="/educacao-infantil" className="font-['Bungee'] text-white text-base font-semibold hover:opacity-60 duration-150 hover:cursor-pointer tracking-widest xl:text-xl"><li>Infantil</li></Link>
        
        <li onClick={onButtonClick} className="font-['Bungee'] text-white text-base font-semibold hover:opacity-60 duration-150 hover:cursor-pointer tracking-widest xl:text-xl underline">Toca da coruja</li>
        <a href="https://api.whatsapp.com/send?l=pt&phone=5571993019812&text=Olá! Tudo bem? Quero tirar algumas dúvidas, por favor." target="_blank" className="font-['Bungee'] text-white text-base font-semibold hover:opacity-60 duration-150 hover:cursor-pointer tracking-widest"><li><button className="font-['Bungee'] text-lg shadow-md font-medium rounded-lg px-6 py-2 bg-gradient-to-r from-secondary-yellow to-secondary-yellow-dark text-white hover:opacity-90 duration-200 xl:text-xl">
          Contato
        </button></li></a>
        </ul>
      </header>
  </section>
  )
}

