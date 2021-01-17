import './App.css';
import Nav from './Navbar/Nav.js';
import Productpage from './Productpage/Productpage.js';
import Cart from './Cart/Cart.js';
import Checkout from './Checkout/Checkout.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Productpage} />
          <Route path="/productpage" component={Productpage} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />   
        </Switch>   
      </div>
    </Router>
  );
}

export default App;
