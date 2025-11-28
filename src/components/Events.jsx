import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    const controller = new AbortController()

    async function load() {
      try {
        setLoading(true)
        const res = await fetch('http://localhost:5032/api/Event', { signal: controller.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        if (mounted) setEvents(Array.isArray(json) ? json : [json])
      } catch (err) {
        if (mounted) setError(err.message || 'Erro ao carregar eventos')
      } finally {
        if (mounted) setLoading(false)
      }
    }

    load()
    return () => {
      mounted = false
      controller.abort()
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen p-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Eventos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-white h-36 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen p-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Eventos</h1>
          <div className="text-red-600">Erro: {error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-blue-900 mb-6">Eventos</h1>

        {events.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow text-gray-700">Nenhum evento disponível.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((ev) => {
              const title = ev.title ?? ev.name ?? 'Evento'
              const description = ev.description ?? ''
              const start = ev.startDate ? new Date(ev.startDate).toLocaleString() : null
              const end = ev.endDate ? new Date(ev.endDate).toLocaleString() : null
              const location = ev.location ?? 'Não informado'
              const classrooms = Array.isArray(ev.classrooms) ? ev.classrooms : []

              return (
                <Link
                  key={ev.id}
                  to={`/eventos/${ev.id}`}
                  className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                  aria-label={`Abrir detalhes do evento ${title}`}
                >
                  <div className="p-4 h-full flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
                      <p className="text-sm text-gray-500 mt-1">{location}</p>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
                    </div>

                    <div className="mt-4 text-xs text-gray-500">
                      {start && <span className="mr-2">Início: {start}</span>}
                      {end && <span>Fim: {end}</span>}
                      <div className="mt-2 text-gray-600">
                        Turmas: {classrooms.length > 0 ? classrooms.map(c => c.description).join(', ') : '—'}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}