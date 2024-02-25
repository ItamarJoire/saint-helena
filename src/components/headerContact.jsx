import IconInstagram from '../assets/insta.svg'
import IconWhatsApp from '../assets/whats.svg'
import IconFacebook from '../assets/face.svg'
export function HeaderContact(){
  return(
    <section className="bg-secondary-yellow h-10 flex flex-row justify-between px-8">
      <div className='flex items-center'>
        <h2 className='font-["Bungee"] text-primary-2 text-sm'>Pólo <span className=''>Salvador</span></h2>
      </div>
      <div className='flex'>
        <div className="bg-[#44a930] h-full p-2">
          <img src={IconInstagram} alt="" className="size-6"/>
        </div>
        <div className="bg-primary h-full p-2">
          <img src={IconFacebook} alt="" className="size-6"/>
        </div>
      </div>
    </section>
  )
}