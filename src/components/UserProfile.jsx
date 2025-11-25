import React from "react";
import { Link } from 'react-router-dom';

const user = {
    name: "João Silva",
    turma: "3º Ano B",
    profileImg: "https://randomuser.me/api/portraits/men/32.jpg",
    avaliacoes: [
        { livro: "Dom Casmurro", nota: 5 },
        { livro: "O Pequeno Príncipe", nota: 4 },
        { livro: "Harry Potter", nota: 5 },
    ],
    livrosAlugados: [
        "1984",
        "O Hobbit",
        "Capitães da Areia",
    ],
    trofeus: [
        { nome: "Leitor Ávido", icone: "🏆" },
        { nome: "Crítico Literário", icone: "📚" },
    ],
    favoritos: [
        "O Senhor dos Anéis",
        "O Alquimista",
        "Orgulho e Preconceito"
    ]
};

export default function UserProfile() {
    return (
        <div className="mx-auto max-w-3xl my-10 p-8 rounded-2xl shadow-2xl  bg-gray-50 to-slate-800 min-h-[70vh]">
            {/* Perfil e Atividades */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <img
                        src={user.profileImg}
                        alt="Foto de perfil"
                        className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-gray-300"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-extrabold text-gray-900">{user.name}</h2>
                        <p className="text-gray-700 text-lg"><span className="font-semibold">Turma:</span> {user.turma}</p>
                    </div>
                </div>
                <div className="flex flex-col items-end md:items-center gap-2">
                    <Link to="#" className="text-red-600 font-semibold bg-red-100 px-4 py-2 rounded-lg shadow hover:bg-red-200 transition">
                        Atividades vencidas <span className="font-bold">2</span>
                    </Link>
                </div>
            </div>

            {/* Cards de informações */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Avaliações, Alugados, Troféus */}
                <div className="flex flex-col gap-6">
                    <section className="bg-white rounded-xl shadow p-6">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">Últimas Avaliações</h3>
                        <ul className="space-y-2">
                            {user.avaliacoes.map((a, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="font-medium text-blue-900">{a.livro}</span>
                                    <span className="text-yellow-500 text-lg">{'★'.repeat(a.nota)}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white rounded-xl shadow p-6">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">Últimos Livros Alugados</h3>
                        <ul className="space-y-2">
                            {user.livrosAlugados.map((livro, i) => (
                                <li key={i} className="text-blue-900">{livro}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white rounded-xl shadow p-6">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">Troféus</h3>
                        <ul className="flex gap-6 list-none p-0 justify-center">
                            {user.trofeus.map((t, i) => (
                                <li key={i} className="flex flex-col items-center">
                                    <span className="text-4xl">{t.icone}</span>
                                    <span className="text-sm mt-1 text-blue-700">{t.nome}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
                {/* Favoritos */}
                <div className="flex flex-col gap-6 justify-center">
                    <section className="bg-white rounded-xl shadow p-6 flex-1">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">Meus Favoritos</h3>
                        <ul className="space-y-2">
                            {user.favoritos.map((fav, i) => (
                                <li key={i} className="text-blue-900">{fav}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}