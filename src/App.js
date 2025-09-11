
import Header from './components/Header';
import Footer from './components/Footer';
import BlogContent from './components/BlogContent';
import LoginModal from './components/LoginModal';
import Books from './components/Books';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RegisterModal from './components/RegisterModal';
import UserProfile from './components/UserProfile';

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header setLoginOpen={setIsLoginOpen} setRegisterOpen={setRegisterOpen} />
        <div className='w-full flex justify-center absolute z-40 top-60'>
          <LoginModal setLoginOpen={setIsLoginOpen} isLoginOpen={isLoginOpen} />
          <RegisterModal setRegisterOpen={setRegisterOpen} isRegisterOpen={isRegisterOpen} />
        </div>
        <Routes>
          <Route path="/livros" element={<Books />} />
          <Route path="/" element={<BlogContent />} />
          <Route path="/administrador" element={<Dashboard />} />
          <Route path="/perfil" element={<UserProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}



export default App;
