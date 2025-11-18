import React from "react";
import { useState, useEffect } from "react";
export default function StudentList() {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('http://localhost:5287/api/Student')
      .then(data => data.json())
      .then(data => console.log(data))
  })



  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">Lista de Alunos</h1>
            <p className="text-sm text-gray-600">Exibição de nomes e turmas — apenas a interface (dados por props).</p>
          </div>
        </header>

        <section className="bg-white rounded-xl shadow p-4">
          <div className="text-sm text-gray-500 mb-4">Total: <span className="font-medium text-gray-700">{students.length}</span></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {students.length === 0 ? (
              // placeholder cards to show layout when não há dados
              [1, 2, 3].map((_, i) => (
                <article key={i} className="flex items-center gap-4 p-4 border rounded-lg bg-blue-50/50">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-blue-800 font-bold">
                    A{i + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-blue-900">Nome do Aluno</h3>
                    <p className="text-sm text-gray-600">Turma: 3º Ano A</p>
                  </div>
                </article>
              ))
            ) : (
              students.map((s, idx) => (
                <article key={s.id ?? idx} className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 font-semibold">
                    {String(s.name || "").split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase() || "NA"}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-blue-900">{s.name}</h3>
                    <p className="text-sm text-gray-600">Turma: <span className="font-medium text-gray-700">{s.turma}</span></p>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}