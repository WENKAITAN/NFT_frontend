import LoginButton from './LoginButton'
import Register from './Register'
import { Button } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton'
import { MdAccountBox} from "react-icons/md";
import { useNavigate} from 'react-router-dom'
function Header() {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  return (
    <header className='header'>
        <div className='logo'>
            <h4 onClick={()=> navigate('/')}>MetaUniversity</h4>
        </div>

        <ul>

            {isAuthenticated && user  ? (
                <>
                    <Button variant="secondary" size="lg" onClick={()=> navigate('/Profile')}><MdAccountBox/></Button>
                    <LogoutButton/>
                </>
            
            ) : (
                <>
                    <li>
                        <LoginButton />
                    </li>
                    <li>
                        <Register />
                    </li>
                </>
            )}



        </ul>
    </header>
  )
}

export default Header