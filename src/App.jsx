import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoAddressBook from './components/addresss-book';
import AddressForm from './components/address-form';
import LoginForm from './components/login-form';
import SignUpForm from './components/signup-form';
import ProtectedRoute from './components/protected-route';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <CryptoAddressBook />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-address"
          element={
            <ProtectedRoute>
              <AddressForm />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
