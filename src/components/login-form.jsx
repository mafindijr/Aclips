import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    localStorage.setItem('isAuthenticated', 'true'); // Set isAuthenticated in localStorage
    alert('Login successful!');
    navigate('/'); // Navigate to the dashboard
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border rounded"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-2 border rounded"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="flex justify-between mb-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => navigate('/signup')} // Navigate to the Sign Up page
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default LoginForm;