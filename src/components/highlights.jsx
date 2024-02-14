import { FaMoneyBill, FaBoxOpen, FaStar  } from 'react-icons/fa'

export function Highlights(){
  return(
    <div className="bg-white px-3 py-8 rounded-xl mx-4 mt-[-70px]  drop-shadow-md">
      <h2 className="text-primary text-xl text-center font-bold ">Nossos diferenciais</h2>
      
      <div className='mt-8 text-center'>
        <div>
          <div className='bg-primary inline-block rounded-xl p-4'>
            <FaMoneyBill className='w-6 h-6 text-white'/>
          </div>
          <h6 className='text-primary text-lg font-bold'>Pagamento</h6>
        </div>
        <p className='text-[#9e9e9e] text-base'>Em até 10x sem juros</p>
      </div>
      <div className='mt-8 text-center'>
        <div>
          <div className='bg-primary inline-block rounded-xl p-4'>
            <FaBoxOpen className='w-6 h-6 text-white'/>
          </div>
          <h6 className='text-primary text-lg font-bold'>Frete grátis</h6>
        </div>
        <p className='text-[#9e9e9e] text-base'>Para todo Brasil</p>
      </div>
      <div className='mt-8 text-center'>
        <div>
          <div className='bg-primary inline-block rounded-xl p-4'>
            <FaStar className='w-6 h-6 text-white'/>
          </div>
          <h6 className='text-primary text-lg font-bold'>Garantia</h6>
        </div>
        <p className='text-[#9e9e9e] text-base'>Satisfação do cliente</p>
      </div>
      
      
    </div>
  )
}