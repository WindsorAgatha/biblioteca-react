import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EventDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    const controller = new AbortController()

    async function load() {
      try {
        setLoading(true)
        const res = await fetch(`http://localhost:5032/api/Event/${id}`, { signal: controller.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        if (mounted) setEvent(json)
      } catch (err) {
        if (mounted) setError(err.message || 'Erro ao carregar evento')
      } finally {
        if (mounted) setLoading(false)
      }
    }

    load()
    return () => {
      controller.abort()
      mounted = false
    }
  }, [id])

  if (loading) {
    return <div className="p-6 text-center text-sky-700">Carregando evento...</div>
  }
  if (error) {
    return <div className="p-6 text-center text-red-600">Erro: {error}</div>
  }
  if (!event) {
    return <div className="p-6 text-center text-gray-700">Evento não encontrado.</div>
  }

  const title = event.title ?? event.name ?? 'Evento'
  const description = event.description ?? ''
  const start = event.startDate ? new Date(event.startDate).toLocaleString() : 'Não informado'
  const end = event.endDate ? new Date(event.endDate).toLocaleString() : 'Não informado'
  const location = event.location ?? 'Não informado'
  const classrooms = Array.isArray(event.classrooms) ? event.classrooms : []

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Voltar</button>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </div>

        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div className="text-sm text-gray-500">Início: <span className="font-medium text-gray-700">{start}</span></div>
          <div className="text-sm text-gray-500">Fim: <span className="font-medium text-gray-700">{end}</span></div>
          <div className="text-sm text-gray-500">Local: <span className="font-medium text-gray-700">{location}</span></div>

          <div>
            <h2 className="font-semibold text-gray-800 mb-1">Descrição</h2>
            <p className="text-gray-700">{description || 'Sem descrição'}</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-800 mb-1">Turmas</h2>
            {classrooms.length === 0 ? (
              <p className="text-gray-600">Nenhuma turma associada.</p>
            ) : (
              <ul className="list-disc list-inside text-gray-700">
                {classrooms.map(c => (
                  <li key={c.id}>{c.description} — {c.shift}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}