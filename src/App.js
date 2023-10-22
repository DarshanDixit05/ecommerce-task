// import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import Products from "./pages/Products.js"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
