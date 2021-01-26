import React, {useState, useEffect} from "react"
import './Productpage.css';

const LOCAL_STORAGE_KEY = 'onlineshop.cart'

function Productpage(props) {
  
  //creating a state for items in cart
  const [cart, setCart] = useState([]);
  
  //creating a state to get a array where new albums can be added
  const [albums] = useState([
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

  //save cart when page reloaded
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedCart) setCart(storedCart)
  }, [])

  //save cart to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  //function to add items to the cart
  const addToCart = (album) => {
    //add album to the cart
    setCart([...cart, album])
    props.updateCart(cart)
    console.log(album.name, "added du cart.")
    console.log("Cart conatains", cart.length+1, "items.")
    
  }

  function handleAddToCart(e) {
      
  }

  return (
    //rendering the array of albums
    <div className="App">
      <h1>Albums</h1>
      <div className="albums">
        {albums.map((album, index) => (
            <div className="album" key={index}>
              <h3>{album.name}</h3>
              <pre>{album.artist}</pre>
              <img src = {album.cover} alt = {album.cover}/>
              <h4>{album.price}</h4>
              <button onClick= {() => addToCart(album)}>Add to Cart</button>
          </div> 
        ))}
      </div>
    </div>
  );
}

export default Productpage;
