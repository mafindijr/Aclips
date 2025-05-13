import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddressForm({ addAddress }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && address) {
      addAddress({ name, address });
      setName('');
      setAddress('');
      navigate('/');
    }
  };

  return (
    <div className='grid place-items-center min-h-screen bg-gradient-to-t from-gray-50 to-white'>
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Add New Address</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Address Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-2 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter address name"
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full mt-2 p-8 border-2 outline-none border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter address"
        />
      </div>
      <div className="flex justify-between gap-4 mt-6">
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-sm hover:bg-gray-300 transition-all duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
    </div>
  );
}

export default AddressForm;
