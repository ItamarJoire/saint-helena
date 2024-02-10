import { useState } from "react";

export function Header(){
  const [navbar, setNavbar] = useState(false);

  return(
    <section>
      <div className='md:hidden'>
        <nav className="bg-white drop-shadow-md">
          <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8 lg:max-w-7xl">
              <div className="flex items-center justify-between py-4 md:block md:py-5">
                <div className="flex items-center">
                  <button className='p-2' onClick={() => setNavbar(!navbar)}>
                    {navbar ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                  </button>
                  <div className="pl-2 text-2xl font-medium">
                    WiSchool
                  </div>
                </div>
                <div></div>
                {/* <a href="/"><img src={Logo} width={54} height={54} alt=''/></a> */}
              </div>
            <div>
              <div className={`flex-1 justify-self-center mt-6 block md:mt-0 ${navbar ? 'py-12 px-2 md:p-0 block' : 'hidden'}`}>
                <ul className="flex flex-col h-screen gap-12 justify-start">
                  <li className="pb-6 text-2xl text-black py-2 px-6 text-center ">
                    <a className='py-2 border-b' href="#about" onClick={() => setNavbar(!navbar)}>Sobre</a>
                  </li>
                  <li className="pb-6 text-2xl text-black py-2 px-6 text-center">
                    <a className='py-2 border-b' href="#services" onClick={() => setNavbar(!navbar)}>Serviços</a>
                  </li>
                  <li className="pb-6 text-2xl text-black py-2 px-6 text-center">
                    <a className='py-2 border-b' href="#testmonials" onClick={() => setNavbar(!navbar)}>Depoimentos</a>
                  </li>
                  <li className="pb-6 text-2xl text-black py-2 px-6 text-center">
                    <a className='py-2 border-b' href="#faq" onClick={() => setNavbar(!navbar)}>Perguntas frequentes</a>
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