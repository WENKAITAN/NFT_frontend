import LoginButton from './LoginButton'
import Register from './Register'
import { Button } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton'
import { MdAccountBox} from "react-icons/md";
function Header() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <header className='header'>
        <div className='logo'>
            <h4 onClick={()=> window.location.href='/'}>MetaUniversity</h4>
        </div>

        <ul>

            {isAuthenticated && user  ? (
                <>
                    <Button variant="secondary" size="lg" onClick={()=> window.location.href='/Profile'}><MdAccountBox/></Button>
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