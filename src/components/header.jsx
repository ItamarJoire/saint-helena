import { useState } from 'react';

import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import Logo from '../assets/logo.svg'


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
           <div className='md:flex flex items-center justify-between bg-white py-6 md:px-10 px-7'>
                <a href="/"><img src={Logo} width={70} alt="" /></a>
                   <div>
                    <FaWhatsapp width={60} hanging={60}/>
                    </div>
                <div onClick={()=>setOpen(!open)} className='cursor-pointer md:hidden w-7 h-7'>
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
