import schoolLogo from '../assets/Capturar.png'
import { useState } from 'react';

function Header({ setLoginOpen, setRegisterOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Menu móvel */}
      <nav
        className="md:hidden bg-[#0A2647] px-4 shadow-[0_4px_18px_rgba(10,38,71,0.12)] z-[100] w-screen relative"
        aria-label="Menu móvel"
      >
        <div className="flex items-center justify-between h-[70px]">
          <img
            className="h-12 w-12 rounded-full"
            src={schoolLogo}
            alt="Logo da escola"
          />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`bg-transparent border-0 text-[#c5c5c5] text-[2rem] cursor-pointer p-2 rounded-lg transition-transform duration-300 ease-in-out ml-auto
              ${menuOpen ? 'rotate-90' : 'rotate-0'}`}
            aria-label="Abrir menu"
          >
            &#9776;
          </button>
        </div>
        <ul
          className={`
            md:hidden absolute top-[70px] left-0 w-screen bg-[#0A2647] flex flex-col gap-3 m-0 py-6 list-none
            transition-all duration-900 ease-in-out 
            ${menuOpen
              ? 'opacity-100 pointer-events-auto translate-y-0'
              : 'opacity-0 pointer-events-none -translate-y-5'}
          `}
          style={{ zIndex: 99 }}
        >
          <li className="px-4 py-2">
            <a href="/" className="text-white hover:text-blue-300 transition-colors duration-300">Home</a>
          </li>
          <li className="px-4 py-2">
            <a href="/Livros" className="text-white hover:text-blue-300 transition-colors duration-300">Livros</a>
          </li>
          <li className="px-4 py-2">
            <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">Sugestões dos professores</a>
          </li>
          <li className="px-4 py-2 flex flex-col gap-2">
            <a href="#" onClick={() => setLoginOpen(true)} className="text-white hover:text-blue-300 transition-colors duration-300 mb-4">Entrar</a>
            <a href="#" onClick={() => setRegisterOpen(true)} className="text-white hover:text-blue-300 transition-colors duration-300">Cadastrar</a>
          </li>
        </ul>
      </nav>

      {/* Menu principal */}
      <nav
        className="max-sm:hidden flex items-center justify-between w-full h-[120px] bg-[rgba(10,38,71,0.85)] shadow-[0_4px_18px_rgba(10,38,71,0.12)] rounded-b-md px-[30px] top-0 z-10"
        aria-label="Menu principal"
      >
        <div className="flex items-center min-w-[150px] mr-0">
          <img
            className="h-[95px] w-[95px] rounded-full ml-0"
            src={schoolLogo}
            alt="Logo da escola"
          />
        </div>

        <div className="flex flex-1 justify-center">
          <ul className="flex text-white gap-8 items-center m-0 p-0 list-none">
            <li className="flex items-center gap-2 rounded px-[14px] py-[6px] justify-center">
              <a href="/" className="text-white hover:text-blue-300 transition-colors duration-300">Home</a>
            </li>
            <li className="flex items-center gap-2 rounded px-[14px] py-[6px] justify-center">
              <a href="/Livros" className="text-white hover:text-blue-300 transition-colors duration-300">Livros</a>
            </li>
            <li className="flex items-center gap-2 rounded px-[14px] py-[6px] justify-center">
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">Sugestões dos professores</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center min-w-[160px] justify-end">
          <a
            href="#"
            onClick={() => setLoginOpen(true)}
            className="text-white hover:text-blue-300 transition-colors duration-300 px-4 py-2 rounded"
          >
            Entrar
          </a>
          <a
            href="#"
            onClick={() => setRegisterOpen(true)}
            className="text-white hover:text-blue-300 transition-colors duration-300 px-4 py-2 rounded"
          >
            Registrar
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
