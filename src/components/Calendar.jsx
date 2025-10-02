import React from 'react'
import imgCalendar from '../assets/calendrio2025.png'

function Calendar() {
    return (
        <div className='flex '>
            <img src={imgCalendar} alt="Calendário 2025" className='w-full h-auto m-4 rounded-lg shadow-lg' />
        </div>
    )
}

export default Calendar
