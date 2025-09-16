import bgImg from '../assets/tijolinhos.jpg'

function Footer() {
    return (
        <footer
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: 'repeat',
                position: 'relative',
                overflow: 'hidden',
            }}
            className="w-full h-[120px] px-[30px] sticky top-0 z-10 flex items-center justify-between"
            aria-label="Menu principal"
        >
            <div
                className="absolute inset-0 bg-[rgba(10,38,71,0.85)] shadow-[0_4px_18px_rgba(10,38,71,0.12)] rounded-b-md"
                style={{ zIndex: 1 }}
            ></div>
            <div className="footer-content h-[100px] w-full text-white text-xs flex flex-col items-center justify-center gap-2 p-4 text-center relative" style={{ zIndex: 2 }}>
                <p>&copy; 2024 Biblioteca Escola Dep. Oliveira Souza. Todos os direitos reservados.</p>
                <p>Desenvolvido pelos alunos do curso técnico em informática, 3º ano</p>
            </div>
        </footer>
    )
}
export default Footer