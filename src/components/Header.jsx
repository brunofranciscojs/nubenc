import Icon from "./Icons"
import React, { useState } from 'react'

export default function Header({setConta}){
   const [icon, setIcon] = useState('eye')
   const valor = (number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL',}).format(number)

   const hideConta = () =>{
      setIcon(prevIcon => !prevIcon == 'eye' ? 'hidden' : 'eye')
      setConta(preConta => typeof preConta === 'string' ? <Icon icon={'dot'} className={'h-7 -translate-y-4 translate-x-[2px] dark:[&>i_path]:stroke-[#fff1F5] dark:[&>i_path]:fill-[#fff1F5]'}/> : `${valor(Math.floor(Math.random() * 500))}`)
   }

   return(
      <header className="px-7 bg-[--roxo] py-8 fixed top-0 left-0 w-full">
        <div className="flex justify-between">
            <div className="flex flex-col text-white w-[200px] items-start gap-5">

               <div className="relative after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:rounded-full after:bg-white after:-top-1 after:-right-1">
                  <img src="https://vercel.com/api/www/avatar?u=brunofranciscu&s=256" className="rounded-full w-9 h-9 block object-cover object-center" />
               </div>

               <div className="font-semibold text-xl">
                  Olá, Bruno
               </div>
            </div>

            <div className="flex gap-5 self-start">
               <Icon icon={icon} onClick={()=>hideConta()}/>
               <Icon icon={'help'}/>
               <Icon icon={'mail'}/>
            </div>
        </div>
      </header>
   )
}