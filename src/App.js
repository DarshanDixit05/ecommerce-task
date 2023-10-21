import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
