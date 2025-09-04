import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogContent from './components/BlogContent';
import LoginModal from './components/LoginModal';
import { useState } from 'react';


function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <Header setOpen={setIsLoginOpen} />
      <div className='w-full flex justify-center absolute z-40 top-60'>
        <LoginModal setOpen={setIsLoginOpen} isOpen={isLoginOpen} />
      </div>
      <BlogContent />
      <Footer />
    </>
  );
}

export default App;
