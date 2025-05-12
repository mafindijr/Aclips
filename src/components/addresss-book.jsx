import { useState } from 'react';
import { Copy, Plus, Trash } from 'lucide-react';

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
  const [addresses, setAddresses] = useState([
    { label: 'Main Wallet', address: '0x123...abc' },
    { label: 'Savings Wallet', address: '0x456...def' },
    { label: 'Investment Wallet', address: '0x789...ghi' },
  ]);

  const addAddress = () => {
    const label = prompt('Enter label:');
    const address = prompt('Enter address:');
    if (label && address) {
      setAddresses([...addresses, { label, address }]);
    }
  };

  const deleteAddress = (index) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <h1 className="text-3xl font-bold mb-4">Crypto Address Book</h1>
      <button
        className="p-2 mb-4 bg-blue-500 text-white rounded-full"
        onClick={addAddress}
      >
        <Plus className="w-5 h-5 inline mr-2" /> Add Address
      </button>
      <div className="flex flex-wrap gap-4">
        {addresses.map((addr, index) => (
          <AddressCard
            key={index}
            label={addr.label}
            address={addr.address}
            onDelete={() => deleteAddress(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CryptoAddressBook;