import Image from 'next/image'
import Titulo from "@/components/Titulo";

export default function Home() {
  return ( // JSX
  <>
    <nav className='flex p-4 bg-red-800'>
        <ul className='flex gap-20'>
          <li>
            <a href='#'>
              <h1>FiapAnimes</h1>  
            </a>
          </li>
          <li>
            <a href='#'>
              Lançamentos
            </a>
          </li>
          <li>
            <a href='#'>
              Tendências
            </a>
          </li>
          <li>
            <a href='#'>
              Top Animes
            </a>
          </li>
          <li>
            <a href='#'>
              Favoritos
            </a>
          </li>
        </ul>
      </nav>

      <Titulo>Tendências</Titulo>
      <div id='card' className="flex flex-col w-40 justify-center items-center">
        <img src="https://fakeimg.pl/150x220" alt="" />
        <span className='font-bold text center line-clamp-1'>titulo do filme do card</span>
      
          <span>6.0</span>
        <div>
          <a href="#" className='bg-red-800 py-2 w-full rounded text-center'>saiba Mais</a>
        </div>
      <Titulo>Mais Assistidos</Titulo>
      </div>
  </>
  )
}
