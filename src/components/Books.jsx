import React, { useState } from 'react';

const livrosMock = [
    {
        id: 1,
        nome: 'O Pequeno Príncipe',
        imagem: 'https://m.media-amazon.com/images/I/81p6yQ2VwVL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 2,
        nome: 'Dom Casmurro',
        imagem: 'https://m.media-amazon.com/images/I/71w5wQpQKjL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 3,
        nome: 'Harry Potter',
        imagem: 'https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UF1000,1000_QL80_.jpg'
    }
];

function Livros() {
    const [search, setSearch] = useState('');
    const [livros, setLivros] = useState(livrosMock);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredLivros = livros.filter(livro =>
        livro.nome.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddLivro = () => {
        alert('Funcionalidade de adicionar livro em breve!');
    };

    return (
        <div className="p-8 bg-slate-300 min-h-screen">
            <section className="genre-container mb-10 bg-slate-300" aria-label="Gêneros">
                <div className="genre-grid" aria-label="Gêneros literários ">
                    <h2 className="genre-title text-slate-100">Gêneros Literários</h2>
                    <div className="genre-boxes">
                        <a href="#" className="genre-box">Aventura</a>
                        <a href="#" className="genre-box">Romance</a>
                        <a href="#" className="genre-box">Fantasia</a>
                        <a href="#" className="genre-box">Suspense</a>
                        <a href="#" className="genre-box">Clássicos</a>
                        <a href="#" className="genre-box">Biografia</a>
                        <a href="#" className="genre-box">Ficção Científica</a>
                        <a href="#" className="genre-box">Drama</a>
                        <a href="#" className="genre-box">Poesia</a>
                        <a href="#" className="genre-box">Infantil</a>
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
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    Pesquisar
                </button>
            </div>

            <div className="flex gap-8">
                {filteredLivros.map(livro => (
                    <div
                        key={livro.id}
                        className="border bg-slate-50 rounded-lg p-4 w-52 text-center shadow hover:shadow-lg transition"
                    >
                        <img
                            src={livro.imagem}
                            alt={livro.nome}
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold">{livro.nome}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Livros;