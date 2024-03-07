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
        <a className="fixed bottom-3 right-3 z-50" href="" >
          <Lottie options={OptionsWhats} height={84} width={84} />
        </a>
      }
    </>
  )
}