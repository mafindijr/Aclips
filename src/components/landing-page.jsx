import { useNavigate } from "react-router-dom";
import "../../styles/landing-page.css";


export default function LandingPage () {

    const navigate = useNavigate();

    function handleChange (e) {
        e.preventDefault();
        navigate('/login')
    }

    return (
        <div className='landing-page'>
            <header>
                
            </header>

            <div className="hero-content">
             <div>
                <h1>Welcome to Aclips</h1>
                <p>Ease the process of copying wallet addresses</p>
              </div>

             <div>
                <button onClick={handleChange}>Get Started</button>
                <button>Connect Wallet</button>
            </div>
        
            </div>
        
        </div>
    );
} 