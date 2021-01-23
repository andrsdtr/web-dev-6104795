import Nav from './Navbar/Nav.jsx';
import Productpage from './Productpage/Productpage.jsx';
import Cart from './Cart/Cart.jsx';
import Checkout from './Checkout/Checkout.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function Router() {
  return (
      <div>
        <BrowserRouter>
        <Nav/>
            <Switch>
                <Route path="/" exact component={Productpage} />
                <Route path="/productpage" component={Productpage} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />   
            </Switch>  
        </BrowserRouter> 
      </div>
  );
}

export default Router;
