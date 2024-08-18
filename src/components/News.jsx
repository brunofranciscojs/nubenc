import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

export default function News(){
   const news = [
      'Seu informe de rendimentos 2024 já está disponível','Convide alguém para o Nubank e desbloqueie brasões incríveis','Facilite seus planos futuros: guarde dinheiro nas Caxinhas'
   ]

   return(
      <Splide options={{type:'slide', rewind:true, pagination:true, perPage:1, arrows:false, gap:'1rem'}}>
         {news.map((item,key) => (
            <SplideSlide key={key} className="bg-[#2101d81a] dark:bg-[#1f1f1f] rounded-xl py-7 text-black dark:text-[#F0F1F5]">
               <span className="block w-[85%] mx-auto">{item}</span>
            </SplideSlide>
         ))
         }
      </Splide>
   )
}