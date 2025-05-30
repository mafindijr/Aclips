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
            <div className="overlay"></div>
            <header className="header-section">

                
                
            </header>

            <div className="hero-content">
             <div>
                <h1>Welcome to Aclips</h1>
                <p>Ease the process of copying wallet addresses</p>
              </div>

             <div>
                <button className="get-start-btn" onClick={handleChange}>Get Started</button>
                <button className="connect-btn">Connect Wallet</button>
            </div>
        
            </div>
        
        </div>
    );
} 