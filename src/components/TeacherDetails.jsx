import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function TeacherDetails() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setNotFound(false);
    setError(null);

    fetch(`http://localhost:5032/api/Teacher/${id}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) throw new Error("404");
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setTeacher(data || null);
      })
      .catch((err) => {
        if (!mounted) return;
        if (err.message === "404") setNotFound(true);
        else setError(err.message || "Erro ao carregar professor");
        setTeacher(null);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <span className="text-gray-600">Carregando professor...</span>
      </div>
    );
  }

  if (notFound || !teacher) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-red-600 mb-2">Professor não encontrado</h1>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Link to="/professor" className="mt-4 text-blue-600 hover:underline">
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6 my-6 font-sans">
      <h1 className="text-2xl font-semibold mb-4">Detalhes do Professor</h1>

      <div className="space-y-2 text-gray-700">
        <div>
          <span className="font-medium">ID: </span>
          <span>{teacher.id}</span>
        </div>

        <div>
          <span className="font-medium">Nome: </span>
          <span>{teacher.name}</span>
        </div>

        <div>
          <span className="font-medium">Número de registro: </span>
          <span>{teacher.registrationNumber}</span>
        </div>

        <div>
          <span className="font-medium">Status: </span>
          <span className={teacher.isActive ? "text-green-700" : "text-red-600"}>
            {teacher.isActive ? "Ativo" : "Inativo"}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <Link to="/professor" className="text-sm text-gray-600 hover:underline">
          Voltar à lista
        </Link>
      </div>
    </div>
  );
}