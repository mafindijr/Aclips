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
        {/* Protected Route for Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <CryptoAddressBook />
            </ProtectedRoute>
          }
        />
        {/* Protected Route for Add Address Form */}
        <Route
          path="/add-address"
          element={
            <ProtectedRoute>
              <AddressFormWrapper />
            </ProtectedRoute>
          }
        />
        {/* Public Route for Login */}
        <Route path="/login" element={<LoginForm />} />
        {/* Public Route for Sign Up */}
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

// Wrapper to pass the addAddress function to AddressForm
function AddressFormWrapper() {
  const addAddress = (newAddress) => {
    const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    const updatedAddresses = [...storedAddresses, newAddress];
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
  };

  return <AddressForm addAddress={addAddress} />;
}

export default App;
