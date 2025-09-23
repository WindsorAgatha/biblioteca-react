import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Livros() {
    const [search, setSearch] = useState('');
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLivros() {
            try {
                const response = await fetch('http://localhost:5287/api/Book');
                const data = await response.json();
                setLivros(data);
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchLivros();
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredLivros = livros.filter(livro =>
        livro.title?.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddLivro = () => {
        alert('Funcionalidade de adicionar livro em breve!');
    };

    return (
        <div className="p-8 bg-slate-300 min-h-screen">
            {/* gêneros literários */}
            <section className="genre-container mb-10 bg-slate-300" aria-label="Gêneros">
                <div className="genre-grid max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
                    <h2 className="genre-title text-blue-900 text-2xl font-bold mb-4 text-center">Gêneros Literários</h2>
                    <div className="genre-boxes grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        <Link to="#" className="genre-box  bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition text-pretty flex items-center justify-center">Aventura</Link>
                        <Link to="#" className="genre-box  bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition text-pretty flex items-center justify-center">Romance</Link>
                        <Link to="#" className="genre-box  bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition text-pretty flex items-center justify-center">Fantasia</Link>
                        <Link to="#" className="genre-box  bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition text-pretty flex items-center justify-center">Suspense</Link>
                        <Link to="#" className="genre-box  bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition text-pretty flex items-center justify-center">Clássicos</Link>
                        <Link to="#" className="genre-box  bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition text-pretty flex items-center justify-center">Biografia</Link>
                        <Link to="#" className="genre-box bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition text-pretty flex items-center justify-center">Ficção Científica</Link>
                        <Link to="#" className="genre-box  bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition text-pretty flex items-center justify-center">Drama</Link>
                        <Link to="#" className="genre-box  bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition text-pretty flex items-center justify-center">Poesia</Link>
                        <Link to="#" className="genre-box  bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition text-pretty flex items-center justify-center">Infantil</Link>
                    </div>
                </div>
            </section>
            <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Pesquisar livro..."
                    value={search}
                    onChange={handleSearch}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={handleAddLivro}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition max-md:w-full"
                >
                    Pesquisar
                </button>
            </div>

            {loading ? (
                <div className="text-center text-gray-600 mt-10">Carregando livros...</div>
            ) : (
                <div className="gap-8 flex max-md:flex-col max-md:justify-center max-md:items-center">
                    {filteredLivros.length === 0 ? (
                        <div className="text-center text-gray-500">Nenhum livro encontrado.</div>
                    ) : (
                        filteredLivros.map(livro => (
                            <Link
                                to={`/livros/${livro.id}`}
                                key={livro.id}
                                className="border bg-slate-50 rounded-lg p-4 w-52 text-center shadow hover:shadow-lg transition flex flex-col items-center cursor-pointer max-md:w-96 max-md:h-48 max-md:flex max-md:items-center max-md:justify-center max-md:p-14"
                            >
                                {livro.imageUrl || livro.imagem ? (
                                    <img
                                        src={livro.imageUrl || livro.imagem}
                                        alt={livro.title}
                                        className="w-full h-64 object-cover rounded-md mb-4"
                                    />
                                ) : (
                                    <div className="w-full h-64 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400">
                                        Sem imagem
                                    </div>
                                )}
                                <h3 className="text-lg font-semibold">{livro.title}</h3>
                            </Link>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default Livros;