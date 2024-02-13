import { useState } from "react";

import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export function Header(){
  const [navbar, setNavbar] = useState(false);

  return(
    <section>
      <div className='relative z-10 md:hidden'>
        <nav className='absolute z-20 bg-primary w-full drop-shadow-md'>
          <div className="justify-between mx-auto md:items-center md:flex md:px-8 lg:max-w-7xl">
              <div className="flex items-center justify-between py-4 md:block md:py-5">
                <div className="flex w-full px-6 items-center justify-between">
                  <div className="text-white text-2xl font-medium">
                    Dinar Decor
                  </div>
                  <button className='p-2' onClick={() => setNavbar(!navbar)}>
                    {navbar ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                  </button>
                </div>
              </div>
            <div className="bg-white mx-2 rounded-b-xl">
              <div className={`flex-1 justify-self-center block pt-8 pl-4 md:mt-0 ${navbar ? 'pb-8 px-2 md:p-0 block' : 'hidden'}`}>
                <ul className="flex flex-col gap-6 justify-start">
                  <li className="text-xl text-primary text-left ">
                    <a href="#about" onClick={() => setNavbar(!navbar)}>Quem somos</a>
                  </li>
                  <li className="text-xl text-primary text-left">
                    <a href="#services" onClick={() => setNavbar(!navbar)}>Serviços</a>
                  </li>
                  <li className="text-xl text-primary text-left">
                    <a href="#testmonials" onClick={() => setNavbar(!navbar)}>Depoimentos</a>
                  </li>
                  <li className="text-xl text-primary text-left">
                    <a href="#faq" onClick={() => setNavbar(!navbar)}>FAQ</a>
                  </li>
                  <li className="flex gap-3 text-left">
                    <a className="text-primary" href="#" onClick={() => setNavbar(!navbar)}><FaWhatsapp className="w-7 h-7"/></a>
                    <a className="text-primary" href="#" onClick={() => setNavbar(!navbar)}><FaInstagram className="w-7 h-7"/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <header className={`max-md:hidden flex px-6 h-[84px] items-center justify-around ${navbar ? 'hidden' : 'max-md:h-[60vh] max-md:flex-col max-md:gap-1 max-md:items-start max-md:justify-start max-md:bg-gray-800 max-md:w-full'}`}>
        <div className="pl-2 text-2xl font-semibold">WiSchool</div>.

        <ul className="flex gap-8 max-md:flex-col">
          <a href="#about" className="text-gray-op text-base font-semibold hover:opacity-60 duration-150"><li>Sobre</li></a>
          <a href="#slides" className="text-gray-op text-base font-semibold hover:opacity-60 duration-150"><li>Slides</li></a>
          <a href="#testmonials" className="text-gray-op text-base font-semibold hover:opacity-60 duration-150"><li>Depoimentos</li></a>
          <a href="#testmonials" className="text-gray-op text-base font-semibold hover:opacity-60 duration-150"><li>Perguntas frequentes</li></a>
        </ul>
      </header>
  </section>
  )
}