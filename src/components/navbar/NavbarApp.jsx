import React from 'react'
import '../navbar/navbar.css';
import '../navbar/Scroll.js';
import Logos from './logos.png'
import { Link } from 'react-router-dom'

function NavbarApp() {
  return (
        <>
           <header>
                <img src={Logos} alt="Logos" className='logo' />
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Personajes' >Personajes</Link></li>
                        <li><Link to='/Planetas' >Planetas</Link></li>
                    </ul>
                </nav>
           </header>
        </>
  );
}

export default NavbarApp;