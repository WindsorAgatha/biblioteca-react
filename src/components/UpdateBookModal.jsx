
import React, { useState } from 'react';

export default function UpdateBookModal({ livro, onUpdate, onClose }) {
  const [form, setForm] = useState({
    publisher: livro.publisher || '',
    title: livro.title || '',
    isbn: livro.isbn || '',
    authors: livro.authors || [''],
    publicationYear: livro.publicationYear || '',
    summary: livro.summary || '',
    quantity: livro.quantity || '',
    literaryGenre: livro.literaryGenre || { id: '', name: '' },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAuthorsChange = (idx, value) => {
    const newAuthors = [...form.authors];
    newAuthors[idx] = value;
    setForm(prev => ({
      ...prev,
      authors: newAuthors,
    }));
  };

  const handleAddAuthor = () => {
    setForm(prev => ({
      ...prev,
      authors: [...prev.authors, ''],
    }));
  };

  const handleRemoveAuthor = (idx) => {
    const newAuthors = form.authors.filter((_, i) => i !== idx);
    setForm(prev => ({
      ...prev,
      authors: newAuthors,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Editar Livro</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Título"
            className="border rounded px-3 py-2"
            value={form.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="publisher"
            placeholder="Editora"
            className="border rounded px-3 py-2"
            value={form.publisher}
            onChange={handleChange}
          />
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            className="border rounded px-3 py-2"
            value={form.isbn}
            onChange={handleChange}
          />
          <div>
            <label className="block text-gray-700 mb-1">Autores</label>
            {form.authors.map((author, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={author}
                  onChange={e => handleAuthorsChange(idx, e.target.value)}
                  className="border rounded px-3 py-2 flex-1"
                  placeholder={`Autor ${idx + 1}`}
                  required
                />
                {form.authors.length > 1 && (
                  <button
                    type="button"
                    className="text-red-500 px-2"
                    onClick={() => handleRemoveAuthor(idx)}
                  >
                    Remover
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="text-blue-600 underline text-sm"
              onClick={handleAddAuthor}
            >
              + Adicionar autor
            </button>
          </div>
          <input
            type="number"
            name="publicationYear"
            placeholder="Ano de publicação"
            className="border rounded px-3 py-2"
            value={form.publicationYear}
            onChange={handleChange}
          />
          <textarea
            name="summary"
            placeholder="Resumo"
            className="border rounded px-3 py-2 resize-none"
            rows={3}
            value={form.summary}
            onChange={handleChange}
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantidade"
            className="border rounded px-3 py-2"
            value={form.quantity}
            onChange={handleChange}
          />
          <div className="flex gap-2">
            <input
              type="text"
              name="literaryGenreId"
              placeholder="ID do gênero"
              className="border rounded px-3 py-2 w-1/3"
              value={form.literaryGenre.id}
              onChange={e =>
                setForm(prev => ({
                  ...prev,
                  literaryGenre: { ...prev.literaryGenre, id: e.target.value },
                }))
              }
            />
            <input
              type="text"
              name="literaryGenreName"
              placeholder="Nome do gênero"
              className="border rounded px-3 py-2 flex-1"
              value={form.literaryGenre.name}
              onChange={e =>
                setForm(prev => ({
                  ...prev,
                  literaryGenre: { ...prev.literaryGenre, name: e.target.value },
                }))
              }
            />
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Salvar alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

