import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CompanyDetailsComponent from './components/CompanyDetails';
import Signup from './components/Signup';
import Login from './components/Login';
import Landlord from './components/Landlord';
import BackgroundVideo from './components/BackgroundVideo';

const Tenant = () => <div>Tenant</div>;
const Commissionaires = () => <div>Commissionaires</div>;
const Updates = () => <div>Updates</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/company-details" element={<CompanyDetailsComponent />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landlord" element={<Landlord />} />
        <Route path="/tenant" element={<Tenant />} />
        <Route path="/commissionaires" element={<Commissionaires />} />
        <Route path="/updates" element={<Updates />} />
        {/* Render BackgroundVideo component only on specific routes */}
        <Route path="/" element={<BackgroundVideo />} />
        <Route path="/company-details/*" element={<BackgroundVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
