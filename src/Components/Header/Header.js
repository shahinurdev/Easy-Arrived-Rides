import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
const Header = () => {
    const [loggedInUser] = useContext(UserContext)
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
                    {
                       <h5 className="displayName"> {loggedInUser.displayName}</h5>
                    }
    
                </ul>
            </nav>
        </div>
       
    );
};

export default Header;