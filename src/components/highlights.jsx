export function Highlights(){
  return(
    <section  className="highContainer bg-white px-3 py-12 rounded-xl  mt-[-70px] drop-shadow-md md:px-32 lg:px-16 lg:mx-16 lg:py-20">
     
    <div className='items'>
    <div>
        <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">Educação infantil</h1>
          <h3 className="">Baseada em 3 pilares</h3>
        </div>
    <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
    <div id='item-1' className='highScrollImg mt-8 text-center lg:text-left'>
      <div>
        <div className='bg-primary inline-block rounded-xl p-4'>
          {/* <FaStar className='w-6 h-6 text-white'/> */}
        </div>
        <h6 className=' text-primary text-xl font-bold lg:mt-2 lg:text-xl'>Elegância Duradoura</h6>
      </div>
      <p className='mt-3 text-[#9e9e9e] text-lg lg:text-lg'>Nossos produtos oferecem uma elegância atemporal que transcende as tendências passageiras da moda.</p>
    </div>
    <div id='item-2' className='highScrollImg mt-8 text-center lg:text-left'>
      <div>
        <div className='bg-primary inline-block rounded-xl p-4'>
          {/* <FaMedal className='w-6 h-6 text-white'/> */}
        </div>
        <h6 className='text-primary text-xl font-bold lg:mt-2 lg:text-xl'>Autenticidade e Originalidade</h6>
      </div>
      <p className='mt-3 text-[#9e9e9e] text-lg lg:text-lg'>Cada peça em nossa coleção é única, refletindo a individualidade e o artesanato cuidadoso que a caracteriza.</p>
    </div>
    <div id='item-3' className='highScrollImg mt-8 text-center lg:text-left'>
      <div>
        <div className='bg-primary inline-block rounded-xl p-4'>
          {/* <MdVerified className='w-6 h-6 text-white'/> */}
        </div>
        <h6 className='text-primary text-xl font-bold lg:mt-2 lg:text-xl'>Versatilidade na Decoração</h6>
      </div>
      <p className='mt-3 text-[#9e9e9e] text-lg lg:text-lg'>Nossa variedade de objetos de arte e peças esculturais em rochas naturais oferece uma ampla gama de opções para complementar qualquer estilo de decoração.</p>
    </div>
    </div>
    </div>
  </section>
  )
}