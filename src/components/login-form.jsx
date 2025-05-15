import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true');
    alert('Login successful!');
    navigate('/');
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-xl max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Welcome</h1>
      <button className="w-full mb-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
      <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full mt-2 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex justify-between gap-4 mt-6">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate('/signup')}
          className='p-4 m-4 bg-red-600'
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
