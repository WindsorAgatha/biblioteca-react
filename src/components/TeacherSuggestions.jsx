import React, { useEffect, useState } from "react";

export default function TeacherSuggestions({ isDarkMode }) {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    fetch("http://localhost:5032/api/Suggestion")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        const items = Array.isArray(data)
          ? data.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          : [];
        setSuggestions(items);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Erro ao carregar sugestões");
        setSuggestions([]);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleString();
    } catch {
      return iso;
    }
  };

  return (
    <div className={`min-h-screen py-6 px-2 flex flex-col items-center transition duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <h1 className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center border-b-2 border-blue-700 pb-3 w-full max-w-3xl transition duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Recomendações de Leitura dos Professores
      </h1>

      <div className="w-full max-w-6xl">
        {loading && <div className="p-4 text-center text-gray-500">Carregando sugestões...</div>}
        {error && <div className="p-4 text-center text-red-600">Erro: {error}</div>}

        {!loading && !error && (
          <>
            <div className="block md:hidden">
              {suggestions.length === 0 ? (
                <div className="text-gray-600 p-4">Nenhuma sugestão encontrada.</div>
              ) : (
                suggestions.map((s) => (
                  <div key={s.id} className="bg-white rounded-lg shadow border border-gray-200 mb-4 p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-medium text-gray-700">{s.teacherName}</div>
                        <div className="text-sm text-gray-500">Prof ID: {s.teacherId}</div>
                      </div>
                      <div className="text-sm text-gray-500">{formatDate(s.createdAt)}</div>
                    </div>
                    <div className="font-semibold text-blue-800 mb-1">{s.bookTitle}</div>
                    <div className="text-gray-600 text-sm whitespace-pre-line">{s.comment}</div>
                  </div>
                ))
              )}
            </div>

            <div className="hidden md:block">
              <table className={`w-full rounded-lg shadow border transition duration-300 ${isDarkMode ? 'bg-slate-200 text-white' : 'bg-white text-gray-800'}`}>
                <thead>
                  <tr className={`${isDarkMode ? 'bg-blue-950' : 'bg-blue-900'}`}>
                    <th className="py-3 px-2 font-semibold text-left rounded-tl-lg">Professor</th>
                    <th className="py-3 px-2 font-semibold text-left">Livro</th>
                    <th className="py-3 px-2 font-semibold text-left">Comentário</th>
                    <th className="py-3 px-2 font-semibold text-left rounded-tr-lg">Criado em</th>
                  </tr>
                </thead>
                <tbody>
                  {suggestions.length === 0 ? (
                    <tr><td colSpan={4} className="p-4 text-center text-gray-600">Nenhuma sugestão encontrada.</td></tr>
                  ) : (
                    suggestions.map((s) => (
                      <tr key={s.id} className="border-t border-gray-100 hover:bg-blue-50 transition">
                        <td className="py-4 px-2">
                          <div className="font-medium text-gray-700">{s.teacherName}</div>
                          <div className="text-sm text-gray-500">Prof ID: {s.teacherId}</div>
                        </td>
                        <td className="py-4 px-2 font-semibold text-blue-800">{s.bookTitle}</td>
                        <td className="py-4 px-2 text-gray-600 whitespace-pre-line">{s.comment}</td>
                        <td className="py-4 px-2 text-sm text-gray-500">{formatDate(s.createdAt)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      <div className="mt-8 md:mt-10 text-center">
        <p className={`text-base transition duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          Para enviar uma sugestão, entre em contato com a equipe pedagógica.
        </p>
      </div>
    </div>
  );
}