import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BookDetails({ isDarkMode }) {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Comentários dos usuários (mock local)
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState({
    nome: '',
    estrelas: 0,
    texto: '',
  });

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    fetch(`http://localhost:5032/api/Book/${id}`)
      .then(async (res) => {
        if (!res.ok) {
          setNotFound(true);
          setLivro(null);
        } else {
          const data = await res.json();
          setLivro(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLivro(null);
        setLoading(false);
      });
  }, [id]);

  const [favorito, setFavorito] = useState(false);
  const [avaliacao, setAvaliacao] = useState(0);

  useEffect(() => {
    if (livro) {
      setFavorito(false);
      setAvaliacao(0);
    }
  }, [livro]);

  const handleAddComentario = (e) => {
    e.preventDefault();
    if (
      novoComentario.nome.trim() &&
      novoComentario.texto.trim() &&
      novoComentario.estrelas > 0
    ) {
      setComentarios([
        ...comentarios,
        {
          id: Date.now(),
          nome: novoComentario.nome,
          estrelas: novoComentario.estrelas,
          texto: novoComentario.texto,
        },
      ]);
      setNovoComentario({ nome: '', estrelas: 0, texto: '' });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="text-gray-600 text-lg">Carregando livro...</span>
      </div>
    );
  }

  if (notFound || !livro) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold text-red-700 mb-4">Livro não encontrado</h1>
        <p className="text-gray-600">O livro solicitado não existe ou foi removido.</p>
      </div>
    );
  }

  return (
    <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-gray-100'}`}>
      <div className={`shadow-lg p-8 font-serif min-h-[80vh] flex flex-col items-center transition duration-300 ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
        <div className="flex flex-col md:flex-row gap-8 items-start w-full">
          {livro.imageUrl ? (
            <img
              src={livro.imageUrl}
              alt={livro.title}
              className="w-48 h-64 object-cover rounded-lg shadow min-h-[200px]"
            />
          ) : (
            <div className={`w-48 h-64 rounded-lg shadow flex items-center justify-center min-h-[200px] transition duration-300 ${isDarkMode ? 'bg-slate-700 text-gray-500' : 'bg-white text-gray-400'}`}>
              Sem imagem
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{livro.title}</h1>
              <button
                onClick={() => setFavorito(!favorito)}
                className="text-yellow-400 text-2xl focus:outline-none"
                title={favorito ? "Desfavoritar" : "Favoritar"}
              >
                {favorito ? '★' : '☆'}
              </button>
            </div>
            <p className={`text-lg mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Autor: <span className="font-semibold">{livro.author}</span>
            </p>
            <p className={`text-md mb-1 transition duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              ISBN: {livro.isbn}
            </p>
            <p className={`text-md mb-1 transition duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Gênero: {livro.literaryGenreName}
            </p>
            <p className={`text-md mb-4 transition duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Quantidade: {livro.quantity} | Disponíveis: {livro.availableCopies}
            </p>
            <div>
              <h2 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>Avaliação dos Usuários</h2>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setAvaliacao(num)}
                    className="focus:outline-none"
                    title={`Avaliar com ${num} estrela${num > 1 ? 's' : ''}`}
                  >
                    <span
                      className={
                        num <= avaliacao
                          ? 'text-yellow-400 text-2xl'
                          : 'text-gray-300 text-2xl'
                      }
                    >
                      ★
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Comentários dos usuários */}
        <div className="w-full mt-10">
          <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>Comentários dos Usuários</h2>
          <form
            onSubmit={handleAddComentario}
            className={`rounded-lg shadow p-4 mb-6 flex flex-col gap-3 transition duration-300 ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}
          >
            <input
              type="text"
              placeholder="Seu nome"
              className={`border rounded px-3 py-2 outline-none transition duration-300 ${isDarkMode ? 'bg-slate-600 text-gray-200 border-slate-500' : 'bg-white text-gray-800 border-gray-300'}`}
              value={novoComentario.nome}
              onChange={(e) =>
                setNovoComentario({ ...novoComentario, nome: e.target.value })
              }
              required
            />
            <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Sua avaliação:</span>
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() =>
                    setNovoComentario({ ...novoComentario, estrelas: num })
                  }
                  className="focus:outline-none"
                >
                  <span
                    className={
                      num <= novoComentario.estrelas
                        ? 'text-yellow-400 text-xl'
                        : 'text-gray-300 text-xl'
                    }
                  >
                    ★
                  </span>
                </button>
              ))}
            </div>
            <textarea
              placeholder="Escreva seu comentário"
              className={`border rounded px-3 py-2 resize-none outline-none transition duration-300 ${isDarkMode ? 'bg-slate-600 text-gray-200 border-slate-500' : 'bg-white text-gray-800 border-gray-300'}`}
              rows={3}
              value={novoComentario.texto}
              onChange={(e) =>
                setNovoComentario({ ...novoComentario, texto: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Enviar comentário
            </button>
          </form>
          <div className="flex flex-col gap-4">
            {comentarios.length === 0 && (
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Nenhum comentário ainda.</p>
            )}
            {comentarios.map((comentario) => (
              <div
                key={comentario.id}
                className={`rounded-lg shadow p-4 flex flex-col transition duration-300 ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{comentario.nome}</span>
                  <span className="flex">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <span
                        key={num}
                        className={
                          num <= comentario.estrelas
                            ? 'text-yellow-400 text-lg'
                            : 'text-gray-300 text-lg'
                        }
                      >
                        ★
                      </span>
                    ))}
                  </span>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{comentario.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}