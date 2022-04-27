// import {useState, useEffect} from 'react'
// import { FaUser } from 'react-icons/fa'
// import {toast} from 'react-toastify'
// import {useNavigate} from 'react-router-dom'
// // import {login, reset} from '../features/auth/authSlice'
// // import Spinner from '../components/Spinner'
// function Login() {

//   const [formData, setFormData] = useState({
//       email: '',
//       password: ''
//   })

//   const { email, password } = formData
//   const handleChange = (e) => {
//     const name = e.target.name
//     const value = e.target.value
//     setFormData({
//         ...formData,
//         [name]: value
//     })
//   }
//   const navigate = useNavigate()


//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(formData)
//     if( !email || ! password ){
//         toast.error("Please fill all the fields")
//     }
//     }

//   return (
//     <>
//         <section className="heading">
//             <h1>
//                 <FaUser/> Login
//             </h1>
//             <p>Login and start setting goal</p>
//             <section className="form">
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <input 
//                             type="text" 
//                             id="email" 
//                             name="email" 
//                             value={email} 
//                             className="form-control" 
//                             placeholder="Enter your email address"
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input 
//                             type="text" 
//                             id="password" 
//                             name="password" 
//                             value={password} 
//                             className="form-control" 
//                             placeholder="Enter your password"
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <button type="submit" className='btn btn-block'>Submit</button>
//                     </div>
//                 </form>
//             </section>


//         </section>
//     </>
//   )
// }

// export default Login
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaSignInAlt, } from 'react-icons/fa'
import { Button } from 'react-bootstrap';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button variant="secondary" size="lg" active onClick={() => loginWithRedirect()}><FaSignInAlt />Login</Button>;
};

export default LoginButton;