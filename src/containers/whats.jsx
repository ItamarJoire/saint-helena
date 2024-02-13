import { useState, useEffect } from "react"

import { FaWhatsapp } from "react-icons/fa"

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

  return(
    <>
      {showScrollTopButton && 
        <a className="fixed bottom-3 right-3 z-50" href="" >
          <div className='bg-primary inline-block rounded-full p-3'>
            <FaWhatsapp className='w-6 h-6 text-white'/>
          </div>
        </a>
      }
    </>
  )
}