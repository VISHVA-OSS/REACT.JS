
import react from 'react';
import{ BrowserRouter,  Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';


function App() {
  return(
    <div>
      <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      
    </div>

  );
}

export default App;