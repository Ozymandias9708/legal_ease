import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import UserType from './components/UserType';

function App() {
  return (
    <>
        <>
        <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<UserType />}/>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />}/>
        </Routes>
        </Router>
        </>
    </>
  );
}

export default App;
