import Icon from "./Icons" 

export default function Actions({conta}){
   const acoes = ['Área_Pix', 'Pagar', 'Empréstimo', 'Recarga','Cobrar', 'Transferir' ]
   const valor = (number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL',}).format(number)

   return(
      <>
      {
         acoes.map((acao,index) => (
            <span className="flex flex-col items-center gap-4" key={index}>
               <Icon icon={acao}  title={acao.split('_').join(' ')} 
                     conta={typeof conta != 'object' ? valor(Math.ceil(conta.replace(/\D/g, '')) * .4) : conta}
                     className="[&>i]:bg-[#F0F1F5] [&>i]:rounded-full [&>i]:min-w-[70px] [&>i]:min-h-[70px] [&>i]:p-5 [&>i]:flex [&>i]:justify-center [&>i]:items-center [&>i]:hover:brightness-90 [&>i]:duration-100 
                                 dark:[&>i_path]:stroke-[#fff1F5] dark:[&>i]:bg-[#1f1f1f] "/>
            </span>
         ))
      }
      </>
   )
}
