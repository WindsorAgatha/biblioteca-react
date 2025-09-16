import React, { useState } from 'react';

const livroExemplo = {
  id: 1,
  titulo: 'Dom Casmurro',
  autor: 'Machado de Assis',
  paginas: 256,
  descricao: 'Um dos maiores clássicos da literatura brasileira, Dom Casmurro narra a história de Bentinho e Capitu.',
  imagem: 'https://m.media-amazon.com/images/I/81zF1gqFQDL._AC_UF1000,1000_QL80_.jpg',
  favorito: false,
  avaliacao: 4,
};

export default function BookDetails() {
  const [favorito, setFavorito] = useState(livroExemplo.favorito);
  const [avaliacao, setAvaliacao] = useState(livroExemplo.avaliacao);

  // Comentários dos usuários
  const [comentarios, setComentarios] = useState([
    { id: 1, nome: 'Maria', estrelas: 5, texto: 'Livro incrível, recomendo muito!' },
    { id: 2, nome: 'João', estrelas: 4, texto: 'Gostei bastante, leitura envolvente.' },
  ]);
  const [novoComentario, setNovoComentario] = useState({
    nome: '',
    estrelas: 0,
    texto: '',
  });

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

  return (
    <div className="bg-slate-200 rounded-xl shadow-lg p-8 mx-8 my-4 font-serif min-h-[80vh] flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-8 items-start w-full">
        <img
          src={livroExemplo.imagem}
          alt={livroExemplo.titulo}
          className="w-48 h-64 object-cover rounded-lg shadow min-h-[200px]"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-800">{livroExemplo.titulo}</h1>
            <button
              onClick={() => setFavorito(!favorito)}
              className="text-yellow-400 text-2xl focus:outline-none"
              title={favorito ? "Desfavoritar" : "Favoritar"}
            >
              {favorito ? '★' : '☆'}
            </button>
          </div>
          <p className="text-lg text-gray-600 mb-1">
            Autor: <span className="font-semibold">{livroExemplo.autor}</span>
          </p>
          <p className="text-md text-gray-500 mb-4">Páginas: {livroExemplo.paginas}</p>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-1">Descrição</h2>
            <p className="text-gray-700">{livroExemplo.descricao}</p>
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