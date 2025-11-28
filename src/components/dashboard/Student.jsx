import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function StudentList() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    fetch('http://localhost:5032/api/Student')
      .then(res => {
        if (!res.ok) throw new Error('Erro ao carregar estudantes')
        return res.json()
      })
      .then(data => {
        if (mounted) setStudents(data)
      })
      .catch(err => {
        if (mounted) setError(err.message)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => { mounted = false }
  }, [])

  if (loading) return <div className="p-6 text-center text-sky-700">Carregando estudantes...</div>
  if (error) return <div className="p-6 text-center text-red-600">Erro: {error}</div>

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Estudantes</h2>

      {students.length === 0 ? (
        <div className="text-gray-600">Nenhum estudante encontrado.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {students.map(s => {
            const classDesc = s.classroomDescription || s.classRoom?.description || s.classroom?.description || '—'
            return (
              <Link
                key={s.id}
                to={`/administrador/aluno/${s.id}`}
                className="block bg-white rounded-lg shadow p-4 hover:shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer"
                aria-label={`Abrir atividades de ${s.name}`}
              >
                <div className="text-lg font-medium text-gray-800 truncate">{s.name}</div>
                <div className="text-sm text-gray-500 mt-1">{classDesc}</div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
