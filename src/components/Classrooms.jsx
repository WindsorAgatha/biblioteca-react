import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Classes() {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(false);

    const elementarySchool = [
        {
            id: 1,
            name: 601
        },
        {
            id: 2,
            name: 602
        },
        {
            id: 3,
            name: 701
        },
        {
            id: 4,
            name: 702
        },
        {
            id: 5,
            name: 801
        },
        {
            id: 6,
            name: 802
        },
        {
            id: 7,
            name: 901
        },
        {
            id: 8,
            name: 902
        },

    ]

    const highSchool = [
        {
            id: 9,
            name: 101
        },
        {
            id: 20,
            name: 201
        },
        {
            id: 30,
            name: 301
        },
        {
            id: 9,
            name: 102
        },
        {
            id: 20,
            name: 202
        },
        {
            id: 30,
            name: 302
        },

    ]

    // criar um array de objetos com os nomes das atividades, ids e descrições
    const activities = [
        {
            id: 1,
            name: 'Atividade 1',
            description: 'Descrição da atividade 1'
        },]

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
                <div>
                    <section className="genre-container mb-10 bg-white" aria-label="Gêneros">
                        <div className="genre-grid max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
                            <h2 className="genre-title text-blue-900 text-2xl font-bold mb-4 text-center">Gêneros Literários</h2>
                            <div className="genre-boxes grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                                {elementarySchool.map((elementary) => (
                                    <Link to="#" key={elementary.id} className="genre-box bg-white hover:bg-blue-200 text-blue-900 font-medium rounded-lg px-4 py-2 text-center shadow transition flex items-center justify-center">{elementary.name}</Link>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* Atrividades */}
                    <div>
                        {activities.map((activity) => (
                            <div key={activity.id} className="mb-6 p-4 bg-white rounded-lg shadow">
                                <h3 className="text-xl font-semibold text-blue-900 mb-2">{activity.name}</h3>
                                <p className="text-gray-700">{activity.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    );

}

export default Classes;