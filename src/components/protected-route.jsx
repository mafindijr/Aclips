import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // Ensure it's a boolean

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;