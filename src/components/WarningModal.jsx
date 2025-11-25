import React from 'react'

function WarningModal({ isWarningModalOpen }) {
    return (
        <div className={`z-50 h-30 w-60 bg-gray-50 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3' ${isWarningModalOpen ? 'absolute' : 'hidden'}`}>
            <p className='text-red-700'>Deseja apagar o livro?</p>
            <button className='bg-white hover:bg-gray-400 w-12'>Sim</button>
            <button className='bg-white hover:bg-gray-400 w-12'>Não</button>
        </div>
    )
}

export default WarningModal
