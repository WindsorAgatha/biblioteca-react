import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Books({isDarkMode}) {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(""); // "" = todos
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();
    async function load() {
      setLoading(true);
      setError(null);
      try {
        // buscar gêneros
        const gRes = await fetch("http://localhost:5032/api/LiteraryGenre", { signal: abort.signal });
        if (!gRes.ok) throw new Error("Falha ao buscar gêneros");
        const gData = await gRes.json();
        setGenres(gData || []);

        // buscar livros
        const bRes = await fetch("http://localhost:5032/api/Book", { signal: abort.signal });
        if (!bRes.ok) throw new Error("Falha ao buscar livros");
        const bData = await bRes.json();
        setBooks(Array.isArray(bData) ? bData : []);
      } catch (err) {
        if (!abort.signal.aborted) setError(err.message || "Erro desconhecido");
      } finally {
        if (!abort.signal.aborted) setLoading(false);
      }
    }
    load();
    return () => abort.abort();
  }, []);

  const filtered = books
    .filter((b) => {
      if (selectedGenre === "") return true;
      return String(b.literaryGenreId) === String(selectedGenre) || String(b.literaryGenreName) === String(selectedGenre);
    })
    .filter((b) => {
      if (!query) return true;
      return (b.title || "").toLowerCase().includes(query.toLowerCase()) || (b.author || "").toLowerCase().includes(query.toLowerCase());
    });

  if (loading) return <main className="min-h-screen p-6">Carregando livros...</main>;
  if (error) return <main className="min-h-screen p-6 text-red-600">Erro: {error}</main>;

  return (
    <main className={`min-h-screen p-6 transition-colors duration-200 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className={`text-2xl font-bold transition duration-300  ${isDarkMode ? 'text-gray-100':'text-gray-800'}`}>Catálogo de Livros</h1>
            <p className={`text-sm transition duration-300 ${isDarkMode? 'text-gray-300': 'text-gray-600'}`}>Filtre por gênero ou busque por título/autor.</p>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Buscar por título ou autor..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`flex-1 sm:flex-none px-3 py-2 rounded-lg border text-sm outline-none transition duration-300 ${isDarkMode ? 'text-gray-100 bg-slate-700 border-slate-600' : 'text-gray-800 bg-white border-gray-300'}`}
            />

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className={`px-3 py-2 rounded-lg border text-sm outline-none transition duration-300 ${isDarkMode ? 'text-gray-100 bg-slate-700 border-slate-600' : 'text-gray-800 bg-white border-gray-300'}`}
            >
              <option value="">Todos os gêneros</option>
              {genres.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>
        </header>

        <section>
          {filtered.length === 0 ? (
            <div className={`  ${isDarkMode? 'text-gray-300': 'text-gray-600'}`}>Nenhum livro encontrado.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((book) => (
                <article
                  key={book.id}
                  className={`rounded-lg shadow p-4 flex flex-col justify-between transition-colors duration-200  ${isDarkMode ? 'text-gray-200 bg-slate-800' : 'text-gray-800 bg-white'}`}
                >
                  <div>
                    <h2 className={`text-lg font-semibold mb-1 transition duration-300 ${isDarkMode?'text-gray-100' : 'text-gray-800'}`}>{book.title}</h2>
                    <p className={`text-sm mb-2 transition duration-300 ${isDarkMode? 'text-gray-300' : 'text-gray-600'}`}>{book.author}</p>
                    <p className={`text-xs mb-3 transition duration-300 ${isDarkMode? 'text-gray-400' : 'text-gray-500'}`}>ISBN: {book.isbn || "—"}</p>
                    <p className={`text-sm mb-3 transition duration-300 ${isDarkMode? 'text-gray-300' : 'text-gray-600'}`}>
                      Gênero: <span className="font-medium">{book.literaryGenreName ?? "—"}</span>
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className={`text-sm  mb-3 transition duration-300 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      <div>Disponíveis: <span className="font-semibold">{book.availableCopies ?? 0}</span></div>
                    </div>
                    <Link
                      to={`/livros/${book.id}`}
                      className="px-3 py-1 rounded bg-blue-600 text-white text-sm hover:bg-blue-700 transition inline-block text-center"
                    >
                      Ver
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}