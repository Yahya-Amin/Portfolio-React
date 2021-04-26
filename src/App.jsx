import React, { useState } from 'react';
import "./app.scss";
import TopBar from "./Compenents/topbar/TopBar";
import Intro from "./Compenents/intro/intro"
import Portfolio from './Compenents/portfolio/portfolio';
import Works from './Compenents/works/works';
import Competences from './Compenents/competences/competences';
import Contact from './Compenents/contact/contact';
import Menu from './Compenents/menu/Menu';



function App() {
  const [menuOpen,setMenuOpen] = useState(true)  
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="Sections">          
            <Intro/>
            <Portfolio/>
            <Works/>
            <Competences/>
            <Contact/>
        </div>
    </div>
  );
}

export default App;
