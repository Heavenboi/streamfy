import React, { useState } from 'react';
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
      <a href="/" title="Logo">
        <img src='./src/assets/logo192.png' alt='Logo' style={{ width: 40, height: 40 }} />
      </a>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
          style={{ fontSize: 24, padding: 12 }}
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <ul className="menu-container">
            <a href="#" className="hover:text-gray-500 hover:bg-gray-100 py-2 px-4 rounded">Home</a>
            <a href="#" className="hover:text-gray-500 hover:bg-gray-100 py-2 px-4 rounded">About</a>
            <a href="#" className="hover:text-gray-500 hover:bg-gray-100 py-2 px-4 rounded">Contact</a>
          </ul>
        )}
      </nav>
      <button onClick={() => setShowSignIn(!showSignIn)}>Sign In</button>
      <button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</button>
      {showSignIn && <SignInForm />}
      {showSignUp && <SignUpForm />}
    </header>
  );
}

export default Header;