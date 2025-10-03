import React from 'react'

function Sidebar({ isSideBarOpen, setSideBarOpen }) {


    const menuLinks = [
        "Alunos",
        "Professores",
        "Livros",
        "Eventos",
        "Notícias",
        "Turmas",
        "Sugestões",
        "Desafios",
    ]


    return (
        <div className="flex justify-items-start">
            <nav className={`bg-gray-800 relative text-white min-h-screen p-4 h-full w-16 transition-all duration-200  ${isSideBarOpen ? 'max-sm:w-10/12 w-3/12' : ''}`}>

                <button
                    onClick={() => setSideBarOpen(!isSideBarOpen)
                    }
                    className={`bg-transparent border-0 absolute right-1 text-[#c5c5c5] text-[2rem] cursor-pointer p-2 rounded-lg transition-transform duration-300 ease-in-out ml-auto
              ${isSideBarOpen ? 'rotate-0' : 'rotate-90'}`}
                    aria-label="Abrir menu"
                >
                    &#9776;
                </button>
                <div className={`w-4/5`}>
                    <ul className='top-50 '>
                        {menuLinks.map((link => {

                            return (
                                <li className='mb-2 bg-gray-600 rounded-sm hover:bg-slate-500 p-5 w-auto'>{link}</li>
                            )
                        }))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
