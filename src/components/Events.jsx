import React, { useEffect, useState } from "react";

export default function Events() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Exemplo: substitua pelo seu endpoint real se desejar
  useEffect(() => {
    // Simulação de fetch, troque por sua API se necessário
    setTimeout(() => {
      setEventos([
        {
          id: 1,
          nome: "Feira de Ciências",
          data: "2025-10-15",
          descrição: "Apresente seu projeto científico e participe de oficinas interativas.",
          instrucoes: "Traga seu crachá escolar e chegue 15 minutos antes do início.",
          imagem: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: 2,
          nome: "Semana Literária",
          data: "2025-11-05",
          descrição: "Palestras com autores, troca de livros e concurso de poesia.",
          instrucoes: "Inscreva-se na secretaria até 01/11. Leve um livro para troca.",
          imagem: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: 3,
          nome: "Gincana Esportiva",
          data: "2025-12-01",
          descrição: "Competições esportivas entre turmas e premiação para os vencedores.",
          instrucoes: "Vista o uniforme da escola e traga garrafa de água.",
          imagem: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-4xl mx-auto p-6 font-serif">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Eventos da Escola</h1>
        {loading ? (
          <div className="text-center text-gray-500 py-20">Carregando eventos...</div>
        ) : (
          <div className="flex flex-col gap-10">
            {eventos.map(evento => (
              <div key={evento.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                <img
                  src={evento.imagem}
                  alt={evento.nome}
                  className="w-full md:w-72 h-60 object-cover"
                />
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{evento.nome}</h2>
                    <p className="text-blue-700 font-semibold mb-2">
                      {new Date(evento.data).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 mb-3">
                      <span className="font-semibold">Detalhes: </span>
                      {evento.detalhes}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Instruções: </span>
                      {evento.instrucoes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}