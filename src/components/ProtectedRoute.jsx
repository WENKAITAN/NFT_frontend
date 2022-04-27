import { useAuth0 } from "@auth0/auth0-react";
import {
    useNavigate,
    Outlet,
} from 'react-router-dom';

const ProtectedRoute = ({ redirectPath = '/' }) => {
    const {isAuthenticated } = useAuth0();
    let navigate = useNavigate();
    if (!isAuthenticated) {
        return <navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};

export default ProtectedRoute

