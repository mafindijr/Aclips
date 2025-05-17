import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, Trash, Plus } from 'lucide-react';

const AddressCard = ({ label, address, onDelete }) => (
  <div>
    <div>
      <div>
        <h3>{label}</h3>
        <p>{address}</p>
      </div>
      <div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(address);
            alert('Address copied to clipboard!');
          }}
        >
          <Copy />
        </button>
        <button
          onClick={onDelete}
        >
          <Trash />
        </button>
      </div>
    </div>
  </div>
);

const CryptoAddressBook = () => {
  const [addresses, setAddresses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    setAddresses(storedAddresses);
  }, []);

  const deleteAddress = (index) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      const updatedAddresses = addresses.filter((_, i) => i !== index);
      setAddresses(updatedAddresses);
      localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div>
      <div>
        <h1>Crypto Address Book</h1>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
      <button onClick={() => navigate('/add-address')}>
        <Plus />
        Add Address
      </button>
      <div>
        {addresses.map((addr, index) => (
          <AddressCard
            key={index}
            label={addr.name}
            address={addr.address}
            onDelete={() => deleteAddress(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CryptoAddressBook;
