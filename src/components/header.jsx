// import { useState } from "react";

// import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

// import { Link } from "react-scroll"; 

// import Logo from '../assets/logo.svg'

// export function Header(){
//   const [navbar, setNavbar] = useState(false);

//   return(
//     <section>
//       <div className='relative z-10 md:hidden'>
//         <nav className='absolute z-20 bg-secondary w-full drop-shadow-md '>
//           <div className="justify-between mx-auto md:items-center md:flex md:px-8 lg:max-w-7xl">
//               <div className="flex items-center justify-between py-4 md:block md:py-5">
//                 <div className="flex w-full px-6 items-center justify-between">
//                   <img src={Logo} width={60} height={40} alt="" />
//                   <button className='p-2 ' onClick={() => setNavbar(!navbar)}>
//                     {navbar ? (
//                       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#004F93" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
//                     ) : (
//                       <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#004F93" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
//                     )}
//                   </button>
//                 </div>
//               </div>
//             <div className="bg-white mx-2 rounded-b-xl">
//               <div className={`flex-1 justify-self-center block pt-6 pl-6 md:mt-0 ${navbar ? 'pb-8 px-2 md:p-0 block' : 'hidden'}`}>
//                 <ul className="flex flex-col gap-6 justify-start">
//                   <li className="text-base text-primary text-left ">
//                     <Link to="about" spy={true} smooth={true} offset={0} duration={500} onClick={() => setNavbar(!navbar)}>Quem somos</Link>
//                   </li>
//                   <li className="text-base text-primary text-left">
//                   <Link to="services" spy={true} smooth={true} offset={-10} duration={500} onClick={() => setNavbar(!navbar)}>Serviços</Link>
//                   </li>
//                   <li className="text-base text-primary text-left">
//                   <Link to="testmonials" spy={true} smooth={true} offset={-10} duration={500} onClick={() => setNavbar(!navbar)}>Depoimentos</Link>
//                   </li>
//                   <li className="text-base text-primary text-left">
//                   <Link to="faq" spy={true} smooth={true} offset={-10} duration={500} onClick={() => setNavbar(!navbar)}>FAQ</Link>
//                   </li>
//                   <li className="flex gap-3 text-left">
//                     <a className="text-primary" href="#" onClick={() => setNavbar(!navbar)}><FaWhatsapp className="w-6 h-6"/></a>
//                     <a className="text-primary" href="#" onClick={() => setNavbar(!navbar)}><FaInstagram className="w-6 h-6"/></a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>

//       <header className={`max-md:hidden flex px-6 h-[84px] items-center justify-around ${navbar ? 'hidden' : 'max-md:h-[60vh] max-md:flex-col max-md:gap-1 max-md:items-start max-md:justify-start max-md:bg-gray-800 max-md:w-full'}`}>
//         <div className="pl-2 text-2xl font-semibold">WiSchool</div>.

//         <ul className="flex gap-8 max-md:flex-col">
//           <a href="#about" className="text-gray-op text-base font-semibold hover:opacity-60 duration-150"><li>Sobre</li></a>
//           <a href="#slides" className="text-gray-op text-base font-semibold hover:opacity-60 duration-150"><li>Slides</li></a>
//           <a href="#testmonials" className="text-gray-op text-base font-semibold hover:opacity-60 duration-150"><li>Depoimentos</li></a>
//           <a href="#testmonials" className="text-gray-op text-base font-semibold hover:opacity-60 duration-150"><li>Perguntas frequentes</li></a>
//         </ul>
//       </header>
//   </section>
//   )
// }

import React, { useState } from 'react';

export function Header(){
    let Links =[
        {name:"HOME", link:"/"},
        {name:"SERVICE", link:"/"},
        {name:"ABOUT", link:"/"},
        {name:"CONTACT", link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-white py-6 md:px-10 px-7'>
                <h2 className='text-2xl'>Inscribe</h2>
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#004F93" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> : <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#004F93" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                }
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
                <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
            </ul>
           </div>
        </div>
    );
};
