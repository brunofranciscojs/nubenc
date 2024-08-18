import { useState } from 'react'
import Header from './components/Header'
import Actions from './components/Actions'
import Icon from './components/Icons'
import News from './components/News'

function App() {
  const [conta, setConta] = useState('825,47')

  return (
    <>
      <Header setConta={setConta} />
      <section className="flex justify-between pt-44 text-left items-start w-full px-7">
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

      <section className='flex gap-4 justify-start overflow-x-scroll mt-8 w-full px-7 [&::-webkit-scrollbar]:hidden'>
          <News/>
      </section>
    </>
  )
}

export default App
