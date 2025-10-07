import React from 'react'
import { useState } from 'react'
function Student() {


    // Estado inicial do estudante

    const [student, setStudent] = useState({
        name: '',
        cpf: '',
        registrationNumber: '',
        address: '',
        phone: '',
        isActive: true,
        role: 0,
        classRoom: {
            id: 0
        }
    })
    // Função para lidar com mudanças nos campos do formulário
    function handleStudentChange(e) {
        const { name, value } = e.target;





        setStudent(prevState => ({
            ...prevState,
            [name]: value
        }));




    }
    // Função para lidar com a submissão do formulário
    const handleAddStudent = async (e) => {
        e.preventDefault();
        // Validação simples para garantir que todos os campos obrigatórios estão preenchidos
        if (!student.name || !student.cpf || !student.address || !student.phone) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        try {
            const response = await fetch('http://localhost:5287/api/Student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(student),
            })

            const { ok } = response;

            if (!ok) {
                alert('erro no cadastro');
            }
            const data = await response.json();
            alert('Estudante cadastrado com sucesso!');

        } catch (error) {

        }
    }

    return (
        <div className='h-full w-full flex p-10 justify-center items-center text-2xl font-bold bg-black flex-col'>
            <form className=" mx-auto bg-white rounded-lg shadow p-8 space-y-6">
                <div>
                    <label className="block font-semibold mb-1" htmlFor="name">Nome</label>
                    <input onChange={handleStudentChange} type="text" id="name" name="name" className="w-full border rounded px-3 py-2" required />
                </div>
                <div>
                    <label className="block font-semibold mb-1" htmlFor="cpf">CPF</label>
                    <input type="text" id="cpf" name="cpf" className="w-full border rounded px-3 py-2" required />
                </div>
                <div>
                    <label className="block font-semibold mb-1" htmlFor="registrationNumber">Matrícula</label>
                    <input type="text" id="registrationNumber" name="registrationNumber" className="w-full border rounded px-3 py-2" required />
                </div>
                <div>
                    <label className="block font-semibold mb-1" htmlFor="address">Endereço</label>
                    <input type="text" id="address" name="address" className="w-full border rounded px-3 py-2" required />
                </div>
                <div>
                    <label className="block font-semibold mb-1" htmlFor="phone">Telefone</label>
                    <input type="text" id="phone" name="phone" className="w-full border rounded px-3 py-2" required />
                </div>
                <div>
                    <label className="block font-semibold mb-1" htmlFor="isActive">Ativo</label>
                    <select id="isActive" name="isActive" className="w-full border rounded px-3 py-2">
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>
                </div>
                <div>
                    <label className="block font-semibold mb-1" htmlFor="role">Função</label>
                    <input type="number" id="role" name="role" className="w-full border rounded px-3 py-2" required />
                </div>
                <fieldset className="border rounded px-3 py-2">
                    <legend className="font-semibold mb-2">Turma</legend>
                    <div className="mb-2">
                        <label className="block mb-1" htmlFor="classRoomId">ID da Turma</label>
                        <input type="number" id="classRoomId" name="classRoomId" className="w-full border rounded px-3 py-2" required />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1" htmlFor="classRoomDescription">Descrição</label>
                        <input type="text" id="classRoomDescription" name="classRoomDescription" className="w-full border rounded px-3 py-2" required />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="classRoomShift">Turno</label>
                        <input type="text" id="classRoomShift" name="classRoomShift" className="w-full border rounded px-3 py-2" required />
                    </div>
                </fieldset>
                <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition">Salvar</button>
            </form>

        </div>
    )
}


export default Student





// {
//   "id": 0,
//   "name": "string",
//   "cpf": "66951704165",
//   "registrationNumber": "string",
//   "address": "string",
//   "phone": "string",
//   "isActive": true,
//   "role": 0,
//   "classRoom": {
//     "id": 0,
//     "description": "string",
//     "shift": "string"
//   }
// }