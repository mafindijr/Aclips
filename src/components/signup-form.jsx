import { useNavigate } from 'react-router-dom';
import "../../styles/sign-up-form.css";

function SignUpForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign-Up successful!');
    navigate('/login');
  };

  return (
    <form className='sign-up-form' onSubmit={handleSubmit}>
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
          className='sign-up-btn1'
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={() => navigate('/login')}
          className='login-btn1'
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
