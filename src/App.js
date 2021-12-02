import './App.css';

import Navbar from './Component/Navbar';
import React, {useState, useEffect} from 'react';
import About from "./Component/About"
import Cards from "./Component/Cards"



function App() {

const [scrollHeight, setScrollHeight] = useState(0);

const handleScroll= () => {
  const position = window.pageYOffset;
  setScrollHeight(position);
}

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
}, [scrollHeight])

  return (
    <div className="App">
     <Navbar  /> 
     <About />
     <Cards />
     
      
      
    
    </div>
  );
}

export default App;
