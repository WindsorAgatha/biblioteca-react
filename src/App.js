import CreateBookRecommendation from './components/dashboard/CreateBookRecommendation';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogContent from './components/BlogContent';
import LoginModal from './components/LoginModal';
import Books from './components/Books';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import RegisterModal from './components/RegisterModal';
import CreateBookModal from './components/CreateBookModal';
import UserProfile from './components/UserProfile';
import BookDetails from './components/BookDetails';
import CreateClassroom from './components/dashboard/CreateClassroom';
import BlurBg from './components/BlurBg';
import Events from './components/Events';
import TeacherDashboard from './components/TeacherDashboard';
import TeacherSuggestions from './components/TeacherSuggestions';
import WarningModal from './components/WarningModal';
import NewsBlog from './components/NewsBlog';
import Classrooms from './components/Classrooms';
import Calendar from './components/Calendar';
import CreateStudentModal from './components/CreateStudentModal';
import Student from './components/dashboard/Student';
import LiteraryGenre from './components/dashboard/LiteraryGenre';
import Teacher from './components/dashboard/Teacher';
import CreateBook from './components/dashboard/CreateBook';
import CreateEvent from './components/dashboard/CreateEvent';
import Actives from './components/dashboard/Actives';
import ClassroomDetails from './components/ClassroomDetails';

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [blurBg, setBlurBg] = useState(false);
  const [isCreateBookOpen, setIsCreateBookOpen] = useState(false)
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false)
  const [isCreateStudentOpen, setIsCreateStudentOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <HashRouter>
      <Routes>
        <Route path="/recomendação-de-livros" element={<CreateBookRecommendation />} />
        <Route path="/administrador/*" element={<Dashboard />} />
        <Route path="/genre/*" element={<LiteraryGenre />} />
        <Route path="/criar-classes/*" element={< CreateClassroom />} />
        <Route path="/aluno/*" element={<Student />} />
        <Route path="/professor/*" element={<Teacher />} />
        <Route path="/criar-evento/*" element={<CreateEvent />} />
        <Route path="/criar-livro/*" element={<CreateBook />} />
        <Route path="/estudantes/*" element={<Student />} />
        <Route path='/atividades/*' element={<Actives />} />


        {/* App padrão com header/footer */}
        <Route
          path="*"
          element={
            <div>
              <CreateBookModal
                setIsCreateBookOpen={setIsCreateBookOpen}
                isCreateBookOpen={isCreateBookOpen}
                setBlurBg={setBlurBg}
              />
              <div className='w-full flex justify-center'>
                <LoginModal setLoginOpen={setIsLoginOpen} isLoginOpen={isLoginOpen} setBlurBg={setBlurBg} />
                <RegisterModal setRegisterOpen={setRegisterOpen} isRegisterOpen={isRegisterOpen} setBlurBg={setBlurBg} />
                <WarningModal isWarningModalOpen={isWarningModalOpen} />
                <CreateStudentModal setBlurBg={setBlurBg} blurBg={blurBg} isCreateStudentOpen={isCreateStudentOpen} />
              </div>
              <BlurBg blurBg={blurBg}>
                <Header setLoginOpen={setIsLoginOpen} setRegisterOpen={setRegisterOpen} setBlurBg={setBlurBg} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
                {/* Rotas internas do app */}
                <Routes>
                  <Route path="/livros" element={<Books />} />
                  <Route path="/" element={<BlogContent isDarkMode={isDarkMode} />} />
                  <Route path="/perfil" element={<UserProfile />} />
                  <Route path="/livros/:id" element={<BookDetails />} />
                  <Route path="/eventos" element={<Events />} />
                  <Route path="/criar-sugestoes" element={<TeacherDashboard />} />
                  <Route path="/sugestoes" element={<TeacherSuggestions />} />
                  <Route path="/noticias" element={<NewsBlog />} />
                  <Route path="/classes" element={<Classrooms />} />
                  <Route path="/classes/:id" element={<ClassroomDetails />} />
                  <Route path="/calendario" element={<Calendar />} />
                  <Route path="/genre" element={<LiteraryGenre />} />
                </Routes>
              </BlurBg>
              <Footer />
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
