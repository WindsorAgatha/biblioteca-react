import React, { useState } from "react";

function Books() {
    const [search, setSearch] = useState("");
    const books = [
        {
            name: "Dom Casmurro",
            img: "https://m.media-amazon.com/images/I/81vQwYqK8GL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            name: "O Pequeno Príncipe",
            img: "https://m.media-amazon.com/images/I/81n5lH2FQwL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            name: "Harry Potter",
            img: "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg"
        }
    ];

    const filteredBooks = books.filter(book =>
        book.name.toLowerCase().includes(search.toLowerCase())
    );

    return (

            <main className="p-6 max-w-3xl mx-auto bg-slate-400 min-h-screen" >
                        <div className="genre-container" aria-label="Gêneros">
            <div className="genre-grid" aria-label="Gêneros literários">
                <h2 className="genre-title">Gêneros Literários</h2>
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
        </div>
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 ">
                    <input
                        type="text"
                        placeholder="Pesquisar livro..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="border rounded-lg px-3 py-2 w-full "
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-25px h-12 flex items-center justify-center">
                        Pesquisar
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {filteredBooks.map((book, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                            <img
                                src={book.img}
                                alt={book.name}
                                className="w-32 h-48 object-cover rounded mb-4"
                            />
                            <h2 className="text-lg font-semibold text-center">{book.name}</h2>
                        </div>
                    ))}
                </div>
            </main>
            );
}

            export default Books;