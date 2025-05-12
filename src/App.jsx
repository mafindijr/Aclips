import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CryptoAddressBook from './components/addresss-book';
import AddressForm from './components/address-form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CryptoAddressBook />} />
        <Route path="/add-address" element={<AddressFormWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper to handle navigation after form submission
function AddressFormWrapper() {
  const navigate = useNavigate();

  const handleAddAddress = (newAddress) => {
    // Pass the new address back to the address book (via localStorage or state management)
    const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    localStorage.setItem('addresses', JSON.stringify([...storedAddresses, newAddress]));
    navigate('/');
  };

  return <AddressForm addAddress={handleAddAddress} />;
}

export default App;
