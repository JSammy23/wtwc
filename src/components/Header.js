import React, { useState } from 'react'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuToggle() {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <header>
        <div className="logo">Wade Through Water</div>
        <nav>
            <ul className={isMenuOpen ? 'show' : ''}>
                <li>Home</li>
                <li>Services</li>
                <li>About Me</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className="hamburger" onClick={handleMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
  )
}

export default Header