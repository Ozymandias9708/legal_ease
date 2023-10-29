import './App.css';
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './ServiceComponents/Navbar';
import ClientHome from './ClientComponents/ClientHome';
import ServiceHome from './ServiceComponents/ServiceHome';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const history = useHistory()
  const handleClick1=() => { 
    history.push("clientHome")
  }
  const handleClick2=() => {
    history.push("ServiceHome")
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <button onClick={handleClick1}>I am Consumer</button>
            <button onClick={handleClick2}>I am Service Provider</button>
          </Route>
          <Route path="/clientHome">
            <ClientHome/>
          </Route>
          <Route path="/ServiceHome">
            <ServiceHome/>
          </Route>
        </Switch>
      </Router>
>>>>>>> 21cc2e1ee87321abc7ef16faa93662447243e82f
    </div>
  );
}

export default App;
