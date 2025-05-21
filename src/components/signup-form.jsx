import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign-Up successful!');
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm your password"
          required
        />
      </div>
      <div>
        <button
          type="submit"
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={() => navigate('/login')}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
