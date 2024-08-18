import { useEffect, useState } from 'react'

export default function CreditCard({ conta }) {
   const valor = (number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(number)
   const [cc, setCc] = useState(conta)
   const [limite, setLimite] = useState(conta)

   useEffect(() => {
      if(typeof conta !== 'object'){
         setCc(valor(conta.replace(/\D/g, '') * 0.018))
         setLimite(valor(conta.replace(/\D/g, '') * 0.05))
      }else{
         setCc(conta)
         setLimite(conta)
      }

   }, [conta])

   return (
      <div className=' rounded-xl w-full mx-auto py-2 px-7 flex items-start flex-col gap-1'>
         <h2 className='dark:text-[#F0F1F5] text-black text-md font-semibold'>Cartão de crédito</h2>
         <small className='dark:text-[#1f1f1f]'>Fatura atual</small>
         <h3 className='dark:text-[#1f1f1f]'>{cc}</h3>
         <small className="flex dark:text-[#1f1f1f]">Limite disponível de&nbsp;&nbsp;{limite}</small>
      </div>
   )
}
