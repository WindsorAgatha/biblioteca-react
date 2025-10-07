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
        <>
           
                <div className="flex">
                    <nav className={`bg-gray-800 text-white min-h-screen h-full transition-all duration-200 relative flex flex-col ${isSideBarOpen ? 'max-sm:w-10/12 w-3/12 p-4' : 'w-16 p-0'}`}>
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
                                    {menuLinks.map((link, idx) => (
                                        <li
                                            key={idx}
                                            className="mb-2 bg-gray-600 rounded-sm hover:bg-slate-500 p-5 w-11/12 text-center transition"
                                        >
                                            {link}
                                        </li>
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
