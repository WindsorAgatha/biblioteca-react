import Header from './components/Header';
import Footer from './components/Footer';
import BlogContent from './components/BlogContent';
import LoginModal from './components/LoginModal';
import Books from './components/Books';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RegisterModal from './components/RegisterModal';
import UserProfile from './components/UserProfile';
import BookDetails from './components/BookDetails';
import BlurBg from './components/BlurBg';
import CreateBookModal from './components/CreateBookModal';
import Events from './components/Events';

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [blurBg, setBlurBg] = useState(false);
  const [isCreateBookOpen, setIsCreateBookOpen] = useState(false)

  return (
    <>

      <HashRouter>
        <div className=''>
          <Header setLoginOpen={setIsLoginOpen} setRegisterOpen={setRegisterOpen} />
          <div className='w-full flex justify-center '>
            <LoginModal setLoginOpen={setIsLoginOpen} isLoginOpen={isLoginOpen} />
            <RegisterModal setRegisterOpen={setRegisterOpen} isRegisterOpen={isRegisterOpen} />
            <CreateBookModal 
            setIsCreateBookOpen={setIsCreateBookOpen}
             isCreateBookOpen={isCreateBookOpen} 
             setBlurBg={setBlurBg} />
          </div>
          <BlurBg blurBg={blurBg} >
            <Routes>
              <Route path="/livros" element={<Books />} />
              <Route path="/" element={<BlogContent />} />
              <Route path="/administrador" element={<Dashboard
                setBlurBg={setBlurBg}
                setIsCreateBookOpen={setIsCreateBookOpen}
                isCreateBookOpen={isCreateBookOpen}
              />} />
              <Route path="/perfil" element={<UserProfile />} />
              {/* <Route path="/detalhelivro" element={<BookDetails />} /> */}
              <Route path="/livros/:id" element={<BookDetails />} />
              <Route path="/eventos" element={<Events />} />  
            </Routes>
          </BlurBg>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}



export default App;
