import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Enroll from './pages/Enroll'
import ClassForm from './pages/ClassForm'
import Main from './pages/Main'
import Dashboard from './pages/Dashboard'
import Grade from './pages/Grade'
import AnnouncementDetail from './pages/AnnouncementDetail'
import CourseDetail from './pages/CourseDetail'
import Profile from './pages/Profile'
function App() {
  return (
    <>
      <Router>
          <div className="container">
            <Header />
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/main" element={<Main />} />
            <Route path="/grade" element={<Grade />} />
            <Route path="/announcement" element={<AnnouncementDetail />} />
            <Route path="/course" element={<CourseDetail />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/enroll' element={<Enroll/>} />
            <Route path='/create' element={<ClassForm/>} />
            <Route path='/Profile' element={<Profile/>}/>
          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;