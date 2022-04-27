import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'

// Emmanuel 03-36-2022
import CourseDetail from './pages/CourseDetail'
import Grade from'./pages/Grade'
import ClassSelection from './pages/ClassSelection'
function App() {
  return (
    <>
      <Router>
          <div className="container">
            <Header />
            <Routes>
            {/* <Route path='/' element={<Dashboard/>} /> */}
            {/* <Route path='/' element={<CourseDetail/>} /> */}

            {/* <Route path='/' element={<Grade />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} /> */}
          </Routes>
          <ClassSelection />
          </div>
      </Router>
    </>
  );
}

export default App;
