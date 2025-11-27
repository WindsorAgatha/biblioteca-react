import React from "react";

const suggestions = [
  {
    professor: "Prof. Ana Paula",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    livro: "O Pequeno Príncipe",
    descricao: "Obra clássica que aborda temas universais como amizade, amor e responsabilidade. Indicado para todas as idades.",
  },
  {
    professor: "Prof. Carlos Eduardo",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    livro: "Dom Casmurro",
    descricao: "Romance de Machado de Assis que explora questões de memória, dúvida e ciúme. Leitura recomendada para análise literária.",
  },
  {
    professor: "Prof. Juliana Souza",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    livro: "A Revolução dos Bichos",
    descricao: "Fábula política de George Orwell que discute poder e manipulação. Excelente para debates sobre sociedade.",
  },
];

export default function TeacherSuggestions({isDarkMode}) {
  return (
    <div className={`min-h-screen py-6 px-2 flex flex-col items-center transition duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <h1 className={`text-2xl md:text-3xl font-bold  mb-6 md:mb-8 text-center border-b-2 border-blue-700 pb-3 w-full max-w-3xl transition duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Recomendações de Leitura dos Professores
      </h1>
      <div className="w-full max-w-6xl">
        <div className="block md:hidden">
          {/* Mobile cards */}
          {suggestions.map((s, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow border border-gray-200 mb-4 p-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={s.photo}
                  alt={s.professor}
                  className="w-12 h-12 rounded-full border border-gray-300 object-cover"
                />
                <span className="font-medium text-gray-700">{s.professor}</span>
              </div>
              <div className="font-semibold text-blue-800 mb-1">{s.livro}</div>
              <div className="text-gray-600 text-sm">{s.descricao}</div>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          {/* Desktop table */}
          <table className={`w-full  rounded-lg shadow border transition duration-300  ${isDarkMode ? 'bg-slate-200 text-white' : 'bg-white text-gray-800'}`}>
            <thead>
            <tr className={` transition duration-300 ${isDarkMode ? 'bg-blue-950' : 'bg-blue-900'}`}>
                <th className="py-3 px-2 font-semibold text-left rounded-tl-lg">Professor</th>
                <th className="py-3 px-2 font-semibold text-left">Livro</th>
                <th className="py-3 px-2 font-semibold text-left rounded-tr-lg">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {suggestions.map((s, idx) => (
                <tr key={idx} className="border-t border-gray-100 hover:bg-blue-50 transition">
                  <td className="py-4 px-2 flex items-center gap-3">
                    <img
                      src={s.photo}
                      alt={s.professor}
                      className="w-12 h-12 rounded-full border border-gray-300 object-cover"
                    />
                    <span className="font-medium text-gray-700">{s.professor}</span>
                  </td>
                  <td className="py-4 px-2 font-semibold text-blue-800">{s.livro}</td>
                  <td className="py-4 px-2 text-gray-600">{s.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 md:mt-10 text-center">
          <p className={`text-base transition duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          Para enviar uma sugestão, entre em contato com a equipe pedagógica.
        </p>
      </div>
    </div>
  );
}