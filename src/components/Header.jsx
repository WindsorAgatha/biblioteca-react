import schoolLogo from '../assets/Capturar.png'
import React, { useState } from 'react';


  return (
    <header>
      {/* Menu móvel */}
      <nav
        className="bg-[#0A2647] md:absolute relative md:invisible px-4 shadow-[0_4px_18px_rgba(10,38,71,0.12)] h-24"
        aria-label="Menu móvel"
      >
        <div className="flex items-center justify-between h-[70px]">
          <img
            className="h-16 w-16 rounded-full mt-6"
            src={schoolLogo}
            alt="Logo da escola"
          />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-transparent mt-3 border-0 text-[#c5c5c5] text-[2rem] cursor-pointer p-2 rounded-lg transition-[background,transform] duration-200 ease-[cubic-bezier(.4,0,.2,1)] ml-auto"
            aria-label="Abrir menu"
          >
            &#9776;
          </button>
        </div>
        <ul className={`mt-3 absolute top-[70px] left-0 w-screen bg-[#0A2647] flex flex-col gap-3 m-0 py-6 list-none transition-all duration-300 ease-in-out ${
          menuOpen
            ? ''
            : 'h-0 hidden transition-all duration-300 ease-in-out overflow-hidden'
        }`}>
          <li className="px-4 py-2">
            <a href="/" className="text-white hover:text-blue-300 transition-colors duration-300">Home</a>
          </li>
          <li className="px-4 py-2">
            <a href="/Livros" className="text-white hover:text-blue-300 transition-colors duration-300">Livros</a>
          </li>
          <li className="px-4 py-2">
            <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">Sugestões dos professores</a>
          </li>
          <li className="px-4 py-2">

          </li>
        </ul>
      </nav>

      {/* Menu principal */}
      <nav
        className="flex items-center justify-between md:relative md:visible invisible w-full h-0 md:h-[120px] bg-[rgba(10,38,71,0.85)] shadow-[0_4px_18px_rgba(10,38,71,0.12)] rounded-b-md px-[30px] sticky top-0 z-10"
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

export default Header;
