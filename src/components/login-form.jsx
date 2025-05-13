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
    <div className="bg-secondary text-primary p-6 rounded shadow-lg">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90">
        Get Started
      </button>
      <form onSubmit={handleSubmit} className="p-6 border rounded max-w-md mx-auto bg-secondary shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-primary">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-primary rounded bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-primary">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-primary rounded bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex justify-between mb-4">
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded hover:bg-[#3e290a] transition"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate('/signup')} // Navigate to the Sign Up page
            className="px-4 py-2 bg-secondary text-primary border border-primary rounded hover:bg-primary hover:text-white transition"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;