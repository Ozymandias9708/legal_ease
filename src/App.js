import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from './ServiceComponents/Navbar';
import ClientHome from './ClientComponents/ClientHome';
import ServiceHome from './ServiceComponents/ServiceHome';
import { useHistory } from "react-router-dom"

function App() {
  const history = useHistory()
  const handleClick1=() => { 
    history.push("/clientHome")
  }
  const handleClick2=() => {
    history.push("/ServiceHome")
  }
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <button onClick={handleClick1}>I am Co nsumer</button> */}
            {/* <button onClick={handleClick2}>I am Service Provider</button> */}
            <ClientHome/>
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
