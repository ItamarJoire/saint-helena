import { useState, useEffect } from "react"

import Lottie from "react-lottie"

import WhatsAnimated from '../lib/whatsAnimated.json'

export function Whats(){
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowScrollTopButton(true)
      }
      else {
        setShowScrollTopButton(false)
      }
    })
  }, [])

  const OptionsWhats = {
    loop: false,
    autoplay: true, 
    animationData: WhatsAnimated,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return(
    <>
      {showScrollTopButton && 
        <a className="fixed bottom-1 right-1 z-50" href="https://api.whatsapp.com/send?l=pt&phone=5571996811525&text=Olá! Tudo bem? Quero tirar algumas dúvidas, por favor." target="_blank" >
          <Lottie options={OptionsWhats} height={84} width={84} />
        </a>
      }
    </>
  )
}