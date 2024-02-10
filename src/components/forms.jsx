import { useState } from "react"

import emailjs from '@emailjs/browser'

import { Grid } from '../containers'

export function Forms(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault()

    if(name === '' || email === '' || message === ''){
      alert('Preencha todos os campos!')
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
      
    emailjs.send("service_yx8ward", "template_4zczz3k", templateParams, "n4iH1yMoDUj7lnK6e")
    .then((response) => {
      console.log('Email enviado', response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log('Erro', err)
    })
    
  }

  return(
    <Grid>
      <div className="flex flex-col my-8">
        <h1 className="text-xl font-semibold mb-4">Entre em contato</h1>

        <form className="flex flex-col gap-4 sm:w-[80%] sm:mx-auto" onSubmit={sendEmail}>
          <input 
            className="h-10 p-4 outline-none border-2 rounded placeholder:text-primary "
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          
          <input
            className="h-10 p-4 outline-none border-2 rounded placeholder:text-primary"
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea 
            className="h-40 p-4 outline-none border-2 rounded placeholder:text-primary resize-none"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="bg-primary flex items-center justify-center w-48 h-16 px-6 mt-4 rounded cursor-pointer hover:opacity-90 text-white font-semibold text-base capitalize" type="submit" value="Enviar" />
        </form>
      </div>
    </Grid>
  )
}