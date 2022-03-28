import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Enroll from './pages/Enroll';
import ClassForm from './pages/ClassForm'

function App() {
  return (
    <>
      <Main />
      <Router>
          <div className="container">
            <Header />
            <Routes>
            <Route path='/' element={<Dashboard/>} />
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
