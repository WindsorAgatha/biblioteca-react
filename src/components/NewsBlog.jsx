import React, { useEffect, useState } from "react";

export default function NewsBlog() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulação de fetch, troque por sua API se desejar
  useEffect(() => {
    setTimeout(() => {
      setNoticias([
        {
          id: 1,
          titulo: "Biblioteca recebe novos livros de aventura",
          data: "2025-10-01",
          imagem: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
          resumo: "A biblioteca escolar ampliou seu acervo com títulos de aventura para todas as idades.",
          conteudo: "Agora os alunos podem explorar novas histórias e universos incríveis. Venha conferir as novidades e aproveite para participar do clube do livro!",
        },
        {
          id: 2,
          titulo: "Semana da Leitura começa na próxima segunda",
          data: "2025-10-05",
          imagem: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
          resumo: "Palestras, oficinas e troca de livros marcam a programação da Semana da Leitura.",
          conteudo: "Alunos e professores estão convidados a participar das atividades. Traga um livro para trocar e participe dos sorteios!",
        },
        {
          id: 3,
          titulo: "Professor João é destaque em projeto de incentivo à leitura",
          data: "2025-09-20",
          imagem: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
          resumo: "O professor João foi reconhecido pelo seu trabalho inovador com os alunos do 6º ano.",
          conteudo: "O projeto envolveu leituras coletivas, debates e produção de resenhas, estimulando o interesse dos estudantes pela literatura.",
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4 font-serif">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Notícias da Escola</h1>
      {loading ? (
        <div className="text-center text-gray-500 py-20">Carregando notícias...</div>
      ) : (
        <div className="flex flex-col gap-10">
          {noticias.map(noticia => (
            <div key={noticia.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              <img
                src={noticia.imagem}
                alt={noticia.titulo}
                className="w-full md:w-64 h-56 object-cover"
              />
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{noticia.titulo}</h2>
                  <div className="text-sm text-gray-500 mb-2">
                  </div>
                  <p className="text-gray-700 mb-2 font-semibold">{noticia.resumo}</p>
                  <p className="text-gray-700">{noticia.conteudo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}