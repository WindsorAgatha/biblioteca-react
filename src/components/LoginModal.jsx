import './LoginModal.css'

function LoginModal({ isOpen, setOpen }) {
    return (

        <form className=' bg-slate-100 rounded-lg shadow-lg w-72 h-96 ' style={{ display: isOpen ? 'block' : 'none' }} action="login">
            <div className='w-full flex justify-end'>
                <p onClick={() => { setOpen(false) }} className='size-7 font-bold cursor-pointer m-0'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f" >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></p>
            </div>
            <div className='flex flex-col'>
            <h1 className='text-3xl flex justify-center  mb-8'>LOGIN</h1>
            <label className='' htmlFor="">Nome de usuário:</label>
            <input type="text" placeholder='Username' />
            <label className='' htmlFor="">Senha:</label>
            <input type="text" placeholder='*' />
            <button className='w-full h-10 bg-blue-600 text-white rounded-lg mt-5 hover:bg-blue-700'>Entrar</button>
            </div>
        </form>

    )
}
export default LoginModal