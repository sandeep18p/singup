import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Singup from './Singup';
import Profile from './Profile';

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Singup" element={<Singup></Singup>}></Route>
        <Route path="/Profile" element={<Profile></Profile>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
