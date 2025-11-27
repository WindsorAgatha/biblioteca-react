import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ClassroomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [classroom, setClassroom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5032/api/Classroom/${id}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Servidor retornou ${res.status}`);
        const data = await res.json();
        if (mounted) setClassroom(data);
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
  }, [id]);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Voltar
          </button>
          <h2 className="text-xl font-semibold text-gray-800">Detalhes da Turma</h2>
        </div>

        {loading && <div className="animate-pulse bg-white rounded-lg h-40" />}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            Erro ao carregar turma: {error}
          </div>
        )}

        {classroom && (
          <div className="bg-white rounded-lg p-6 shadow">
            <dl className="grid grid-cols-1 gap-4">
              <div>
                <dt className="text-sm text-gray-500">ID</dt>
                <dd className="text-lg font-medium text-gray-800">{classroom.id}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Descrição</dt>
                <dd className="text-lg font-medium text-gray-800">{classroom.description}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Turno</dt>
                <dd className="text-lg font-medium text-gray-800">{classroom.shift}</dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}