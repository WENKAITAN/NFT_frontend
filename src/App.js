import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Enroll from './pages/Enroll';
import ClassForm from './pages/ClassForm'
import Main from './pages/Main';
function App() {
  return (
    <>
      <Router>
          <div className="container">
            <Header />
            <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/enroll' element={<Enroll/>} />
            <Route path='/create' element={<ClassForm/>} />
          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
