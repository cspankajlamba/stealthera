"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainMenu from './menuItems';
import Logo from '../images/logos/logo.png';
import '../globals.css';

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBtn = () => {
    setIsChecked((prevState) => !prevState);
  };
//   const currentUrl = window.location.pathname;

//   // Check if the current URL is '/'
//   const isHome = currentUrl === '/';
  return (
    <nav>
      <input type="checkbox" id="check" checked={isChecked} onChange={toggleCheckBtn} />
      <label htmlFor="check" className="checkbtn">
        {isChecked ? (
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your second SVG content */}
            <path
              opacity="0.5"
              d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
              stroke="#fff"
              strokeWidth="1.5"
            />
            <path
              d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your first SVG content */}
            <path
              d="M20 7L4 7"
              strokeWidth="1.5"
              stroke='#fff'
              strokeLinecap="round"
            />
            <path
              opacity="0.5"
              d="M20 12L4 12"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M20 17L4 17"
              strokeWidth="1.5"
              stroke='#fff'
              strokeLinecap="round"
            />
          </svg>
        )}
      </label>
      {/* href={isHome ? null : '/'} */}
      <label className="logo flex gap-2 items-center"><Image src={Logo} alt='' style={{ width: '45px', height: '45px' }} /><Link href='/'>Stealth<span>ERA</span></Link></label>
      <MainMenu />
    </nav>
  );
}

export default Header;