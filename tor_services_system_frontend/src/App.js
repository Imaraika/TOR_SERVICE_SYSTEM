import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import CompanyDetailsComponent from './components/CompanyDetails';


const Landlord = () => <div>Landlord/Asset’s Owner</div>;
const Tenant = () => <div>Tenant</div>;
const Commissionaires = () => <div>Commissionaires</div>;
const Updates = () => <div>Updates</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/company-details" element={<CompanyDetailsComponent />} />
        <Route path="/landlord" element={<Landlord />} />
        <Route path="/tenant" element={<Tenant />} />
        <Route path="/commissionaires" element={<Commissionaires />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
    </Router>
  );
}

export default App;
