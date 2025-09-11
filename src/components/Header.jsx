import schoolLogo from '../assets/Capturar.png'

function Header({ setLoginOpen,setRegisterOpen }) {
  return (
    <header>
      {/* Menu móvel */}
      <nav 
        className="hidden bg-[#0A2647] px-4 shadow-[0_4px_18px_rgba(10,38,71,0.12)] relative z-[100]" 
        aria-label="Menu móvel"
      >
        <div className="flex items-center justify-between h-[70px] relative">
          <img 
            className="h-12 w-12 rounded-full" 
            src={schoolLogo} 
            alt="Logo da escola"
          />
          <button 
            className="bg-transparent border-0 text-[#c5c5c5] text-[2rem] cursor-pointer p-2 rounded-lg transition-[background,transform] duration-200 ease-[cubic-bezier(.4,0,.2,1)] ml-auto"
            aria-label="Abrir menu"
          >
            &#9776;
          </button>
        </div>
        <ul className="absolute top-[70px] left-0 w-screen bg-[#0A2647] flex flex-col gap-3 m-0 py-6 list-none opacity-0 pointer-events-none -translate-y-5 transition-opacity duration-200 ease-[cubic-bezier(.4,0,.2,1)] transition-transform duration-400">
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
            <a href="#" onClick={() => setLoginOpen(true)} className="text-white hover:text-blue-300 transition-colors duration-300">Entrar/</a>
            <a href="#" onClick={() => setRegisterOpen(true)} className="text-white hover:text-blue-300 transition-colors duration-300">Cadastrar</a>
          </li>
        </ul>
      </nav>

      {/* Menu principal */}
      <nav 
        className="flex items-center justify-between w-full h-[120px] bg-[rgba(10,38,71,0.85)] shadow-[0_4px_18px_rgba(10,38,71,0.12)] rounded-b-md px-[30px] sticky top-0 z-10" 
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
