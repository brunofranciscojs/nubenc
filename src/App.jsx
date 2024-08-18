import { useState, useEffect } from 'react'
import Header from './components/Header'
import Actions from './components/Actions'
import Icon from './components/Icons'
import News from './components/News'
import CreditCard from './CreditCard'
import Descubra from './Descubra'

function App() {
  const valor = (number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(number)

  const [conta, setConta] = useState('825,47')
  const [emprestimo, setEmprestimo] = useState(conta)

  useEffect(() => {
    typeof conta !== 'object' ? setEmprestimo(valor(Math.round(Number(conta.replace(/\D/g, '')) / 10) * 10 * 0.1211993)) : setEmprestimo(conta);
 }, [conta]);
 
  return (
    <main className="py-16">
      <Header setConta={setConta} />
      <section className="flex justify-between pt-28 text-left items-start w-full px-7">
        <div>
          <h2 className='text-black text-xl font-bold mb-2 dark:text-[#F0F1F5]'>Conta</h2> 
          <h3 className='text-black text-xl font-bold dark:text-[#F0F1F5]'>
            {conta}
          </h3>
        </div>

        <Icon icon={'ir'}/>
      </section>

      <section className='flex gap-4 justify-start overflow-x-scroll mt-8 w-full px-7 [&::-webkit-scrollbar]:hidden'>
        <Actions conta={conta}/>
      </section>
      
      <section className='flex gap-4 justify-start overflow-x-scroll mt-8 w-full px-7 [&::-webkit-scrollbar]:hidden'>
        <div className='bg-[#F0F1F5] dark:bg-[#1f1f1f] rounded-xl w-full mx-auto py-7 px-7 flex items-center gap-3'>
        <Icon icon={'Cartoes'} className={'!gap-0 dark:[&>i_path]:stroke-[#fff1F5]'}/>
        <h2 className='dark:text-[#F0F1F5] text-black text-md font-semibold'>Meus cartões</h2>
        </div>
      </section>

      <section className='flex gap-4 justify-start overflow-x-scroll my-8 w-full px-7 [&::-webkit-scrollbar]:hidden'>
          <News/>
      </section>

        <hr className="border-[#ddd] " />

      <section className="my-8">
        <CreditCard conta={conta}/>
      </section>

        <hr className="border-[#ddd] " />

      <section className='flex gap-4 justify-start overflow-x-scroll my-8 w-full px-7 [&::-webkit-scrollbar]:hidden'>
        <div className=' dark:bg-[#1f1f1f] rounded-xl w-full mx-auto flex flex-col items-start'>
          <h2 className='dark:text-[#F0F1F5] text-black text-md font-semibold mb-5'>Empréstimo</h2> 
          <span>Valor disponível de até</span>
          <h2 className='dark:text-[#F0F1F5] text-black text-md font-semibold'>{emprestimo}</h2>
        </div>
      </section>
      
      <hr className="border-[#ddd]" />

      <section className='overflow-x-scroll w-full px-7 [&::-webkit-scrollbar]:hidden my-8'>
        <h2 className='dark:text-[#F0F1F5] text-black text-md font-semibold mb-8'>Descubra mais</h2>
        <div className="flex justify-start gap-16">
          <Descubra/>
        </div>
      </section>
    </main>
  )
}

export default App
