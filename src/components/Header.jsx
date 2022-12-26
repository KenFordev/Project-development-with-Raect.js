import React, { useState } from 'react'
import './header.css'
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
    const logoTere = './images/logo.png'

    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const colseMobileMenu = () => setClick(false);



  return (
  <div>
    <div className="header-bg">
        <div className="container">
            <div className="header-con">
                <div className="header-logo">
                    <a href="#"><img src={logoTere} alt="" /></a>
                </div>
                <ul className={click ? "menu active" : "menu"}>
                    <li className="menu-item">
                        <a href="#" onClick={colseMobileMenu}>Home</a>
                    </li>
                    <li className="menu-item">
                        <a href="#" onClick={colseMobileMenu}>How tere works</a>
                    </li>
                    <li className="menu-item">
                        <a href="#" onClick={colseMobileMenu}>Tere benefits</a>
                    </li>
                    <li className="menu-item">
                        <a href="#" onClick={colseMobileMenu}>Help Center</a>
                    </li>
                </ul>
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? <FiX/> : <FiMenu/>}
                </div>
            </div>
        </div>
    </div>
  </div>
    )
}

export default Header