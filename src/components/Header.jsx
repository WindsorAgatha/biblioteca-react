import schoolLogo from '../assets/Biblioteca (2).png'
import bgImg from '../assets/tijolinhos.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


function Header({ setLoginOpen, setRegisterOpen, setBlurBg, setIsDarkMode, isDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);




  return (
    <header
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Menu móvel */}
      <nav
        className="md:hidden rounded-sm bg-[#0A2647] px-4 shadow-[0_4px_18px_rgba(10,38,71,0.12)] z-[100] w-full relative"
        aria-label="Menu móvel"
      >
        <div className="flex items-center justify-between h-[70px]">
          <Link to={"/"} className="flex items-center w-full ">
            <img
              className="h-[60px] w-[60px] rounded-full object-cover"
              src={schoolLogo}
              alt="Logo da escola"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)
            }
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
            <Link to="/" className="text-white hover:text-blue-300 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/Livros" className="text-white hover:text-blue-300 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Livros</Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/sugestoes" className="text-white hover:text-blue-300 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Sugestões dos professores</Link>
          </li>
          <li className="px-4 py-2 flex flex-col gap-2">
            <Link to="#"
              onClick={e => {
                e.preventDefault();
                setLoginOpen(true);
                setRegisterOpen(false);
                setMenuOpen(false);
                setBlurBg(true);
              }} className="text-white hover:text-blue-300 transition-colors duration-300 mb-4 z-50">Entrar</Link>

            <Link to="#"
              onClick={e => {
                e.preventDefault();
                setLoginOpen(false);
                setRegisterOpen(true);
                setMenuOpen(false)
                setBlurBg(true);
              }} className="text-white hover:text-blue-300 transition-colors duration-300 z-50">Cadastrar</Link>

          </li>
        </ul>
      </nav>

      {/* Menu principal */}
      <nav
        className=" max-sm:hidden flex items-center justify-between w-full h-[120px] bg-[rgba(10,38,71,0.85)] shadow-[0_4px_18px_rgba(10,38,71,0.12)] rounded-b-md px-[30px] top-0 z-10"
        aria-label="Menu principal"
      >
        <div className="flex items-center min-w-[150px] mr-0 gap-3">
          <img
            className="h-[95px] w-[95px] rounded-full ml-0"
            src={schoolLogo}
            alt="Logo da escola"
          />
          <div className='bg-slate-400 w-20 rounded-md flex h-6 justify-between items-center'>
            <FontAwesomeIcon icon={faMoon} className="text-sky-500" />
            <button onClick={()=>  setIsDarkMode(!isDarkMode)} className={`bg-slate-700 h-5 rounded-full w-5 ${isDarkMode ? 'translate-x-0 ' : ''}`}></button>
            <FontAwesomeIcon icon={faSun} className="text-amber-400" />
          </div>

        </div>

        <div className="flex flex-1 justify-center">
          <ul className="flex text-white gap-8 items-center m-0 p-0 list-none">

            <li className="flex items-center gap-2 rounded px-[14px] py-[6px] justify-center">
              <Link to="/" className="text-white hover:text-blue-300 transition-colors duration-300">Home</Link>
            </li>
            <li className="flex items-center gap-2 rounded px-[14px] py-[6px] justify-center">
              <Link to="/Livros" className="text-white hover:text-blue-300 transition-colors duration-300">Livros</Link>
            </li>
            <li className="flex items-center gap-2 rounded px-[14px] py-[6px] justify-center">
              <Link to="/sugestoes" className="text-white hover:text-blue-300 transition-colors duration-300">Sugestões dos professores</Link>
            </li>
            <li className="flex items-center gap-2 rounded px-[14px] py-[6px] justify-center">
              <Link to="/calendario" className="text-white hover:text-blue-300 transition-colors duration-300">Calendário</Link>
            </li>
          </ul>

        </div>

        <div className="flex items-center min-w-[160px] justify-end">
          <Link
            to="#"
            onClick={e => {
              e.preventDefault();
              setLoginOpen(true);
              setRegisterOpen(false);
              setBlurBg(true);
            }}
            className="text-white hover:text-blue-300 transition-colors duration-300 px-4 py-2 rounded"
          >
            Entrar
          </Link>
          <Link
            to="#"
            onClick={e => {
              e.preventDefault();
              setLoginOpen(false);
              setRegisterOpen(true);
              setBlurBg(true);
            }}
            className="text-white hover:text-blue-300 transition-colors duration-300 px-4 py-2 rounded"
          >
            Registrar
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
