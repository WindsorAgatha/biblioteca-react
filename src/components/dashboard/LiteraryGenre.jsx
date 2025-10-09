import { useState } from 'react'

function LiteraryGenre() {

    const [genre, setGenre] = useState({
        id: 0,
        name: ''
    })

    function handleGenreChange(e) {
        setGenre(
            prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        )
        console.log(genre)
        if (!genre.name) {
            alert('Por favor, preencha o nome do gênero literário.');
            return;
        }
    }

    const handleAddGenre = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5287/api/LiteraryGenre', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(genre),
            })
            const { ok } = response;

            if (!ok) {
                alert('erro no cadastro');
            }
            const data = await response.json();
            alert('Gênero literário cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar gênero literário:', error);
        }
    }
    return (
        <form onSubmit={handleAddGenre} className="min-w-full relative mx-auto bg-white rounded-lg shadow p-8 space-y-6">
            <div>
                <label htmlFor="id" className="block font-semibold mb-1">ID</label>
                <input type="number" id="id" name="id" className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
                <label htmlFor="name" className="block font-semibold mb-1">Nome do Gênero Literário</label>
                <input onChange={handleGenreChange} type='text' id="name" name="name" className="w-full border rounded px-3 py-2" required />
            </div>
            <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition">Salvar</button>
        </form>
    )

}

export default LiteraryGenre
