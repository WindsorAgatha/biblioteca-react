import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
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
    fetch(`http://localhost:5287/api/Book/${id}`)
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
    <div className="bg-gray-50 rounded-xl shadow-lg p-8 mx-8 my-4 font-serif min-h-[80vh] flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-8 items-start w-full">
        {livro.imageUrl || livro.imagem ? (
          <img
            src={livro.imageUrl || livro.imagem}
            alt={livro.title}
            className="w-48 h-64 object-cover rounded-lg shadow min-h-[200px]"
          />
        ) : (
          <div className="w-48 h-64 bg-white rounded-lg shadow flex items-center justify-center text-gray-400 min-h-[200px]">
            Sem imagem
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-800">{livro.title}</h1>
            <button
              onClick={() => setFavorito(!favorito)}
              className="text-yellow-400 text-2xl focus:outline-none"
              title={favorito ? "Desfavoritar" : "Favoritar"}
            >
              {favorito ? '★' : '☆'}
            </button>
          </div>
          <p className="text-lg text-gray-600 mb-1">
            Autor: <span className="font-semibold">{livro.authors?.join(', ') || 'Desconhecido'}</span>
          </p>
          <p className="text-md text-gray-500 mb-1">
            Páginas: {livro.pages || livro.paginas || 'N/A'}
          </p>
          <p className="text-md text-gray-500 mb-4">
            Gênero: {livro.literaryGenre?.name || 'N/A'}
          </p>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-1">Descrição</h2>
            <p className="text-gray-700">{livro.summary || livro.descricao || 'Sem descrição.'}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-1">Avaliação dos Usuários</h2>
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
        <h2 className="text-xl font-bold text-gray-800 mb-4">Comentários dos Usuários</h2>
        <form
          onSubmit={handleAddComentario}
          className="bg-white rounded-lg shadow p-4 mb-6 flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Seu nome"
            className="border rounded px-3 py-2"
            value={novoComentario.nome}
            onChange={(e) =>
              setNovoComentario({ ...novoComentario, nome: e.target.value })
            }
            required
          />
          <div className="flex items-center gap-2">
            <span className="text-gray-700">Sua avaliação:</span>
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
            className="border rounded px-3 py-2 resize-none"
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
            <p className="text-gray-500">Nenhum comentário ainda.</p>
          )}
          {comentarios.map((comentario) => (
            <div
              key={comentario.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-800">{comentario.nome}</span>
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
              <p className="text-gray-700">{comentario.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}