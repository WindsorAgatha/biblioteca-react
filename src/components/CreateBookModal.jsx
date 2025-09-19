import { useState } from "react";

function CreateBookModal() {
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

    const [livrosList, setLivrosList] = useState(livros);
    const [usuariosList, setUsuariosList] = useState(usuarios);

    // Novo livro para POST
    const [novoLivro, setNovoLivro] = useState({
        publisher: '',
        title: '',
        isbn: '',
        authors: [''],
        publicationYear: '',
        summary: '',
        quantity: '',
        literaryGenre: { id: '', name: '' }
    });

    // Função para adicionar livro (exemplo local)
    const handleAddLivro = () => {
        const novo = {
            ...novoLivro,
            id: livrosList.length + 1
        };
        setLivrosList([...livrosList, novo]);
        // Limpa o formulário
        setNovoLivro({
            publisher: '',
            title: '',
            isbn: '',
            authors: [''],
            publicationYear: '',
            summary: '',
            quantity: '',
            literaryGenre: { id: '', name: '' }
        });
        alert("Livro cadastrado com sucesso!");
    };

    return (
        <div className="mb-8 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Adicionar Livro</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Editora"
                    className="border rounded px-2 py-1"
                    value={novoLivro.publisher}
                    onChange={e => setNovoLivro({ ...novoLivro, publisher: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Título"
                    className="border rounded px-2 py-1"
                    value={novoLivro.title}
                    onChange={e => setNovoLivro({ ...novoLivro, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="ISBN"
                    className="border rounded px-2 py-1"
                    value={novoLivro.isbn}
                    onChange={e => setNovoLivro({ ...novoLivro, isbn: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Autores (separados por vírgula)"
                    className="border rounded px-2 py-1"
                    value={novoLivro.authors.join(', ')}
                    onChange={e => setNovoLivro({ ...novoLivro, authors: e.target.value.split(',').map(a => a.trim()) })}
                />
                <input
                    type="number"
                    placeholder="Ano de publicação"
                    className="border rounded px-2 py-1"
                    value={novoLivro.publicationYear}
                    onChange={e => setNovoLivro({ ...novoLivro, publicationYear: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Quantidade"
                    className="border rounded px-2 py-1"
                    value={novoLivro.quantity}
                    onChange={e => setNovoLivro({ ...novoLivro, quantity: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Gênero literário"
                    className="border rounded px-2 py-1"
                    value={novoLivro.literaryGenre.name}
                    onChange={e => setNovoLivro({ ...novoLivro, literaryGenre: { ...novoLivro.literaryGenre, name: e.target.value } })}
                />
                <input
                    type="text"
                    placeholder="ID do gênero"
                    className="border rounded px-2 py-1"
                    value={novoLivro.literaryGenre.id}
                    onChange={e => setNovoLivro({ ...novoLivro, literaryGenre: { ...novoLivro.literaryGenre, id: e.target.value } })}
                />
                <textarea
                    placeholder="Resumo"
                    className="border rounded px-2 py-1 col-span-1 md:col-span-2"
                    value={novoLivro.summary}
                    onChange={e => setNovoLivro({ ...novoLivro, summary: e.target.value })}
                />
            </div>
            <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleAddLivro}
            >
                Salvar Livro
            </button>
        </div>
    );
}

export default CreateBookModal;
