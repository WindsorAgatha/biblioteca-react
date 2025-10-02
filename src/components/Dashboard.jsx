import React, { useState, useEffect } from 'react';

const historicoLocacoes = [
    { id: 1, livro: 'Dom Casmurro', usuario: 'Maria', dataAluguel: '01/09/2025', dataDevolucao: '05/09/2025' },
    { id: 2, livro: 'O Pequeno Príncipe', usuario: 'João', dataAluguel: '03/09/2025', dataDevolucao: '07/09/2025' },
    { id: 3, livro: 'Capitães da Areia', usuario: 'Ana', dataAluguel: '02/09/2025', dataDevolucao: '06/09/2025' },
];

export default function Dashboard({ setBlurBg, setIsCreateBookOpen, setIsWarningModalOpen }) {
    const [livrosList, setLivrosList] = useState([]);
    const [usuariosList, setUsuariosList] = useState([]);
    const [editLivroId, setEditLivroId] = useState(null);
    const [editLivroData, setEditLivroData] = useState({
        publisher: '',
        title: '',
        isbn: '',
        authors: [''],
        publicationYear: '',
        summary: '',
        quantity: '',
        literaryGenre: { id: '', name: '' }
    });

    useEffect(() => {
        async function fetchLivros() {
            try {
                const response = await fetch('http://localhost:5287/api/Book');
                const data = await response.json();

                // Adiciona um campo "alugado" fake para visualização
                const livrosComAlugado = data.map(livro => ({
                    ...livro,
                    alugado: Math.floor(Math.random() * 100) // número aleatório para simular ranking
                }));

                setLivrosList(livrosComAlugado);
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
                setLivrosList([]);
            }
        }
        fetchLivros();
    }, []);

    const [showEditModal, setShowEditModal] = useState(false);

    const handleEditLivro = id => {
        const livro = livrosList.find(l => l.id === id);
        if (livro) {
            setEditLivroId(id);
            setEditLivroData({
                publisher: livro.publisher || '',
                title: livro.title || '',
                isbn: livro.isbn || '',
                authors: livro.authors || [''],
                publicationYear: livro.publicationYear || '',
                summary: livro.summary || '',
                quantity: livro.quantity || '',
                literaryGenre: livro.literaryGenre || { id: '', name: '' }
            });
            setShowEditModal(true);
            setBlurBg(true);
        }
    };

    const [eventos, setEventos] = useState([
        { id: 1, nome: 'Feira do Livro', data: '15/09/2025', descricao: 'Venha participar da nossa feira anual!', instrucoes: 'Traga seu crachá escolar.' },
        { id: 2, nome: 'Encontro de Leitura', data: '22/09/2025', descricao: 'Leitura coletiva de clássicos.', instrucoes: 'Leve seu livro favorito.' },
    ]);
    const [novoEvento, setNovoEvento] = useState({ nome: '', data: '', descricao: '', instrucoes: '' });

    const [desafios, setDesafios] = useState([
        { id: 1, descricao: 'Ler um livro de aventura' },
        { id: 2, descricao: 'Escrever uma resenha sobre seu livro favorito' },
    ]);
    const [novoDesafio, setNovoDesafio] = useState('');


    const handleAddUsuario = () => alert('Adicionar usuário');
    const handleEditUsuario = id => alert(`Editar usuário ${id}`);
    const handleDeleteUsuario = id => alert(`Excluir usuário ${id}`);

    const handleAddEvento = () => {
        if (novoEvento.nome && novoEvento.data && novoEvento.descricao) {
            setEventos([...eventos, { id: Date.now(), ...novoEvento }]);
            setNovoEvento({ nome: '', data: '', descricao: '', instrucoes: '' });
        }
    };
    const handleDeleteEvento = id => {
        setEventos(eventos.filter(e => e.id !== id));
    };

    const handleAddDesafio = () => {
        if (novoDesafio) {
            setDesafios([...desafios, { id: Date.now(), descricao: novoDesafio }]);
            setNovoDesafio('');
        }
    };
    const handleDeleteDesafio = id => {
        setDesafios(desafios.filter(d => d.id !== id));
    };

    return (
        <div className="p-2 sm:p-4 bg-gray-50 min-h-screen z-0">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 text-center">Administrar</h1>

            {/* Estatísticas */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-[140px] text-center">
                    <h2 className="text-base font-semibold text-gray-600 mb-1">Total de Livros</h2>
                    <p className="text-xl font-bold text-blue-700">{livrosList.length}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-[140px] text-center">
                    <h2 className="text-base font-semibold text-gray-600 mb-1">Total de Usuários</h2>
                    <p className="text-xl font-bold text-blue-700">{usuariosList.length}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-[140px] text-center">
                    <h2 className="text-base font-semibold text-gray-600 mb-1">Mais Alugados</h2>
                    <ul className="text-xs mt-2">
                        {livrosList
                            .sort((a, b) => b.alugado - a.alugado)
                            .slice(0, 3)
                            .map(livro => (
                                <li key={livro.id} className="flex justify-between">
                                    <span>{livro.title}</span>
                                    <span className="text-blue-600 font-bold">{livro.alugado}</span>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>

            {/* CRUD Livros */}
            <div className="mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-3 gap-2">
                    <h2 className="text-lg font-semibold text-gray-700">Livros</h2>
                    <button
                        className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
                        onClick={e => {
                            e.preventDefault();
                            setBlurBg(true);
                            setIsCreateBookOpen(true);
                        }}
                    >
                        Adicionar Livro
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow text-sm">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Título</th>
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Alugado</th>
                                <th className="py-2 px-2 text-end font-semibold text-gray-600">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livrosList.map(livro => (
                                <tr key={livro.id} className="border-b last:border-none">
                                    <td className="py-1 px-2">{livro.title}</td>
                                    <td className="py-1 px-2">{livro.alugado}</td>
                                    <td className="py-1 px-2 flex justify-end gap-2">
                                        <button
                                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs"
                                            onClick={() => handleEditLivro(livro.id)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsWarningModalOpen(true);
                                                setBlurBg(true);
                                            }}
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* CRUD Usuários */}
            <div className="mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-3 gap-2">
                    <h2 className="text-lg font-semibold text-gray-700">Usuários</h2>
                    <button
                        className="bg-blue-700 text-white px-3 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
                        onClick={handleAddUsuario}
                    >
                        Adicionar Usuário
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow text-sm">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Nome</th>
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Turma</th>
                                <th className="py-2 px-2 font-semibold text-gray-600 text-end">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuariosList.map(usuario => (
                                <tr key={usuario.id} className="border-b last:border-none">
                                    <td className="py-1 px-2">{usuario.nome}</td>
                                    <td className="py-1 px-2">{usuario.turma}</td>
                                    <td className="py-1 px-2 flex justify-end gap-2">
                                        <button
                                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs"
                                            onClick={() => handleEditUsuario(usuario.id)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
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
            </div>

            {/* CRUD Eventos */}
            <div className="mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-3 gap-2">
                    <h2 className="text-lg font-semibold text-gray-700">Eventos</h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mb-2">
                    <input
                        type="text"
                        placeholder="Nome do evento"
                        className="border rounded px-2 py-1 flex-1"
                        value={novoEvento.nome}
                        onChange={e => setNovoEvento({ ...novoEvento, nome: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Data"
                        className="border rounded px-2 py-1 flex-1"
                        value={novoEvento.data}
                        onChange={e => setNovoEvento({ ...novoEvento, data: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Descrição"
                        className="border rounded px-2 py-1 flex-1"
                        value={novoEvento.descricao}
                        onChange={e => setNovoEvento({ ...novoEvento, descricao: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Instruções"
                        className="border rounded px-2 py-1 flex-1"
                        value={novoEvento.instrucoes}
                        onChange={e => setNovoEvento({ ...novoEvento, instrucoes: e.target.value })}
                    />
                    <button
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                        onClick={handleAddEvento}
                    >
                        Adicionar Evento
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow text-sm">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Nome</th>
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Data</th>
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Descrição</th>
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Instruções</th>
                                <th className="py-2 px-2 text-end font-semibold text-gray-600">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventos.map(evento => (
                                <tr key={evento.id} className="border-b last:border-none">
                                    <td className="py-1 px-2">{evento.nome}</td>
                                    <td className="py-1 px-2">{evento.data}</td>
                                    <td className="py-1 px-2">{evento.descricao}</td>
                                    <td className="py-1 px-2">{evento.instrucoes}</td>
                                    <td className="py-1 px-2 flex justify-end">
                                        <button
                                            className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
                                            onClick={() => handleDeleteEvento(evento.id)}
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* CRUD Desafios Semanais */}
            <div className="mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-3 gap-2">
                    <h2 className="text-lg font-semibold text-gray-700">Desafios Semanais</h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mb-2">
                    <input
                        type="text"
                        placeholder="Descrição do desafio"
                        className="border rounded px-2 py-1 flex-1"
                        value={novoDesafio}
                        onChange={e => setNovoDesafio(e.target.value)}
                    />
                    <button
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                        onClick={handleAddDesafio}
                    >
                        Adicionar Desafio
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow text-sm">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Descrição</th>
                                <th className="py-2 px-2 text-end font-semibold text-gray-600">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {desafios.map(desafio => (
                                <tr key={desafio.id} className="border-b last:border-none">
                                    <td className="py-1 px-2">{desafio.descricao}</td>
                                    <td className="py-1 px-2 flex justify-end">
                                        <button
                                            className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
                                            onClick={() => handleDeleteDesafio(desafio.id)}
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Histórico de Locações */}
            <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Histórico de Locações</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow text-sm">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Livro</th>
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Usuário</th>
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Aluguel</th>
                                <th className="py-2 px-2 text-left font-semibold text-gray-600">Devolução</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historicoLocacoes.map(locacao => (
                                <tr key={locacao.id} className="border-b last:border-none">
                                    <td className="py-1 px-2">{locacao.livro}</td>
                                    <td className="py-1 px-2">{locacao.usuario}</td>
                                    <td className="py-1 px-2">{locacao.dataAluguel}</td>
                                    <td className="py-1 px-2">{locacao.dataDevolucao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
