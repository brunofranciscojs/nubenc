import React from 'react'

export default function Descubra(){
   const mais = {
      Área_de_seguros_do_Nu:'Toda proteção para você e para quem você ama num só lugar.',
      Seguro_de_vida: 'Cuide de quem você amaa de um jeito simples e que cabe no seu bolso.',
      Indique_o_Nu_para_amigos: 'Espalhe comoe é simples estar no controle',
      Portabilidade_de_salário: 'Sua liberdade financeira comeca com você escolhendo...',
      Whatsapp: 'Pagamentos seguros, rápidos e sem tarifa. A experiência Nubank sem nem sair da conversa'
   }

   return(
      <>
         {Object.entries(mais).map((item,index) =>(
            <article className="flex flex-col gap-1 min-w-[250px] max-w-[250px] bg-[#F0F1F5] rounded-xl overflow-hidden" key={index}>
               <img src="https://th.bing.com/th/id/OIP.jPGjaAILlFI90W_WhTX_TAHaE8?pid=ImgDet&w=269.74930362116993&h=180&c=7" className="block w-full mx-auto h-28 object-cover" />
               <div className="flex flex-col gap-4 px-5 py-8">
                  <h2 className="font-bold text-black text-base">{item[0].replace(/\_/g,' ')}</h2>
                  <span className="leading-none text-sm">{item[1]}</span>
                  <button className="bg-[--roxo] text-white rounded-full px-6 py-2 w-fit">Conhecer</button>
               </div>
            </article>
         ))}
      </>
   )
}