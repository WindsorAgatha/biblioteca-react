import { useState } from "react";

export default function ActivityForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: ""
  });

  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:5001/api/actives", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      setSubmitted(result);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar os dados.");
    }
  }

  return (
    <div className="font-sans p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Cadastrar Atividades</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md p-6 rounded-lg">
        
        <div>
          <label className="block mb-1 font-medium">Título</label>
          <input
            type="text"
            name="title"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Descrição</label>
          <textarea
            name="description"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Data de Início</label>
          <input
            type="datetime-local"
            name="startDate"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Data de Término</label>
          <input
            type="datetime-local"
            name="endDate"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>

      {submitted && (
        <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Resultado do Envio</h3>

          <p><span className="font-semibold">Título:</span> {submitted.title}</p>
          <p><span className="font-semibold">Descrição:</span> {submitted.description}</p>
          <p><span className="font-semibold">Data de Início:</span> {submitted.startDate}</p>
          <p><span className="font-semibold">Data de Término:</span> {submitted.endDate}</p>
        </div>
      )}
    </div>
  );
}
