import './BlogContent.css'
import WanderImg from "../assets/Recomendação dos professores.png"
import classicImg from "../assets/Clássicos.png"
import adventureImg from "../assets/Aventura.png"
import fantasyImg from "../assets/Fantasia.png"
import romanceImg from "../assets/Romance.png"
import studentImg from "../assets/Gemini_Generated_Image_kca1ekkca1ekkca1.png"
import hamlet from "../assets/hamlet.jpg"
import anneFrank from "../assets/Anne Frank.jpg"

function BlogContent() {
    return (
        <main className="main">
            <section className="modal-container" aria-label="Cadastro">
                <div className="modal-sign-in">
                    <form name="form" id="submit-form" autoComplete="off">
                        <label htmlFor="nome-formulario">Nome de usuário</label>
                        <input id="nome-formulario" type="text" required />
                        <label htmlFor="senha-formulario">Crie sua senha</label>
                        <input id="senha-formulario" type="password" required />
                        <label htmlFor="confirmar-senha">Confirme sua senha</label>
                        <input id="confirmar-senha" type="password" required />
                        <label htmlFor="telefone-formulario">Telefone</label>
                        <input id="telefone-formulario" type="tel" />
                        <label htmlFor="email-formulario">Email</label>
                        <input id="email-formulario" type="email" required />
                        <label htmlFor="endereco-formulario">Endereço</label>
                        <input id="endereco-formulario" type="text" />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>
            <section className="theme-toggle-container" aria-label="Alternar tema">
                <div className="button-container">
                    <button id="btn" aria-label="Alternar tema"></button>
                </div>
            </section>
            <section className="slider-wrapper" aria-label="Destaques">
                <ul className="slides-container" id="slides-container">
                    <li className="slide" id="slide1">
                        <div className="content-slide">
                            <img src={WanderImg} alt="Recomendação dos professores" />
                        </div>
                    </li>
                    <li className="slide" id="slide2">
                        <div className="content-slide">
                            <img src={classicImg} alt="Livros clássicos" />
                        </div>
                    </li>
                    <li className="slide" id="slide3">
                        <div className="content-slide">
                            <img src={adventureImg} alt="Livros de aventura" />
                        </div>
                    </li>
                    <li className="slide" id="slide4">
                        <div className="content-slide">
                            <img src={fantasyImg} alt="Livros de fantasia" />
                        </div>
                    </li>
                    <li className="slide" id="slide5">
                        <div className="content-slide">
                            <img src={romanceImg} alt="Livros de romance" />
                        </div>
                    </li>
                </ul>
            </section>
            <section className="genre-container" aria-label="Gêneros">
                <div className="genre-grid" aria-label="Gêneros literários">
                    <h2 className="genre-title">Gêneros Literários</h2>
                    <div className="genre-boxes">
                        <a href="#" className="genre-box">Aventura</a>
                        <a href="#" className="genre-box">Romance</a>
                        <a href="#" className="genre-box">Fantasia</a>
                        <a href="#" className="genre-box">Suspense</a>
                        <a href="#" className="genre-box">Clássicos</a>
                        <a href="#" className="genre-box">Biografia</a>
                        <a href="#" className="genre-box">Ficção Científica</a>
                        <a href="#" className="genre-box">Drama</a>
                        <a href="#" className="genre-box">Poesia</a>
                        <a href="#" className="genre-box">Infantil</a>
                        {/* Adicione mais gêneros conforme necessário */}
                    </div>
                </div>
            </section>
            <section className="student-highlight" aria-label="Destaque do mês">
                <h2 className="student-highlight-title">🌟 Destaque do Julho</h2>
                <div className="student-highlight-card">
                    <div className="student-photo">
                        <img src={studentImg} alt="Foto do aluno destaque" />
                    </div>
                    <div className="student-info">
                        <h3 className="student-name">Fernanda da Silva</h3>
                        <p className="student-achievement">Alugou <strong>5 livros </strong>no mês!</p>
                        <span className="student-badge">Leitor(a) número 1</span>
                    </div>
                </div>
            </section>
            <section className="most-rented" aria-label="Mais alugados">
                <h1 className="most-rented-title">📚 Mais Alugados do Mês</h1>
                <div className="most-rented-container">
                    <ul className="list-books">
                        <li className="most-rented-card destaque">
                            <div className="rank-badge gold">1</div>
                            <img src={hamlet} alt="Capa do livro Hamlet" />
                            <p className="book-title">Hamlet</p>
                            <span className="badge-top">TOP 1</span>
                        </li>
                        <li className="most-rented-card">
                            <div className="rank-badge silver">2</div>
                            <img src={anneFrank} alt="Capa do livro Anne Frank" />
                            <p className="book-title">Anne Frank</p>
                        </li>
                        <li className="most-rented-card">
                            <div className="rank-badge bronze">3</div>
                            <img src={hamlet} alt="Capa do livro Hamlet" />
                            <p className="book-title">Hamlet</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default BlogContent;