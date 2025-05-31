import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/landing-page";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard"; // address book

function App() {
  // You can add authentication logic here if needed
  // For now, simple routing
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
