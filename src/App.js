import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Router>
          <div className="container">
            <Header />
            <Routes>

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
