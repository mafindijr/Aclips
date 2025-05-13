import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, Trash, Plus } from 'lucide-react';

const AddressCard = ({ label, address, onDelete }) => (
  <div className="p-6 w-full md:w-1/2 lg:w-1/3 rounded-xl shadow-xl bg-white flex flex-col justify-between transition-transform transform hover:scale-[1.02] hover:shadow-2xl">
    <div className="flex items-center justify-between w-full">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
        <p className="text-gray-500 text-sm break-all">{address}</p>
      </div>
      <div className="flex items-center space-x-3">
        <button
          className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 hover:scale-105 transition duration-200"
          onClick={() => {
            navigator.clipboard.writeText(address);
            alert('Address copied to clipboard!');
          }}
        >
          <Copy className="w-6 h-6 text-gray-700" />
        </button>
        <button
          className="p-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 hover:scale-105 transition duration-200"
          onClick={onDelete}
        >
          <Trash className="w-6 h-6" />
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
    <div className="min-h-screen bg-gradient-to-t from-gray-50 to-white p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Crypto Address Book</h1>
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </div>
      <button
        onClick={() => navigate('/add-address')}
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 flex items-center gap-2 mx-auto"
      >
        <Plus className="w-5 h-5" />
        Add Address
      </button>
      <div className="flex flex-wrap gap-6 justify-center">
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
