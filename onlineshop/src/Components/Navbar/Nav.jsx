import React from "react"
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return(
       <nav>
           <h3>Logo</h3>
           <ul className="nav-elements">
                <Link to="/productpage">
                    <li>Albums</li>
                </Link>
                <Link to="/cart">
                    <li>Go to Cart</li>
                </Link>
                <Link to="/checkout">
                    <li>Checkout</li>
                </Link>
           </ul>
       </nav>
    );
}

export default Nav;