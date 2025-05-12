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
      navigate('/'); // Navigate back to the dashboard after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Address</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">
          Address Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter address name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium">
          Address
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter address"
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => navigate('/')} // Navigate back to the dashboard
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddressForm;