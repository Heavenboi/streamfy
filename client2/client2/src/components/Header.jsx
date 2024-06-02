// Header.js
import React from 'react';

function Header() {
  return (
    <header >
      <div >
        <a href="/" >
          <img src='./src/assets/logo192.png' />
        </a>
      </div>
      <nav >
        
            <a href="/about" >About</a>
          
          
            <a href="/contact" >Contact</a>
         
          {/* Add more navigation links as needed */}
       
      </nav>
    </header>
  );
}



export default Header;