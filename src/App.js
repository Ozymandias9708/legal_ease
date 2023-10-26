import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

function App() {

  const handleClick1=() => {
    
  }
  const handleClick2=() => {
    
  }
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/">
            <button onClick={handleClick1}>I am Consumer</button>
            <button onClick={handleClick2}>I am Service Provider</button>
          </Route>
          <Route path="/consumerHome">
            
          </Route>
          <Route path="/providerHome">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
