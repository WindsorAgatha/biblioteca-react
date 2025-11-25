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
                setLivros([]);
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
        (livro.title || '').toLowerCase().includes(search.toLowerCasewhite));0
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* gêneros literários */}
            <section className="genre-container mb-10 bg-gray-50" aria-label="Gêneros">
                <div className="genre-grid max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
                    <h2 className="genre-title text-blue-900 text-2xl font-bold mb-4 text-center">Gêneros Literários</h2>
                    <div className="genre-boxes grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        <Link to="#" className="genre-box bg-white hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition flex items-center justify-center">Aventura</Link>
                        <Link to="#" className="genre-box bg-white hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition flex items-center justify-center">Romance</Link>
                        <Link to="#" className="genre-box bg-white hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition flex items-center justify-center">Fantasia</Link>
                        <Link to="#" className="genre-box bg-white hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition flex items-center justify-center">Suspense</Link>
                        <Link to="#" className="genre-box bg-white hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition flex items-center justify-center">Clássicos</Link>
                        <Link to="#" className="genre-box bg-white hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition flex items-center justify-center">Biografia</Link>
                        <Link to="#" className="genre-box bg-white hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition flex items-center justify-center">Ficção Científica</Link>
                        <Link to="#" className="genre-box bg-white hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition flex items-center justify-center">Drama</Link>
                        <Link to="#" className="genre-box bg-white hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition flex items-center justify-center">Poesia</Link>
                        <Link to="#" className="genre-box bg-white hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition flex items-center justify-center">Infantil</Link>
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
            </div>

            {loading ? (

                <div className="text-center text-blue-900 font-semibold mt-10">Carregando livros...</div>
            ) : (
                <div className="gap-8 flex flex-wrap justify-center">
                    {filteredLivros.length === 0 ? (
                        <div className="text-center text-gray-700 font-medium">Nenhum livro encontrado.</div>
                    ) : (
                        filteredLivros.map(livro => (
                            <div
                                key={livro.id}
                                className="border bg-slate-50 rounded-lg p-4 w-64 text-left shadow hover:shadow-lg transition m-2 flex flex-col"
                            >
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">{livro.title}</h3>
                                <p className="text-sm text-gray-700 mb-1"><span className="font-bold">Editora:</span> {livro.publisher}</p>
                                <p className="text-sm text-gray-700 mb-1"><span className="font-bold">ISBN:</span> {livro.isbn}</p>
                                <p className="text-sm text-gray-700 mb-1"><span className="font-bold">Autores:</span> {livro.authors && livro.authors.join(', ')}</p>
                                <p className="text-sm text-gray-700 mb-1"><span className="font-bold">Ano:</span> {livro.publicationYear}</p>
                                <p className="text-sm text-gray-700 mb-1"><span className="font-bold">Quantidade:</span> {livro.quantity}</p>
                                <p className="text-sm text-gray-700 mb-1"><span className="font-bold">Gênero:</span> {livro.literaryGenre?.name}</p>
                                <p className="text-sm text-gray-700 mb-2"><span className="font-bold">Resumo:</span> {livro.summary}</p>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default Livros;