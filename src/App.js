import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import UserType from './components/UserType';

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
