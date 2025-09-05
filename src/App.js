
import Header from './components/Header';
import Footer from './components/Footer';
import BlogContent from './components/BlogContent';
import LoginModal from './components/LoginModal';
import Books from './components/Books';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header setOpen={setIsLoginOpen} />
        <div className='w-full flex justify-center absolute z-40 top-60'>
          <LoginModal setOpen={setIsLoginOpen} isOpen={isLoginOpen} />
        </div>
        <Routes>
          <Route path="/Livros" element={<Books />} />
          <Route path="/" element={<BlogContent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
