import IconInstagram from '../assets/insta.svg'
import IconWhatsApp from '../assets/whats.svg'
import IconFacebook from '../assets/face.svg'
export function HeaderContact(){
  return(
    <section className="bg-secondary-yellow h-10 flex flex-row-reverse px-8">
      <div className="bg-[#F54946] h-full p-2">
      <img src={IconWhatsApp} alt="" className="size-5"/>
      </div>
      <div className="bg-[#11BDA7] h-full p-2">
        <img src={IconInstagram} alt="" className="size-5"/>
      </div>
      <div className="bg-[#F57207] h-full p-2">
        <img src={IconFacebook} alt="" className="size-5"/>
      </div>
    </section>
  )
}