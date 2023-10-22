import './App.css';
import Navbar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import Products from "./pages/Products.js"
import Cart from "./pages/Cart.js"
import Checkout from "./pages/Checkout.js"
import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} total={total} setTotal={setTotal} />} />
          <Route path="/Checkout" element={<Checkout total={total} setTotal={setTotal} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
