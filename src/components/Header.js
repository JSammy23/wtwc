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
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
  )
}

export default Header