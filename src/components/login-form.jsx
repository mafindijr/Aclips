import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Add Google Sign-In logic here
    alert('Google Sign-In clicked!');
    navigate('/'); // Navigate to the dashboard after successful login
  };

  const handleWalletConnect = () => {
    // Add Wallet Connect logic here
    alert('Wallet Connect clicked!');
    navigate('/'); // Navigate to the dashboard after successful login
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    alert('Login successful!');
    navigate('/'); // Navigate to the dashboard after successful login
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
          onClick={() => navigate('/signup')}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Sign Up
        </button>
      </div>
      <div className="flex flex-col space-y-2">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Sign in with Google
        </button>
        <button
          type="button"
          onClick={handleWalletConnect}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Connect Wallet
        </button>
      </div>
    </form>
  );
}

export default LoginForm;