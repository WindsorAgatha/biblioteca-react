import React from "react";

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
};

export default function UserProfile() {
    return (
        <div className=" mx-auto w-4/5 mt-10 p-6 rounded-xl shadow-lg bg-gray-100">

            <div className="flex flex-row mb-4 justify-center items-center gap-8">
                <div className="flex flex-row items-center">
                    <img
                        src={user.profileImg}
                        alt="Foto de perfil"
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-600"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-bold flex-col">{user.name}</h2>
                    <p className="text-gray-600"><span className="font-semibold">Turma:</span> {user.turma}</p>
                </div>
            </div>

            <hr className="my-6" />

            <section>
                <h3 className="text-lg font-semibold mb-2">Últimas Avaliações</h3>
                <ul className="list-disc ml-5 mb-4">
                    {user.avaliacoes.map((a, i) => (
                        <li key={i}>
                            <span className="font-medium">{a.livro}</span>: {a.nota} <span className="text-yellow-500">⭐</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-2">Últimos Livros Alugados</h3>
                <ul className="list-disc ml-5 mb-4">
                    {user.livrosAlugados.map((livro, i) => (
                        <li key={i}>{livro}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-2">Troféus</h3>
                <ul className="flex gap-6 list-none p-0">
                    {user.trofeus.map((t, i) => (
                        <li key={i} className="flex flex-col items-center">
                            <span className="text-3xl">{t.icone}</span>
                            <span className="text-sm mt-1">{t.nome}</span>
                        </li>
                    ))}
                </ul>
            </section>
            
        </div>
    )
};