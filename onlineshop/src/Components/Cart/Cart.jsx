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

    //save cart to local storage
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart))
    }, [cart])
    
    var total = 0;

    //calculating total price
    for (var i = 0; i < props.cartContent.length; i++) {
        total = total + parseFloat(props.cartContent[i].price)
    }

    return(
       //rendering the array of cartContent
       <div className="topDivCart">
           <h1>Your Cart</h1>
           <button className="del-button" onClick= {() => props.deleteCartAll()}>Delete All Items</button>
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
    );
}

export default Cart;