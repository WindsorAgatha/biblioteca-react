import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ isSideBarOpen, setSideBarOpen }) {

    const menuOptions = [
        {
            name: "Alunos",
            url: "/alunos"
        },
        {
            name: "Professores",
            url: "/professores"
        },
        {
            name: "Livros",
            url: "/livros"
        },
        {
            name: "Eventos",
            url: "/eventos"
        },
        {
            name: "Notícias",
            url: "/noticias"
        },
        {
            name: "Turmas",
            url: "/turmas"
        },
        {
            name: "Sugestões",
            url: "/sugestoes"
        },
        {
            name: "Desafios",
            url: "/desafios"
        },
    ]

    return (
        <>

            <div className="flex w-full z-50">
                <nav className={`bg-gray-800 text-white min-h-screen transition-all duration-200 absolute flex flex-col ${isSideBarOpen ? ' p-4 w-2/6 max-sm:w-5/6' : 'w-16 p-0'}`}>
                    {/* Botão fixo na borda direita da navbar, só aparece quando aberta */}
                    {isSideBarOpen && (
                        <button
                            onClick={() => setSideBarOpen(false)}
                            className="bg-gray-900 border-0 text-[#c5c5c5] text-[2rem] cursor-pointer p-2 rounded-lg shadow-lg absolute top-4 right-4 z-20 transition-transform duration-300 ease-in-out"
                            aria-label="Fechar menu"
                            style={{ boxShadow: '0 4px 16px rgba(30,41,59,0.7)' }}
                        >
                            &#10005;
                        </button>
                    )}
                    {!isSideBarOpen && (
                        <button
                            onClick={() => setSideBarOpen(true)}
                            className="bg-gray-900 border-0 text-[#c5c5c5] text-[2rem] cursor-pointer p-2 rounded-lg shadow-lg absolute top-4 right-2 z-20 transition-transform duration-300 ease-in-out"
                            aria-label="Abrir menu"
                            style={{ boxShadow: '0 4px 16px rgba(30,41,59,0.7)' }}
                        >
                            &#9776;
                        </button>
                    )}
                    {/* Lista centralizada vertical e horizontalmente */}
                    {isSideBarOpen && (
                        <div className="flex flex-1 items-center justify-center w-full">
                            <ul className="flex flex-col items-center justify-center w-full">
                                {menuOptions.map((option, idx) => (
                                    <Link to={option.url} className="mb-2 shadow-sm shadow-slate-400 bg-gray-600 rounded-md hover:bg-slate-500 p-5 w-11/12 text-center transition 200ms"> <li
                                        key={idx}
                                    >
                                        {option.name}
                                    </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    )}
                </nav>
            </div>
            <div>
                <h1>dscdsc</h1>
            </div>

        </>
    )
}

export default Sidebar
