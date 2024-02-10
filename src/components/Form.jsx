import { useState } from "react"
import emailjs from '@emailjs/browser'


export function Form(){
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
    <div className="flex flex-col">
      <h1>Contato</h1>

      <form className="flex flex-col gap-4" onSubmit={sendEmail}>
        
        <input 
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}