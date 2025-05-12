import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Replace with real auth logic

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

<Route
  path="/"
  element={
    <ProtectedRoute>
      <CryptoAddressBook />
    </ProtectedRoute>
  }
/>