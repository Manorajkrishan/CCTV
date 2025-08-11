import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Footer from './Pages/Footer';
import AllServices from './Pages/AllServices';
import CompleteComputerSetup from './Pages/CompleteComputerSetup';
import ComputerRepairs from './Pages/ComputerRepairs';
import Networking from './Pages/Networking';
import ServerMaintenance from './Pages/ServerMaintenance';
import CCTVInstallation from './Pages/CCTVInstallation';
import IPPBX from './Pages/IPPBX';
import DataRecovery from './Pages/DataRecovery';
import MaintenanceContractAMC from './Pages/MaintenanceContractAMC';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/complete-computer-setup" element={<CompleteComputerSetup />} />
          <Route path="/computer-repairs" element={<ComputerRepairs />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/server-maintenance" element={<ServerMaintenance />} />
          <Route path="/cctv-installation" element={<CCTVInstallation />} />
          <Route path="/ip-pbx" element={<IPPBX />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/maintenance-contract-amc" element={<MaintenanceContractAMC />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
