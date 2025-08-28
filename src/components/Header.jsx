import './Header.css'

function Header() {
    return (
        <header>
            <nav className="drop-down-menu" aria-label="Menu móvel">
                <div className="drop-down-header">
                    <img className="logo-drop-down" src="/assets/Capturar.PNG" alt="Logo da escola"></img>
                        <button className="drop-down-toggle" aria-label="Abrir menu"
                            onclick="this.classNameList.toggle('rotated');document.querySelector('.drop-down-list').classNameList.toggle('show');">
                            &#9776;
                        </button>
                </div>
                <ul className="drop-down-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="livros.html">Livros</a></li>
                    <li><a href="#">Sugestões dos professores</a></li>
                    <li><a href="#" onclick="handleSignInModal()">Entrar/Cadastrar</a></li>
                </ul>
            </nav>
            <nav className="navbar" aria-label="Menu principal">
                <div className="img-container">
                    <img className="logo" src="/assets/Capturar.PNG" alt="Logo da escola"></img>
                </div>
                <div className="center-menu">
                    <ul className="menu-list">
                        <li className="img-nav">
                            <img className="house" src="/assets/house-solid.svg" alt="Ícone Home"></img>
                                <a href="index.html">Home</a>
                        </li>
                        <li className="img-nav">
                            <img className="book" src="/assets/book-solid.svg" alt="Ícone Livros"></img>
                                <a href="livros.html">Livros</a>
                        </li>
                        <li className="img-nav">
                            <img className="teacher" src="/assets/person-chalkboard-solid.svg" alt="Ícone Professor"></img>
                                <a href="#">Sugestões dos professores</a>
                        </li>
                    </ul>
                </div>
                <div className="login-container">
                    <a href="#" onclick="handleSignInModal()">Entrar/Cadastrar</a>
                </div>
            </nav>
        </header>
    )
}
export default Header