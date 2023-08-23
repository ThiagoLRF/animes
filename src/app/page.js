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
      <Titulo>Mais Assistidos</Titulo>
  </>
  )
}
