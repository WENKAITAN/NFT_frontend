import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route,  } from 
'react-router-dom'

import Register from './components/Register'
import Enroll from './pages/Enroll'
import ClassForm from './pages/ClassForm'
import Main from './pages/Main'
import Dashboard from './pages/Dashboard'
import Grade from './pages/Grade'
import AnnouncementDetail from './pages/AnnouncementDetail'
import CourseDetail from './pages/CourseDetail'
import StudentCenter from './pages/StudentCenter'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import AcademicRecord from './pages/AcademicRecord'
import DirectDeposit from './pages/DirectDeposit'
import FinancialAccount from './pages/FinancialAccount'
import FinancialAid from './pages/FinancialAid'
import Graduation from './pages/Graduation'
import RegisterClass from './pages/RegisterClass'

import Tasks from './pages/Tasks'
import Transcript from './pages/Transcript'
import ScheduleBuilder from './pages/ScheduleBuilder'
function App() {
  
  return (
    <>
      <Router>
          <div className="container">
            <Header />
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='enroll' element={<Enroll/>} />
            <Route element={<ProtectedRoute />}>
              <Route path="home" element={<Main />} />
              <Route path="grade" element={<Grade />} />
              <Route path="announcement" element={<AnnouncementDetail />} />
              <Route path="course" element={<CourseDetail />} />
              <Route path='register' element={<Register/>} />
              
              <Route path='create' element={<ClassForm/>} />
              <Route path='studentcenter'  element={<StudentCenter/>} />
              <Route path='profile' element={<Profile/>} />
              <Route path='academicRecord' element={<AcademicRecord/>} />
              <Route path='directDeposit' element={<DirectDeposit/>} />
              <Route path='financialAccount'  element={<FinancialAccount/>} />
              <Route path='financialAid' element={<FinancialAid/>} />
              <Route path='graduate' element={<Graduation/>} />
              <Route path='scheduleBuilder' element={<ScheduleBuilder/>} />
              <Route path='registerClass'  element={<RegisterClass/>} />
              <Route path='transcript' element={<Transcript/>} />
              <Route path='task' element={<Tasks/>} />
              <Route path='deposit' element={<DirectDeposit/>} />
            </Route>

          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
