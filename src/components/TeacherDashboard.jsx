import React from "react";

export default function TeacherDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen font-serif">
      <h1 className="text-3xl font-bold mb-8 text-blue-900 text-center">Dashboard do Professor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CRUD de Eventos Escolares */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Eventos Escolares</h2>
          <div className="flex gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition"
              onClick={() => alert("Abrir cadastro de evento")}
            >
              Adicionar Evento
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition"
              onClick={() => alert("Abrir edição de evento")}
            >
              Editar Evento
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition"
              onClick={() => alert("Abrir exclusão de evento")}
            >
              Excluir Evento
            </button>
          </div>
        </div>
        {/* CRUD de Sugestões */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Sugestões</h2>
          <div className="flex gap-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition"
              onClick={() => alert("Abrir cadastro de sugestão")}
            >
              Adicionar Sugestão
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow transition"
              onClick={() => alert("Abrir edição de sugestão")}
            >
              Editar Sugestão
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition"
              onClick={() => alert("Abrir exclusão de sugestão")}
            >
              Excluir Sugestão
            </button>
          </div>
        </div>
        {/* CRUD do Professor */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Professores</h2>
          <div className="flex gap-4">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow transition"
              onClick={() => alert("Abrir cadastro de professor")}
            >
              Adicionar Professor
            </button>
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded shadow transition"
              onClick={() => alert("Abrir edição de professor")}
            >
              Editar Professor
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition"
              onClick={() => alert("Abrir exclusão de professor")}
            >
              Excluir Professor
            </button>
          </div>
        </div>
        {/* Editar Perfil do Professor */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-yellow-700 mb-4">Editar Perfil</h2>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded shadow transition"
            onClick={() => alert("Abrir edição de perfil do professor")}
          >
            Editar Perfil do Professor
          </button>
        </div>
      </div>
    </div>
  );
}