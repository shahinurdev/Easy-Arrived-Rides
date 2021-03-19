import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
       
        <div className="header">
              <nav className="nav">
                  <h2 className="logo"> Easy Arrived Rides</h2>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="login">
                        <Link to="/login">Login</Link>
                    </li>
    
                </ul>
            </nav>
        </div>
       
    );
};

export default Header;