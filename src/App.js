import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom";
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/about' element={<About />} />
        <Route  path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
