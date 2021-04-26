import React from 'react';
import './Menu.scss';


export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#intro" onClick={()=>setMenuOpen(!menuOpen)}>Home</a>
                </li>
                <li>
                    <a href="#Portfolio" onClick={()=>setMenuOpen(!menuOpen)}>Portfolio</a>
                </li>
                <li>
                    <a href="#works" onClick={()=>setMenuOpen(!menuOpen)}>Works</a>
                </li>
                <li>
                    <a href="#competences" onClick={()=>setMenuOpen(!menuOpen)}>Competences</a>
                </li>
                <li>
                    <a href="#contact" onClick={()=>setMenuOpen(!menuOpen)}>Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
