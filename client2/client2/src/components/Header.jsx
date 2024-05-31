// Header.js
import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <a href="/" style={linkStyle}>
          Your Logo
        </a>
      </div>
      <nav style={navStyle}>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <a href="/about" style={linkStyle}>About</a>
          </li>
          <li style={listItemStyle}>
            <a href="/contact" style={linkStyle}>Contact</a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

// Styles
const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  marginLeft: '20px', // Adjust as needed
  fontWeight: 'bold',
  fontSize: '1.5rem',
};

const navStyle = {
  marginRight: '20px', // Adjust as needed
};

const listStyle = {
  display: 'flex',
  listStyle: 'none',
};

const listItemStyle = {
  marginLeft: '10px', // Adjust as needed
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '5px 10px',
  borderRadius: '3px',
  transition: 'background 0.3s',
};

export default Header;