import './App.css';
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
    </div>
  );
}

export default App;
