import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import ProfessorImg from "../assets/wander.png"
import StudentImg from "../assets/Gemini_Generated_Image_kca1ekkca1ekkca1.png"
import BookCover1 from "../assets/Anne Frank.jpg"
import BookCover2 from "../assets/hamlet.jpg"
import BookCover3 from "../assets/Aventura.png"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const newBooks = [
    { id: 1, title: "Novo Livro 1", img: BookCover1 },
    { id: 2, title: "Novo Livro 2", img: BookCover2 },
    { id: 3, title: "Novo Livro 3", img: BookCover3 },
    { id: 4, title: "Novo Livro 4", img: BookCover1 },
    { id: 5, title: "Novo Livro 5", img: BookCover2 },
]

const mostRented = [
    { title: "Anne Frank", img: BookCover1, medal: "gold" },
    { title: "Hamlet", img: BookCover2, medal: "silver" },
    { title: "Aventura", img: BookCover3, medal: "bronze" },
]

function BlogContent({ isDarkMode }) {
    const [start, setStart] = useState(0);



    // SWIPE HANDLERS
    const handlers = useSwipeable({
        onSwipedLeft: () => setStart((prev) => prev + 1 < newBooks.length - 2 ? prev + 1 : prev),
        onSwipedRight: () => setStart((prev) => prev > 0 ? prev - 1 : prev),
        trackMouse: true,
    });

    const nextSlide = () => setStart((prev) => prev + 1 < newBooks.length - 2 ? prev + 1 : prev);
    const prevSlide = () => setStart((prev) => prev > 0 ? prev - 1 : prev);

    return (
        <main className={`bg-gray-50 text-gray-900 min-h-screen px-4 md:px-8 py-6 space-y-8 max-md:w-screen
        ${isDarkMode ? ' bg-black pointer-events-none' : ''}`}>

            {/* Eventos + Desafio do Mês */}
            <section className="flex flex-col md:flex-row gap-4">
                <div className="bg-white rounded-lg shadow p-4 flex-1">
                    <h2 className="text-xl font-bold mb-2">📰 Notícias</h2>
                    <p className=" text-sm mx-4">
                        <li>
                            <Link to="#" className="text-blue-900 hover:text-blue-700 hover:underline">Chegando o dia da entrega de boletins 02/10</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-blue-900 hover:text-blue-700 hover:underline">Reunião de pais nesta terça-feira 07/10</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-blue-900 hover:text-blue-700 hover:underline">Palestra sobre a inteligência artifícial 21/11</Link>
                        </li>

                    </p>
                </div>
                <div className="bg-white rounded-lg shadow p-4 flex-1">
                    <h2 className="text-xl font-bold mb-2">📅 Próximos Eventos</h2>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                        <li>
                            <Link to="#" className="text-blue-900 hover:text-blue-700 hover:underline">
                                Clube do Livro: Discussão sobre "O Hobbit" - 12 de Setembro
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-blue-900 hover:text-blue-700 hover:underline">
                                Oficina de Escrita Criativa - 20 de Setembro
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-blue-900 hover:text-blue-700 hover:underline">
                                Encontro com Autor: Lançamento de "Mistério na Biblioteca" - 28 de Setembro
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Aluno Destaque + Top 3 Mais Alugados (Pódio) alinhados centralizados no mobile */}
            <div className="flex flex-col md:flex-row md:justify-center md:items-stretch gap-8 items-center w-auto">
                {/* Aluno Destaque */}
                <section className="flex flex-col items-center pt-16 max-md:p-6 bg-white shadow rounded-lg w-full max-w-xs md:max-w-xl flex-1">
                    <img
                        src={StudentImg}
                        alt="Aluno do mês"
                        className="w-28 h-28 object-cover rounded-full mb-2"
                    />
                    <div className="flex-1 justify-between text-center">
                        <h2 className="text-xl font-bold mb-1">🌟 Aluno Destaque do Mês</h2>
                        <p className="text-gray-600 text-sm mb-1">Fernanda da Silva</p>
                        <p className="text-gray-600 text-sm">
                            Alugou <strong>5 livros</strong> este mês!
                        </p>
                    </div>
                </section>

                {/* Top 3 Mais Alugados (Pódio) */}
                <section className="flex flex-col items-center rounded-lg p-4 w-full max-md:p-8 max-w-xs md:max-w-xl bg-white shadow flex-1">
                    <h2 className="text-xl font-bold mb-4 max-md:mb-1 text-center">🏆 Top 3 Mais Alugados</h2>
                    <div className="flex justify-center items-end gap-1 h-60">
                        {/* 2º lugar */}
                        <div className="flex flex-col items-center max-md:text-sm">
                            <div className="w-24 h-36 bg-gray-200 flex items-center justify-center rounded-t-lg shadow-lg">
                                <img src={mostRented[1].img} alt={mostRented[1].title} className="w-20 h-32 object-cover rounded" />
                            </div>
                            <span className="mt-2 max-md:text-sm text-gray-700 font-bold text-lg">🥉 {mostRented[1].title}</span>
                        </div>
                        {/* 1º lugar */}
                        <div className="flex flex-col items-center">
                            <div className="w-28 h-44  bg-gray-200 flex items-center justify-center rounded-t-lg shadow-lg">
                                <img src={mostRented[0].img} alt={mostRented[0].title} className="w-24 h-36 object-cover rounded" />
                            </div>
                            <span className="mt-2 max-md:text-sm text-gray-700 font-bold text-xl">🥇 {mostRented[0].title}</span>
                        </div>
                        {/* 3º lugar */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-36 bg-gray-200 flex items-center justify-center rounded-t-lg shadow-lg">
                                <img src={mostRented[2].img} alt={mostRented[2].title} className="w-20 h-32 object-cover rounded" />
                            </div>
                            <span className="mt-2 max-md:text-sm text-gray-700 font-bold text-lg">🥈 {mostRented[2].title}</span>
                        </div>
                    </div>
                </section>
            </div>
            <section>
                <div className="bg-white rounded-lg shadow p-4 flex-1 h-40">
                    <h2 className="text-xl font-bold mb-2">🎯 Desafio do Mês</h2>
                    <p className="text-gray-600 text-sm">
                        Complete a leitura de <strong>3 livros de aventura</strong> e ganhe destaque na biblioteca!
                    </p>
                </div>
            </section>
            {/* Indicações dos Professores */}
            <section className="flex flex-col md:flex-row items-center bg-white shadow rounded-lg p-4 gap-4">
                <img
                    src={ProfessorImg}
                    alt="Professor segurando livro"
                    className="w-80 h-45 object-cover rounded-lg border-gray-600 border-2"
                />
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-1">📚 Indicações dos Professores</h2>
                    <p className="text-gray-600 text-sm">
                        Descubra livros recomendados pelos professores para ampliar seus horizontes!
                    </p>
                </div>
            </section>

            {/* Novos Livros (Slider com Swipe) */}
            <section>
                <h2 className="text-xl font-bold mb-3">🆕 Novidades na Biblioteca</h2>
                <div className="relative flex items-center min-h-[220px]">
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full p-3 shadow-lg hover:scale-110 hover:from-blue-600 hover:to-blue-800 transition-all duration-200 border-4 border-white"
                        style={{ outline: 'none' }}
                        aria-label="Anterior"
                    >
                        <FaChevronLeft size={20} />
                    </button>

                    <div
                        {...handlers}
                        className="overflow-hidden w-full flex justify-center touch-pan-x"
                    >
                        <div
                            className="flex transition-transform duration-300"
                            style={{ transform: `translateX(-${start * (100 / 3)}%)`, width: `${(newBooks.length * 100) / 3}%` }}
                        >
                            {newBooks.map((book, idx) => (
                                <div key={idx} className="w-1/3 flex-shrink-0 p-2">
                                    <div className="bg-white rounded-lg shadow p-2 flex flex-col items-center">
                                        <img src={book.img} alt={book.title} className="w-28 h-40 object-cover rounded mb-1" />
                                        <p className="font-semibold text-sm text-center">{book.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full p-3 shadow-lg hover:scale-110 hover:from-blue-600 hover:to-blue-800 transition-all duration-200 border-4 border-white"
                        style={{ outline: 'none' }}
                        aria-label="Próximo"
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </section>

            {/* Curiosidades Literárias */}
            <section className="bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-bold mb-1">💡 Curiosidades Literárias</h2>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>"Hamlet" foi escrito por William Shakespeare em 1600.</li>
                    <li>"Anne Frank: O Diário" é um relato real da Segunda Guerra.</li>
                    <li>O livro mais alugado do mês passado foi "O Pequeno Príncipe".</li>
                </ul>
            </section>
        </main>
    )
}

export default BlogContent
