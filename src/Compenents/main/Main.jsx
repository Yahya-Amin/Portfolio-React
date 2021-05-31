import React, { useState } from 'react';
import TopBar from "../topbar/TopBar";
import Intro from "../intro/intro"
import Portfolio from '../portfolio/portfolio';
import Works from '../works/works';
import Competences from '../competences/competences';
import Contact from '../contact/contact';
import Menu from '../menu/Menu';
import './Main.scss';


function Main() {
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

export default Main;
