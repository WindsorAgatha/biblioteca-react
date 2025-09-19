import React, { useState } from 'react';
import eventpng from '../assets/Aventura.png';

const eventos = [
  {
    title: "Feira de Ciências 2025",
    date: "2025-09-18",
    description: `Estudantes apresentarão projetos científicos e tecnológicos. 
Venha prestigiar e aprender com as ideias inovadoras dos alunos! 
Haverá palestras, oficinas e exposição de trabalhos durante todo o dia. 
Participe e incentive a pesquisa e a criatividade!`,
    image: eventpng,
  },
  {
    title: "Semana da Arte",
    date: "2025-07-10",
    description: `Exposições artísticas e apresentações culturais. Uma semana dedicada à expressão criativa dos estudantes, com pintura, música, teatro e dança.`,
    image: "/images/arte.jpg",
  },
  {
    title: "Mostra Esportiva",
    date: "2024-11-05",
    description: `Competições esportivas interclasses e atividades físicas. Venha torcer e participar das atividades que promovem saúde e integração.`,
    image: "/images/esporte.jpg",
  },
  {
    title: "Clube de Leitura",
    date: "2025-10-01",
    description: `Participe do nosso clube de leitura! Venha debater o livro do mês com outros leitores, compartilhar opiniões e fazer novas amizades.`,
    image: "/images/leitura.jpg",
  },
];

function compareDates(a, b) {
  return new Date(b.date) - new Date(a.date);
}

export default function Events() {
  const [page, setPage] = useState(0);
  const eventosOrdenados = [...eventos].sort(compareDates);
  const total = eventosOrdenados.length;

  const evento = eventosOrdenados[page];

  return (
    <div className="max-w-3xl mx-auto p-6 font-serif h-screen overflow-y-auto bg-gray-200">
        <h1 className='text-6xl text-blue-900'>Eventos</h1>
      <article className="bg-white rounded-xl h-5/6 shadow-lg overflow-y-scroll">
        <img
          src={evento.image || eventpng}
          alt={evento.title}
          className="w-full h-[28rem] object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{evento.title}</h1>
          <p className="text-lg text-blue-700 mb-6">{new Date(evento.date).toLocaleDateString()}</p>
          <div className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
            {evento.description}
          </div>
        </div>
      </article>
      <div className="flex justify-between items-center mt-8">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          Evento anterior
        </button>
        <span className="text-gray-600">
          {page + 1} de {total}
        </span>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          onClick={() => setPage(page + 1)}
          disabled={page === total - 1}
        >
          Próximo evento
        </button>
      </div>
    </div>
  );
}