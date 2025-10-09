import React from 'react'

function CreateStudentModal({ blurBg, setBlurBg, isCreateStudentOpen }) {
    return (
        <div className={` ${isCreateStudentOpen ? 'mb-6 absolute top-20 bg-slate-300 p-6 flex flex-col rounded-sm shadow-lg w-80 sm:w-96' : 'hidden'}`}>
            <div className="flex flex-col sm:flex-row justify-center items-center mb-3 gap-2">
                <h2 className="text-lg font-semibold text-white">Estudante</h2>
            </div>
            <form
                onSubmit={e => {
                    e.preventDefault();

                }}
                className="flex flex-col gap-2 sm:gap-2"
            >
                <input
                    type="text"
                    placeholder="Nome do aluno"
                    className="border rounded px-2 py-2 flex-1"
                    value=""
                    onChange={""}
                />
                <input
                    type="text"
                    placeholder="CPF"
                    className="border rounded px-2 py-1 flex-1"
                    value=""
                    onChange={""}
                />
                <input
                    type="text"
                    placeholder="Endereço"
                    className="border rounded px-2 py-1 flex-1"
                    value=""
                    onChange={""}
                />
                <input
                    type="text"
                    placeholder="Telefone"
                    className="border rounded px-2 py-1 flex-1"
                    value=""
                    onChange={""}
                />
                <input
                    type="text"
                    placeholder="URL da imagem"
                    className="border rounded px-2 py-1 flex-1"
                    value=""
                    onChange={""}
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                    Adicionar Evento
                </button>
            </form>

        </div>

    )
}

export default CreateStudentModal


