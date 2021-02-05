import React from "react"
import './Cart.css';
import {useState, useEffect} from 'react';

const LOCAL_STORAGE_KEY = 'onlineshop.cart'

function Cart(props) {
       
    const [cart, setCart] = useState([]);

    //save cart when page reloaded
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedCart) setCart(storedCart)
    }, [])

    //calculating total price
    var total = 0;
    for (var i = 0; i < props.cartContent.length; i++) {
        total = total + parseFloat(props.cartContent[i].price)
    }

    //statement to check if cart is empty or not and to show correct page
    if (props.cartContent.length > 0 && document.getElementById("cartNotEmpty") != null) {
        document.getElementById("cartEmpty").className = "hide"
        document.getElementById("cartNotEmpty").className = "showCartNotEmpty"
    } else if (props.cartContent.length === 0 && document.getElementById("cartEmpty") != null) {
        document.getElementById("cartNotEmpty").className = "hide"
        document.getElementById("cartEmpty").className = "showCartEmpty"
    }

    return(
       //rendering the array of cartContent
       <div className="topDivCart">
            <div id="cartEmpty" className="hide">
                <div className="cartEmptyText">
                    <h1>Your Cart</h1>
                    <h1>is empty....</h1>
                </div>
                <img src="https://media4.giphy.com/media/G71NdSaKw8zIvvfD0k/giphy.gif?cid=ecf05e47028bdc0396e550c0d34f53f2b62739f7a0c1e7ad&rid=giphy.gif"/>
            </div>
            <div id="cartNotEmpty" className="hide">
                <h1>Your Cart</h1>
                <button className="delButton" onClick= {() => props.deleteCartAll()}>Clear cart</button>
                <div> 
                    {props.cartContent.map((album, index) => (
                    <div className="cart" key={index}>
                        <img src = {album.cover} alt = {album.cover}/>
                        <a>{album.name}</a>
                        <a>{album.artist}</a>            
                        <a className="price">{album.price}</a>
                        <button onClick={() => props.deleteCart(index)}>Delete</button>
                    </div> 
                    ))}
                    <h2 className="total">Total: {total.toFixed(2)}€</h2>
                </div>   
            </div>        
       </div>
    );
}

export default Cart;