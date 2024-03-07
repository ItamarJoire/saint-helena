import IconInstagram from '../assets/insta.svg'
import IconFacebook from '../assets/face.svg'

import { FaInstagram } from 'react-icons/fa'

export function HeaderContact(){
  return(
    <section className="bg-secondary-yellow h-10 flex flex-row justify-between w-full px-8">
      <div className='flex items-center'>
        <h2 className='font-["Bungee"] text-primary-2 text-sm'>Pólo <span className=''>Salvador</span></h2>
      </div>
      <div className='flex'>
        <div className="bg-[#44a930] h-full p-2">
          <a href="https://www.instagram.com/sainthelena.salvador/" target='_blank'>
            <FaInstagram className="size-6 text-white"/>
            </a>
        </div>
        <div className="bg-primary h-full p-2">
          <a href="https://www.facebook.com/sainthelenasalvador/" target='_blank'><img src={IconFacebook} alt="" className="size-6"/></a>
        </div>
      </div>
    </section>
  )
}