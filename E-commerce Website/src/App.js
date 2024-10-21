import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Demo/Home';
import About from './Demo/About';
 
import { Route, Routes  } from 'react-router-dom';
import Service from './Demo/Service';
import Contact from './Demo/Contact';
import Navbar from './Demo/Navbar';


const App = () => {
  return (<>
<Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
       
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
       
    </Routes>




  </>
  );
};
export default App;