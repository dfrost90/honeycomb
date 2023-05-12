import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/auth_context';

const ProtectedRoute = ({ children }) => {
  const { authUser } = useAuthContext();

  if (!authUser) {
    return <Navigate to="/" />;
  }

  return children;
};
export default ProtectedRoute;
