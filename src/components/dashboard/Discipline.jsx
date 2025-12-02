import React, { useEffect, useState } from "react";

export default function Discipline() {
  const [disciplines, setDisciplines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    fetch("http://localhost:5032/api/Discipline")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setDisciplines(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Erro ao carregar disciplinas");
        setDisciplines([]);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    if (!name.trim()) {
      setSubmitError("Nome é obrigatório.");
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        id: 0,
        name: name.trim(),
        description: description.trim(),
      };

      const res = await fetch("http://localhost:5032/api/Discipline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => null);
        throw new Error(text || `HTTP ${res.status}`);
      }

      const created = await res.json().catch(() => null);
      setSubmitSuccess("Disciplina criada com sucesso.");
      setName("");
      setDescription("");

      // refresh list
      const listRes = await fetch("http://localhost:5032/api/Discipline");
      if (listRes.ok) {
        const listData = await listRes.json().catch(() => []);
        setDisciplines(Array.isArray(listData) ? listData : []);
      }
    } catch (err) {
      setSubmitError(err.message || "Erro ao criar disciplina.");
    } finally {
      setSubmitting(false);
      setTimeout(() => setSubmitSuccess(null), 3000);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Disciplinas</h2>

      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-3">Criar nova disciplina</h3>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
            disabled={submitting}
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Descrição</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded px-3 py-2 resize-none"
            rows={3}
            disabled={submitting}
          />
        </div>

        {submitError && <div className="text-sm text-red-600 mb-2">{submitError}</div>}
        {submitSuccess && <div className="text-sm text-green-600 mb-2">{submitSuccess}</div>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-60"
          disabled={submitting}
        >
          {submitting ? "Enviando..." : "Criar disciplina"}
        </button>
      </form>

      {loading && <div className="text-gray-600">Carregando disciplinas...</div>}
      {error && <div className="text-red-600">Erro: {error}</div>}

      {!loading && !error && (
        <>
          {disciplines.length === 0 ? (
            <div className="text-gray-600">Nenhuma disciplina encontrada.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {disciplines.map((d) => (
                <div
                  key={d.id}
                  className="block bg-white rounded-lg shadow p-4 hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-800">{d.name}</h3>
                    <span className="text-sm text-gray-500">ID: {d.id}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {d.description || "Sem descrição."}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
