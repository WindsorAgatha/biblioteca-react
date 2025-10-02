import React from 'react'
import imgCalendar from '../assets/calendrio2025.png'

function Calendar() {
    return (
        <div className='flex justify-center items-center'>
            <img src={imgCalendar} alt="Calendário 2025" className='w-2/4 m-10 shadow-lg' />
        </div>
    )
}

export default Calendar
