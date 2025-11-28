import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const mockTeachers = [
  {
    id: 0,
    name: "string",
    cpf: "string",
    registrationNumber: "string",
    address: "string",
    phone: "string",
    isActive: true,
  },
];

export default function TeacherCards({ teachers: propTeachers = null }) {
  const [teachers, setTeachers] = useState(propTeachers ?? []);
  const [loading, setLoading] = useState(!propTeachers);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (propTeachers) return; // já recebeu via prop, não buscar
    let mounted = true;
    setLoading(true);
    setError(null);
    fetch("http://localhost:5032/api/Teacher")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setTeachers(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Erro ao carregar professores");
        setTeachers([]);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [propTeachers]);

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Professores</h2>

      {loading && <div className="text-gray-600">Carregando professores...</div>}
      {error && <div className="text-red-600">Erro: {error}</div>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(teachers.length ? teachers : mockTeachers).map((t) => (
            <article
              key={t.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">ID: {t.id}</p>
                </div>
                <span
                  className={
                    "text-xs px-2 py-1 rounded-full font-semibold " +
                    (t.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800")
                  }
                >
                  {t.isActive ? "Ativo" : "Inativo"}
                </span>
              </div>

              <div className="text-sm text-gray-700 space-y-1">
                <div>
                  <span className="font-medium">CPF: </span>
                  <span>{t.cpf}</span>
                </div>
                <div>
                  <span className="font-medium">Matrícula: </span>
                  <span>{t.registrationNumber}</span>
                </div>
                <div>
                  <span className="font-medium">Endereço: </span>
                  <span>{t.address}</span>
                </div>
                <div>
                  <span className="font-medium">Telefone: </span>
                  <span>{t.phone}</span>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-end">
                <Link
                  to={`/professor/${t.id}`}
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 inline-block text-center"
                >
                  Ver
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}