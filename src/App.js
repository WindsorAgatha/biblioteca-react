
import Header from './components/Header';
import Footer from './components/Footer';
import BlogContent from './components/BlogContent';
import LoginModal from './components/LoginModal';
import Books from './components/Books';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RegisterModal from './components/RegisterModal';
import CreateBookModal from './components/CreateBookModal';
import UserProfile from './components/UserProfile';
import BookDetails from './components/BookDetails';
import BlurBg from './components/BlurBg';

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [blurBg, setBlurBg] = useState(false);

  return (
    <>

      <HashRouter>
        <div className=''>
          <Header setLoginOpen={setIsLoginOpen} setRegisterOpen={setRegisterOpen} />
          <div className='w-full flex justify-center '>
            <LoginModal setLoginOpen={setIsLoginOpen} isLoginOpen={isLoginOpen} />
            <RegisterModal setRegisterOpen={setRegisterOpen} isRegisterOpen={isRegisterOpen} />
            <CreateBookModal />
          </div>
          <BlurBg blurBg={blurBg} >
            <Routes>
              <Route path="/livros" element={<Books />} />
              <Route />
              <Route path="/" element={<BlogContent />} />
              <Route path="/administrador" element={<Dashboard setBlurBg={setBlurBg}/>} />
              <Route path="/perfil" element={<UserProfile />} />
              <Route path="/detalhelivro" element={<BookDetails />} />
            </Routes>
          </BlurBg>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}



export default App;
