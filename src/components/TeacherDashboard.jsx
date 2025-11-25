import React, { useState } from "react";

export default function TeacherDashboard() {

  const [sugestoes, setSugestoes] = useState([
    {
      id: 1,
      teacherId: 1,
      book: {
        id: 1,
        publisher: "Editora Exemplo",
        title: "Dom Casmurro",
        isbn: "123456789",
        authors: ["Machado de Assis"],
        publicationYear: 1899,
        summary: "Um clássico da literatura brasileira.",
        quantity: 10,
        literaryGenre: { id: 1, name: "Romance" },
      },
      recommendationDate: "2025-09-26",
      description: "Recomendo para a turma 3A.",
      classroom: {
        id: 1,
        description: "Turma 3A",
        shift: "Manhã",
      },
    },
    {
      id: 2,
      teacherId: 1,
      book: {
        id: 2,
        publisher: "Editora Pequeno",
        title: "O Pequeno Príncipe",
        isbn: "987654321",
        authors: ["Antoine de Saint-Exupéry"],
        publicationYear: 1943,
        summary: "Uma história sobre amizade e descobertas.",
        quantity: 8,
        literaryGenre: { id: 2, name: "Infantil" },
      },
      recommendationDate: "2025-09-26",
      description: "Ótimo para reflexão.",
      classroom: {
        id: 2,
        description: "Turma 2B",
        shift: "Tarde",
      },
    },
  ]);
  const [novaSugestao, setNovaSugestao] = useState({
    book: {
      id: "",
      publisher: "",
      title: "",
      isbn: "",
      authors: [""],
      publicationYear: "",
      summary: "",
      quantity: "",
      literaryGenre: { id: "", name: "" },
    },
    recommendationDate: "",
    description: "",
    classroom: { id: "", description: "", shift: "" },
  });
  const [editId, setEditId] = useState(null);

  // Handlers das sugestões
  const handleSugestaoChange = (e) => {
    const { name, value } = e.target;
    // Para campos do livro
    if (name.startsWith("book.")) {
      const field = name.split(".")[1];
      setNovaSugestao((prev) => ({
        ...prev,
        book: { ...prev.book, [field]: value },
      }));
    }
    // Para campo de autores (array)
    else if (name === "book.authors") {
      setNovaSugestao((prev) => ({
        ...prev,
        book: { ...prev.book, authors: value.split(",") },
      }));
    }
    // Para campos do gênero
    else if (name.startsWith("book.literaryGenre.")) {
      const field = name.split(".")[2];
      setNovaSugestao((prev) => ({
        ...prev,
        book: {
          ...prev.book,
          literaryGenre: { ...prev.book.literaryGenre, [field]: value },
        },
      }));
    }
    // Para campos da classroom
    else if (name.startsWith("classroom.")) {
      const field = name.split(".")[1];
      setNovaSugestao((prev) => ({
        ...prev,
        classroom: { ...prev.classroom, [field]: value },
      }));
    }
    // Para outros campos
    else {
      setNovaSugestao((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddSugestao = (e) => {
    e.preventDefault();
    if (
      novaSugestao.book.title &&
      novaSugestao.book.authors.length &&
      novaSugestao.book.literaryGenre.name &&
      novaSugestao.description
    ) {
      setSugestoes([
        ...sugestoes,
        { ...novaSugestao, id: Date.now() },
      ]);
      setNovaSugestao({
        book: {
          id: "",
          publisher: "",
          title: "",
          isbn: "",
          authors: [""],
          publicationYear: "",
          summary: "",
          quantity: "",
          literaryGenre: { id: "", name: "" },
        },
        recommendationDate: "",
        description: "",
        classroom: { id: "", description: "", shift: "" },
      });
    }
  };

  const handleEditSugestao = (id) => {
    const s = sugestoes.find((s) => s.id === id);
    setNovaSugestao(s);
    setEditId(id);
  };

  const handleSaveEditSugestao = (e) => {
    e.preventDefault();
    setSugestoes((prev) =>
      prev.map((s) =>
        s.id === editId ? { ...novaSugestao, id: editId } : s
      )
    );
    setNovaSugestao({
    
      book: {
        id: "",
        publisher: "",
        title: "",
        isbn: "",
        authors: [""],
        publicationYear: "",
        summary: "",
        quantity: "",
        literaryGenre: { id: "", name: "" },
      },
      recommendationDate: "",
      description: "",
      classroom: { id: "", description: "", shift: "" },
    });
    setEditId(null);
  };

  const handleDeleteSugestao = (id) => {
    setSugestoes((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 font-serif">
    
      {/* CRUD Sugestões de Livros */}
      <section className="bg-gray-50 rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Sugestões de Livros</h2>
        <form
          onSubmit={editId ? handleSaveEditSugestao : handleAddSugestao}
          className="flex flex-col gap-2 mb-6"
        >
          <input
            type="text"
            name="book.title"
            placeholder="Título do livro"
            className="border rounded px-3 py-2"
            value={novaSugestao.book.title}
            onChange={handleSugestaoChange}
            required
          />
          <input
            type="text"
            name="book.authors"
            placeholder="Autor(es) (separados por vírgula)"
            className="border rounded px-3 py-2"
            value={novaSugestao.book.authors.join(",")}
            onChange={handleSugestaoChange}
            required
          />
          <input
            type="text"
            name="book.literaryGenre.name"
            placeholder="Gênero"
            className="border rounded px-3 py-2"
            value={novaSugestao.book.literaryGenre.name}
            onChange={handleSugestaoChange}
            required
          />
          <input
            type="text"
            name="book.publisher"
            placeholder="Editora"
            className="border rounded px-3 py-2"
            value={novaSugestao.book.publisher}
            onChange={handleSugestaoChange}
          />
          <input
            type="text"
            name="book.isbn"
            placeholder="ISBN"
            className="border rounded px-3 py-2"
            value={novaSugestao.book.isbn}
            onChange={handleSugestaoChange}
          />
          <input
            type="number"
            name="book.publicationYear"
            placeholder="Ano de publicação"
            className="border rounded px-3 py-2"
            value={novaSugestao.book.publicationYear}
            onChange={handleSugestaoChange}
          />
          <textarea
            name="book.summary"
            placeholder="Resumo"
            className="border rounded px-3 py-2 resize-none"
            rows={2}
            value={novaSugestao.book.summary}
            onChange={handleSugestaoChange}
          />
          <input
            type="number"
            name="book.quantity"
            placeholder="Quantidade"
            className="border rounded px-3 py-2"
            value={novaSugestao.book.quantity}
            onChange={handleSugestaoChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Descrição da recomendação"
            className="border rounded px-3 py-2"
            value={novaSugestao.description}
            onChange={handleSugestaoChange}
            required
          />
          <input
            type="date"
            name="recommendationDate"
            className="border rounded px-3 py-2"
            value={novaSugestao.recommendationDate}
            onChange={handleSugestaoChange}
          />
          <input
            type="text"
            name="classroom.description"
            placeholder="Turma"
            className="border rounded px-3 py-2"
            value={novaSugestao.classroom.description}
            onChange={handleSugestaoChange}
          />
          <input
            type="text"
            name="classroom.shift"
            placeholder="Turno"
            className="border rounded px-3 py-2"
            value={novaSugestao.classroom.shift}
            onChange={handleSugestaoChange}
          />
          <div className="flex gap-2 mt-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              {editId ? "Salvar Edição" : "Adicionar Sugestão"}
            </button>
            {editId && (
              <button
                type="button"
                className="bg-white text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => {
                  setNovaSugestao({
                    book: {
                      id: "",
                      publisher: "",
                      title: "",
                      isbn: "",
                      authors: [""],
                      publicationYear: "",
                      summary: "",
                      quantity: "",
                      literaryGenre: { id: "", name: "" },
                    },
                    recommendationDate: "",
                    description: "",
                    classroom: { id: "", description: "", shift: "" },
                  });
                  setEditId(null);
                }}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
        <ul className="divide-y divide-gray-200">
          {sugestoes.map((s) => (
            <li key={s.id} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <span className="font-semibold">{s.book.title}</span> — <span>{s.book.authors.join(", ")}</span> <span className="text-gray-500">({s.book.literaryGenre.name})</span>
                <div className="text-gray-700 text-sm">{s.description}</div>
                <div className="text-gray-500 text-xs">
                  Editora: {s.book.publisher} | ISBN: {s.book.isbn} | Ano: {s.book.publicationYear}
                </div>
                <div className="text-gray-500 text-xs">
                  Turma: {s.classroom.description} | Turno: {s.classroom.shift}
                </div>
                <div className="text-gray-500 text-xs">
                  Data da recomendação: {s.recommendationDate}
                </div>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => handleEditSugestao(s.id)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => handleDeleteSugestao(s.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}