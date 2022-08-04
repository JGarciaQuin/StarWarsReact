import React from 'react'
import '../navbar/navbar.css';
import Logos from './logos.png'

function NavbarApp() {
  return (
        <>
            <div className='primera'>
    <header className='nav center'>
        <img src={Logos} alt="Icono" className='logo' />
        <input type="checkbox" name='' className='checkBtn' />
        <ol className='center'>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Games</li></a>
            <a href="#"><li>Shop</li></a>
            <a href="#"><li>About</li></a>
        </ol>
    </header>
    </div>
        </>
  );
}

export default NavbarApp;