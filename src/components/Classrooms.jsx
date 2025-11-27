import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Classrooms() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5032/api/Classroom", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Servidor retornou ${res.status}`);
        const data = await res.json();
        if (mounted) setClasses(data ?? []);
      } catch (err) {
        if (mounted) setError(err.message || "Erro desconhecido");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Turmas</h1>
          <p className="text-sm text-gray-500">{classes.length} turmas</p>
        </header>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-lg h-28" />
            ))}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            Erro ao carregar turmas: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {classes.map((c) => (
              <Link
                key={c.id}
                to={`/classes/${c.id}`}
                className="block bg-white rounded-lg p-4 shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                aria-label={`Abrir detalhes da turma ${c.description ?? c.description}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-md flex items-center justify-center font-semibold">
                    {String(c.id)}
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-800 truncate">
                      {c.description ?? "Sem descrição"}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{c.shift ?? "Turno não informado"}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}