import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, Trash, Plus } from 'lucide-react';
import AddressForm from './address-form';

const AddressCard = ({ label, address, onDelete }) => (
  <div className="p-4 m-2 w-full md:w-1/3 rounded-2xl shadow-lg bg-white flex justify-between items-center">
    <div>
      <h3 className="text-xl font-semibold">{label}</h3>
      <p className="text-gray-500 break-all">{address}</p>
    </div>
    <div className="flex items-center space-x-2">
      <button
        className="p-2 bg-gray-200 rounded-full"
        onClick={() => navigator.clipboard.writeText(address)}
      >
        <Copy className="w-5 h-5" />
      </button>
      <button className="p-2 bg-red-500 text-white rounded-full" onClick={onDelete}>
        <Trash className="w-5 h-5" />
      </button>
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
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <h1 className="text-3xl font-bold mb-4">Crypto Address Book</h1>
      <button
        onClick={() => navigate('/add-address')}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add Address
      </button>
      <div className="flex flex-wrap gap-4">
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