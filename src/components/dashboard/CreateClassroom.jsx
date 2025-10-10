import React from 'react'
import { useState } from 'react'

function CreateClassroom() {

    const [useClassroom, setUseClassroom] = useState({
        id: 0,
        title: '',
        description: '',
        shift: ''
    })

    function handleCreateClassroom(e) {
        setUseClassroom({
            ...useClassroom,
            [e.target.name]: e.target.value
        })
        console.log(useClassroom)
    }

    return (
        <div className=''>
            <form className='flex flex-col gap-4 h-96 w-96 bg-white p-4 rounded-lg shadow-lg m-auto mt-20'>
                <label htmlFor="classroomtitle" className=''>Classe</label>
                <input onChange={handleCreateClassroom} type="text" id='Classroomtitle' name='title' />
                <label htmlFor="ClassroomDescription">Descrição</label>
                <input onChange={handleCreateClassroom} type="text" id='ClassroomDescription' name='description' className='shadow-sky-700' />
                <select name='shift' id='ClassroomShift'>
                    <option value="morning">Manhã</option>
                    <option value="afternoon">Tarde</option>
                    <option value="evening">Noite</option>
                    <option value="fulltime">Integral</option>
                </select>
                <button type='submit' className='bg-blue-600'>Enviar</button>
            </form>
        </div>
    )
}

export default CreateClassroom
