import './Productpage.css';
import {useState} from 'react';

function Productpage() {
  
  //creating a state for items in cart
  const [cart, setCart] = useState([]);
  
  //creating a state to get a array where new albums can be added
  const [albmums] = useState([
    {
      name: "Dark Side of the Moon",
      price: "14,99€",
      cover: "https://i.pinimg.com/736x/60/cc/e6/60cce69065efbc413bc20382c664b503.jpg"
    },
    {
      name: "Wish You Were Here",
      price: "19,99€",
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wish_You_Were_Here_album_first_issue_vinyl_Pink_Floyd_black_plastic_wrap.jpg/220px-Wish_You_Were_Here_album_first_issue_vinyl_Pink_Floyd_black_plastic_wrap.jpg"
    }
  ])
  
  //function to add items to the cart
  const addToCart = (albmum) => {
    //add album to the cart
    setCart([...cart, albmum])
  }

  return (
    //rendering the array of albums
    <div className="App">
      <h1>Albums</h1>
      <div className="albums">
        {albmums.map((albmum, index) => (
            <div className="album" key={index}>
              <h3>{albmum.name}</h3>
              <img src = {albmum.cover} alt = {albmum.cover}/>
              <h4>{albmum.price}</h4>
              <button onClick= {() => addToCart(albmum)}>Add to Cart</button>
          </div> 
        ))}
      </div>
      
    </div>
  );
}

export default Productpage;
