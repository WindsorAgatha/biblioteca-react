import React from 'react'
import { useState } from 'react'
function CreateBookRecommendation() {

    const [useBookRecommendation, setBookRecommendation] = useState({
        id: 0,
        teacherId: 0,
        book: {
            id: 0,
            publisher: '',
            title: '',
            isbn: '',
            authors: [''],
            publicationYear: 0,
            summary: '',
            quantity: 0,
            literalyGenre: {
                id: 0,
                name: '',
            }
        },
        recommendationDate: '',
        description: '',
        classroom: {
            id: 0,
            description: '',
            shift: '',
        }
    })

    function handleBookRecommendation(e) {
        setBookRecommendation({

            [e.target.name]: e.target.value
        })
        console.log(useBookRecommendation)
    }


    return (
        <div className='min-w-full relative mx-auto bg-slate-500 rounded-lg shadow p-8 space-y-6'>
            <form className="min-w-full relative mx-auto bg-slate-300 rounded-lg shadow p-8 space-y-6">
                <label htmlFor="bookTitle" className="block font-semibold mb-1">Nome do Livro</label>
                <input onChange={handleBookRecommendation} type='text' id='bookTitle' name='title'></input>

                <label htmlFor="bookAuthor" className="block font-semibold mb-1">Autor</label>
                <input onChange={handleBookRecommendation} type='text' id='bookAuthor' name='authors'></input>

                <label htmlFor="bookGenre" className="block font-semibold mb-1">Gênero Literário</label>
                <input onChange={handleBookRecommendation} type='text' id='bookGenre' name='literalyGenre'></input>

                <label htmlFor="bookYear" className="block font-semibold mb-1">Ano de Publicação</label>
                <input onChange={handleBookRecommendation} type='text' id='bookYear' name='publicationYear'></input>

                <label htmlFor="bookSummary" className="block font-semibold mb-1">Resumo</label>
                <textarea onChange={handleBookRecommendation} id='bookSummary' name='summary'></textarea>

                <label htmlFor="recommendationDate" className="block font-semibold mb-1">Data da Recomendação</label>
                <input onChange={handleBookRecommendation} type='date' id='recommendationDate' name='recommendationDate'></input>

                <label htmlFor="description" className="block font-semibold mb-1">Descrição</label>/
                <textarea onChange={handleBookRecommendation} id='description' name='description'></textarea>

                <label htmlFor="classroom" className="block font-semibold mb-1">Turma</label>
                <input onChange={handleBookRecommendation} type='text' id='classroom' name='classroom'></input>


                <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition">Enviar</button>

            </form>
        </div>
    )
}

export default CreateBookRecommendation




// [
//   {
//     "id": 0,
//     "teacherId": 0,
//     "book": {
//       "id": 0,
//       "publisher": "string",
//       "title": "string",
//       "isbn": "string",
//       "authors": [
//         "string"
//       ],
//       "publicationYear": 9999,
//       "summary": "string",
//       "quantity": 2147483647,
//       "literaryGenre": {
//         "id": 0,
//         "name": "string"
//       }
//     },
//     "recommendationDate": "2025-10-10",
//     "description": "string",
//     "classroom": {
//       "id": 0,
//       "description": "string",
//       "shift": "string"
//     }
//   }
// ]