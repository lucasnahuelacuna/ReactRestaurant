import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [open, setOpen] = useState(false)

    return ( 
        <header>
            <div className="menu">
                <div className="contenedor">
                    <p className="logo">Restaurant Home Page</p>
                    <img src={require('../../assets/menu.png')} 
                        className="menu-icon" alt=""
                        onClick={() => setOpen(!open)}
                    />
                    <nav className={open ? 'show-menu' : null}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
     );
}
 
export default Header;