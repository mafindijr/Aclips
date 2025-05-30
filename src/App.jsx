<<<<<<< HEAD

function App() {

  return (
    <>

      <div className='bg-red-400 text-gray-100 rounded-4'>
        <h1>card</h1>
        <p>this my card</p>
      </div>
     
    </>
  )
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoAddressBook from './components/addresss-book';
import AddressForm from './components/address-form';
import LoginForm from './components/login-form';
import SignUpForm from './components/signup-form';
import ProtectedRoute from './components/protected-route';
import LandingPage from './components/landing-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path='/'
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/address-book"
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
              <AddressFormWrapper />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginForm />} />
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
>>>>>>> ed9eb3290ce1dbd07fe91c81dd73e3786099747d
}

export default App;
