import React from "react"
import './Cart.css';
import {useState} from 'react';

function Cart() {

    const [cart] = useState([
        {
            name: "Dark Side of the Moon",
            artist: "Pink Floyd",
            price: "17,99€",
            cover: "https://i.pinimg.com/736x/60/cc/e6/60cce69065efbc413bc20382c664b503.jpg"
        },
        {
            name: "Wish You Were Here",
            artist: "Pink Floyd",
            price: "19,99€",
            cover: "https://miro.medium.com/max/700/1*Aad3rcP6yKOj3LgWqx75gA.jpeg"
        },
        {
            name: "The Division Bell",
            artist: "Pink Floyd",
            price: "14,99€",
            cover: "https://images-na.ssl-images-amazon.com/images/I/71SfWZAY%2BPL._SL1500_.jpg"
        },
        {
            name: "Abbey Roud",
            artist: "The Beatles",
            price: "12,99€",
            cover: "https://www.tagesspiegel.de/images/members-of-the-beatles-cross-abbey-road-in-london/24883714/1-format43.jpg"
        },
        {
            name: "Let It Be",
            artist: "The Beatles",
            price: "13,99€",
            cover: "https://images-na.ssl-images-amazon.com/images/I/51F-JrWga3L.jpg"
        },
        {
            name: "Revolver",
            artist: "Beatles",
            price: "15,99€",
            cover: "https://images-na.ssl-images-amazon.com/images/I/A1ZeriZs9BL._SL1500_.jpg"
        },
        {
            name: "Can't Buy A Thrill",
            artist: "Steely Dan",
            price: "18,99€",
            cover: "https://3.bp.blogspot.com/-_GNI0Ofq9RY/TtNgBXgiBcI/AAAAAAAADMg/gVmqfS_kRJo/s1600/sdcbtfr.jpeg"
        },
        {
            name: "Gaucho",
            artist: "Steely Dan",
            price: "17,99€",
            cover: "https://media1.jpc.de/image/w600/front/0/0008811205522.jpg"
        },
        {
            name: "Over-Nite Sensation",
            artist: "Frank Zappa",
            price: "20,99€",
            cover: "https://imagescdn.juno.co.uk/full/CS493727-01A-BIG.jpg"
        },
        {
            name: "I Robot",
            artist: "The Alan Parsons Project",
            price: "11,99€",
            cover: "https://images-na.ssl-images-amazon.com/images/I/81HtXJylR6L._SL1500_.jpg"
        }
      ])

    return(
       <div>
           <h1>Your Cart</h1>
           {cart.map((cart, index) => (
            <ul className="cart" key={index}>
              <img src = {cart.cover} alt = {cart.cover}/>
              <li>{cart.name}</li>
              <li>{cart.artist}</li>            
              <li>{cart.price}</li>
          </ul> 
          ))}
       </div>
    );
}

export default Cart;