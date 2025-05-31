import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "../../styles/landing-page.css";


export default function LandingPage () {

    const navigate = useNavigate();

    function handleChange (e) {
        e.preventDefault();
        navigate('/login')
    }

    return (
        <div
            className="landing-page"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                color: "#fff",
                position: "relative"
            }}
        >
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.7)",
                zIndex: 1
            }} />
            <div style={{position: "relative", zIndex: 2}}>
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
        
        </div>
    );
}