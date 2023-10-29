import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import UserType from './components/UserType';
import ProviderHome from './components/ServiceComponents/ProviderHome';
import CasesTaken from './components/ServiceComponents/CasesTaken';
import Clients from './components/ServiceComponents/Clients';
import Requests from './components/ServiceComponents/Requests';
import ServiceLogin from './components/ServiceComponents/LoginService';
import RegisterServices from './components/ServiceComponents/RegisterService';

function App() {

  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route exact path="/" element={<UserType />} />
        <Route path="/consumerHome" />
        <Route path='/serviceLogin' element={<ServiceLogin />} />
        <Route path='/serviceRegister' element={<RegisterServices />} />
        <Route path="/providerHome" element={<ProviderHome />} />
        <Route path="/providerCaseslist" element={<CasesTaken />} />
        <Route path="/providerClients" element={<Clients />} />
        <Route path="/providerRequests" element={<Requests />} />
      </Routes>
    </div>
  );
}

export default App;
