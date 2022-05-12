import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import Footer from './Pages/Shared/Footer.jsx';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="max-w-7xl">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        {/*  <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
