import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Main from './pages/Main';
function App() {
  return (
    <>
      <Router>
          <div className="container">
            <Header />
            <Routes>
            <Route path = '/homepage' element = {<Main/>}/>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
