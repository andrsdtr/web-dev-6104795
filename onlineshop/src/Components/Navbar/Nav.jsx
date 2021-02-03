import React from "react"
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {   
    return(
       <nav>
           <div className="logo">
                <div className="logo-img">
                    <img src="https://toppng.com/uploads/preview/118-vinyl-record-clipart-free-clipart-plyta-winylowa-115631948768kdj8jbpag.png"></img>
                </div>
                <div>
                    <h3 className="logo-text">Recordium</h3>
                </div>
           </div>
           <ul className="nav-elements">
                <Link to="/productpage">
                    <a>Albums</a>
                </Link>
                <Link to="/cart">
                    <a>Go to Cart</a>
                </Link>
                <Link to="/checkout">
                    <a>Checkout</a>
                </Link>
           </ul>
       </nav>
    );
}

export default Nav;