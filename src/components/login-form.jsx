import { useNavigate } from 'react-router-dom';
import "../../styles/login-form.css";
import LandingPage from './landing-page';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true');
    alert('Login successful!');
    navigate('/');
  };

  return (
    <div className='form-container'>

      <LandingPage />

      <center><h1>Welcome</h1></center>
    
      <form onSubmit={handleSubmit}>
        <center><h2>Login</h2></center>
        <div>
          <label htmlFor="email">Email</label>
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
        <div className='login-btn-wrapper'>
          <button className='login-btn' type="submit">Login</button>
          <button className='sign-up-btn' type="button" onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
