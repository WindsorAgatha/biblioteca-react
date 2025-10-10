import { useState } from 'react'

function CreateBook() {

    const [usebook, setbook] = useState({
        id: 0,
        publisher: '',
        title: '',
        isbn: '',
        authors: [''],
        publicationYear: 0,
        summary: '',
        quantity: 0,
        literaryGenre: { id: 0, name: '' }
    })

    function handleCreateBook(e) {
        setbook({
            ...usebook,
            [e.target.name]: e.target.value
        })
        console.log(usebook)
    }

    return (
        <div className='flex flex-col w-full h-full '>
            <form action="" className='flex flex-col w-1/5 max-md:w-4/5 mx-auto mt-10 p-6 border rounded-lg shadow-lg '>
                <label htmlFor="bookTitle">Título Livro</label>
                <input onChange={handleCreateBook} type="text" id='bookTitle' name='title' className='border rounded-lg mb-4' />
                <label htmlFor="bookAuthor">Autor</label>
                <input onChange={handleCreateBook} type="text" id='bookAuthor' name='authors' className='border rounded-lg mb-4' />
                <label htmlFor="bookGenre">Gênero Literário</label>
                <input onChange={handleCreateBook} type="text" id='bookGenre' name='literaryGenre' className='border rounded-lg mb-4' />
                <label htmlFor="bookPublisher">Editora</label>
                <input onChange={handleCreateBook} type="text" id='bookPublisher' name='publisher' className='border rounded-lg mb-4' />
                <label htmlFor="bookSummary">Resumo</label>
                <input onChange={handleCreateBook} id='bookSummary' name='summary' className='border rounded-lg mb-4' />
                <label htmlFor="bookISBN">ISBN</label>
                <input onChange={handleCreateBook} type="text" id='bookISBN' name='isbn' className='border rounded-lg mb-4' />
                <label htmlFor="bookYear">Ano de Publicação</label>
                <input onChange={handleCreateBook} type="number" id='bookYear' name='publicationYear' className='border rounded-lg mb-4' />
                <label htmlFor="bookQuantity">Quantidade</label>
                <input onChange={handleCreateBook} type="number" id='bookQuantity' name='quantity' className='border rounded-lg mb-4' />
                <div className='flex justify-center'>
                    <button type='submit' className='bg-sky-400 h-8 w-40 rounded-lg border-sky-900'>Criar Livro</button>
                </div>
            </form>
        </div>
    )
}

export default CreateBook
