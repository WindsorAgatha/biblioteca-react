import React, { useState, useEffect } from 'react';

export default function CreateBook({ onCreated }) {
  const [book, setBook] = useState({
    id: 0,
    title: '',
    author: '',
    isbn: '',
    quantity: 0,
    availableCopies: 0,
    literaryGenreId: 0,
    literaryGenreName: '',
    imageFile: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Lista de gêneros carregada via GET
  const [genres, setGenres] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState(false);

  // Ajuste a URL abaixo para a rota correta de sua API de gêneros
  const GENRES_URL = 'http://localhost:5032/api/LiteraryGenre';
  const BOOK_POST_URL = 'http://localhost:5032/api/Book/upload';

  useEffect(() => {
    async function loadGenres() {
      setLoadingGenres(true);
      try {
        const res = await fetch(GENRES_URL);
        if (!res.ok) throw new Error('Falha ao carregar gêneros');
        const data = await res.json();
        // Espera-se um array: [{ id: 1, name: 'Fantasia' }, ...]
        setGenres(Array.isArray(data) ? data : []);
      } catch (err) {
        console.warn('Erro ao buscar gêneros:', err);
        setGenres([]);
      } finally {
        setLoadingGenres(false);
      }
    }
    loadGenres();
  }, []);

  function handleChange(e) {
    const { name, value, type } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: type === 'number' ? (value === '' ? '' : Number(value)) : value,
    }));
  }

  function handleGenreChange(e) {
    const id = Number(e.target.value);
    const g = genres.find((x) => x.id === id);
    setBook((prev) => ({
      ...prev,
      literaryGenreId: id,
      literaryGenreName: g ? (g.name ?? g.literaryGenreName ?? '') : '',
    }));
  }

  function handleFileChange(e) {
    setBook((prev) => ({ ...prev, imageFile: e.target.files?.[0] ?? null }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const fd = new FormData();
      fd.append('Title', book.title || '');
      fd.append('Author', book.author || '');
      fd.append('ISBN', book.isbn || '');
      fd.append('Quantity', String(book.quantity || 0));
      fd.append('LiteraryGenreId', String(book.literaryGenreId || 0));
      if (book.imageFile) {
        fd.append('Image', book.imageFile);  // Mudado para 'Image' (maiúsculo)
      }

      const res = await fetch(BOOK_POST_URL, {
        method: 'POST',
        body: fd,
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error('Falha ao criar livro: ' + txt);
      }

      const created = await res.json();

      setBook({
        id: 0,
        title: '',
        author: '',
        isbn: '',
        quantity: 0,
        availableCopies: 0,
        literaryGenreId: 0,
        literaryGenreName: '',
        imageFile: null,
      });

      if (typeof onCreated === 'function') onCreated(created);
    } catch (err) {
      setError(err.message || 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-1/2 max-md:w-4/5 mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white dark:bg-slate-800"
      >
        <label htmlFor="title">Título</label>
        <input id="title" name="title" value={book.title} onChange={handleChange} className="border rounded-lg mb-4 px-2 py-1" required />

        <label htmlFor="author">Autor</label>
        <input id="author" name="author" value={book.author} onChange={handleChange} className="border rounded-lg mb-4 px-2 py-1" required />

        <label htmlFor="isbn">ISBN</label>
        <input id="isbn" name="isbn" value={book.isbn} onChange={handleChange} className="border rounded-lg mb-4 px-2 py-1" required />

        <label htmlFor="literaryGenre">Gênero</label>
        {loadingGenres ? (
          <div className="mb-4">Carregando gêneros...</div>
        ) : (
          <select
            id="literaryGenre"
            name="literaryGenreId"
            value={book.literaryGenreId || ''}
            onChange={handleGenreChange}
            className="border rounded-lg mb-4 px-2 py-1"
            required
          >
            <option value="">-- Selecione um gênero --</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name ?? g.literaryGenreName ?? g.description ?? `#${g.id}`}
              </option>
            ))}
          </select>
        )}

        <label htmlFor="quantity">Quantidade</label>
        <input id="quantity" name="quantity" type="number" value={book.quantity} onChange={handleChange} className="border rounded-lg mb-4 px-2 py-1" />

        <label htmlFor="image">Imagem da capa</label>
        <input id="image" name="image" type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />

        <div className="flex justify-center">
          <button type="submit" disabled={loading} className="bg-sky-500 text-white px-4 py-2 rounded">
            {loading ? 'Enviando...' : 'Criar Livro'}
          </button>
        </div>

        {error && <div className="mt-3 text-sm text-red-600">{error}</div>}
      </form>
    </div>
  );
}
