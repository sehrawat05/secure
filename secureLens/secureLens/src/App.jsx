import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/service" element={<Service />} />
      </Routes>
       </Router>
    </>
  )
}

export default App
