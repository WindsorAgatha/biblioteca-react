import React, { useId, useState } from 'react'
import { Form } from 'react-router-dom'

function CreateEvent() {


    const [event, setEvent] = useState({
        id: 0,
        name: '',
        description: '',
        date: ''
    })



    const handleCreateEvent = (event) => {
        setEvent({
            ...event,
            [event.target.name]: event.target.value
        })
        console.log(event) 
    }

    return (
        <Form method="post" className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Criar Evento</h2>

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome do Evento</label>
                <input
                    onChange={handleCreateEvent}
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="Ex: Feira de Ciências"
                />
            </div>
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Data e Hora</label>
                <input
                    onChange={handleCreateEvent}
                    id="date"
                    name="date"
                    type="datetime-local"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 resize-vertical focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="Detalhes do evento, local, público-alvo, etc."
                />
            </div>
            <div className="flex items-center justify-end gap-3">
                <button type="reset" className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Limpar</button>
                <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700">Salvar Evento</button>
            </div>
        </Form>
    )
}

export default CreateEvent
