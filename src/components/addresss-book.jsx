import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, Trash, Plus } from 'lucide-react';

const AddressCard = ({ label, address, onDelete }) => (
  <div className="p-4 w-full md:w-1/2 lg:w-1/3 rounded-2xl shadow-lg bg-white flex flex-col justify-between">
    <div className="flex items-center justify-between w-full">
      <div>
        <h3 className="text-lg font-semibold">{label}</h3>
        <p className="text-gray-500 break-all">{address}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          onClick={() => {
            navigator.clipboard.writeText(address);
            alert('Address copied to clipboard!');
          }}
        >
          <Copy className="w-5 h-5" />
        </button>
        <button
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          onClick={onDelete}
        >
          <Trash className="w-5 h-5" />
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

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Crypto Address Book</h1>
      <button
        onClick={() => navigate('/add-address')}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center mx-auto"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add Address
      </button>
      <div className="flex flex-wrap gap-4 justify-center">
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