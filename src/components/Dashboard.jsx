import React, { useState } from 'react';

const livros = [
    { id: 1, titulo: 'Dom Casmurro', alugado: 12 },
    { id: 2, titulo: 'O Pequeno Príncipe', alugado: 18 },
    { id: 3, titulo: 'Capitães da Areia', alugado: 7 },
];

const usuarios = [
    { id: 1, nome: 'Maria', turma: '3A' },
    { id: 2, nome: 'João', turma: '3A' },
    { id: 3, nome: 'Ana', turma: '3A' },
];

const historicoLocacoes = [
    { id: 1, livro: 'Dom Casmurro', usuario: 'Maria', dataAluguel: '01/09/2025', dataDevolucao: '05/09/2025' },
    { id: 2, livro: 'O Pequeno Príncipe', usuario: 'João', dataAluguel: '03/09/2025', dataDevolucao: '07/09/2025' },
    { id: 3, livro: 'Capitães da Areia', usuario: 'Ana', dataAluguel: '02/09/2025', dataDevolucao: '06/09/2025' },
];

export default function Dashboard() {
    const [livrosList, setLivrosList] = useState(livros);
    const [usuariosList, setUsuariosList] = useState(usuarios);

    // Mock handlers
    const handleAddLivro = () => alert('Adicionar livro');
    const handleEditLivro = id => alert(`Editar livro ${id}`);
    const handleDeleteLivro = id => alert(`Excluir livro ${id}`);
    const handleAddUsuario = () => alert('Adicionar usuário');
    const handleEditUsuario = id => alert(`Editar usuário ${id}`);
    const handleDeleteUsuario = id => alert(`Excluir usuário ${id}`);

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard Biblioteca</h1>

            {/* Estatísticas */}
            <div className="flex gap-8 mb-8 flex-wrap">
                <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[180px]">
                    <h2 className="text-lg font-semibold text-gray-600 mb-2">Total de Livros</h2>
                    <p className="text-2xl font-bold text-blue-700">{livrosList.length}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[180px]">
                    <h2 className="text-lg font-semibold text-gray-600 mb-2">Total de Usuários</h2>
                    <p className="text-2xl font-bold text-blue-700">{usuariosList.length}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[180px]">
                    <h2 className="text-lg font-semibold text-gray-600 mb-2">Livros Mais Alugados</h2>
                    <ul className="text-sm mt-2">
                        {livrosList
                            .sort((a, b) => b.alugado - a.alugado)
                            .slice(0, 3)
                            .map(livro => (
                                <li key={livro.id} className="flex justify-between">
                                    <span>{livro.titulo}</span>
                                    <span className="text-blue-600 font-bold">{livro.alugado}</span>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>

            {/* CRUD Livros */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Livros</h2>
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={handleAddLivro}
                    >
                        Adicionar Livro
                    </button>
                </div>
                <table className="min-w-full bg-white rounded-lg shadow mb-2">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-3 px-4 text-left font-semibold text-gray-600">Título</th>
                            <th className="py-3 px-4 text-left font-semibold text-gray-600">Alugado</th>
                            <th className="py-3 px-4 text-left font-semibold text-gray-600 text-end">Ações</th>
                        </tr>
                    </thead>
                    <tbody >
                        {livrosList.map(livro => (
                            <tr key={livro.id} className="border-b last:border-none">
                                <td className="py-2 px-4">{livro.titulo}</td>
                                <td className="py-2 px-4">{livro.alugado}</td>
                                <td className="py-2 px-4 flex justify-end ">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                        onClick={() => handleEditLivro(livro.id)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                                        onClick={() => handleDeleteLivro(livro.id)}
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* CRUD Usuários */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Usuários</h2>
                    <button
                        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-green-700"
                        onClick={handleAddUsuario}
                    >
                        Adicionar Usuário
                    </button>
                </div>
                <table className="min-w-full bg-white rounded-lg shadow mb-2">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-3 px-4 text-left font-semibold text-gray-600">Nome</th>
                            <th className="py-3 px-4 text-left font-semibold text-gray-600">Turma</th>
                            <th className="py-3 px-4  font-semibold text-gray-600 text-end">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuariosList.map(usuario => (
                            <tr key={usuario.id} className="border-b last:border-none">
                                <td className="py-2 px-4">{usuario.nome}</td>
                                <td className="py-2 px-4">{usuario.turma}</td>
                                <td className="py-2 px-4 flex justify-end">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                        onClick={() => handleEditUsuario(usuario.id)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                                        onClick={() => handleDeleteUsuario(usuario.id)}
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Histórico de Locações */}
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Histórico de Locações</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-3 px-4 text-left font-semibold text-gray-600">Livro</th>
                                <th className="py-3 px-4 text-left font-semibold text-gray-600">Usuário</th>
                                <th className="py-3 px-4 text-left font-semibold text-gray-600">Data do Aluguel</th>
                                <th className="py-3 px-4 text-left font-semibold text-gray-600">Data de Devolução</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historicoLocacoes.map(locacao => (
                                <tr key={locacao.id} className="border-b last:border-none">
                                    <td className="py-2 px-4">{locacao.livro}</td>
                                    <td className="py-2 px-4">{locacao.usuario}</td>
                                    <td className="py-2 px-4">{locacao.dataAluguel}</td>
                                    <td className="py-2 px-4">{locacao.dataDevolucao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
