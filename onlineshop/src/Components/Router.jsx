import Nav from './Navbar/Nav.jsx';
import Productpage from './Productpage/Productpage.jsx';
import Cart from './Cart/Cart.jsx';
import Checkout from './Checkout/Checkout.jsx';
import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'onlineshop.cart'

class Router extends Component {

  constructor (props){
    super(props);
    this.state = {
        cart : []
    }
  } 

  //saving state variables in cache
  componentDidMount () {
    const cartContent = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (cartContent) this.state.cart = cartContent
    this.forceUpdate()
  }

  //2 callback functions to update cart
  updateCart (input) {
    this.state.cart.push(input)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.cart))
    this.forceUpdate()
  }
  
  deleteCart (input) {
    this.state.cart.splice(this.state.cart.indexOf(input), 1)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.cart))
    this.forceUpdate()
  }
  
  render() {
        return ( 
          <BrowserRouter>  
            <div>
              <Nav/>
                  <Switch>
                      <Route path="/" exact component={Productpage} />
                      <Route path="/productpage" render={(props) => <Productpage {... props} cartContent={this.state.cart} updateCart={this.updateCart.bind(this)}/>} />
                      <Route path="/cart" render={(props) => <Cart {... props} cartContent={this.state.cart} updateCart={this.updateCart.bind(this)} deleteCart={this.deleteCart.bind()}/>} />
                      <Route path="/checkout" component={Checkout} />   
                  </Switch>
            </div>
          </BrowserRouter> 
        )
  }
}

export default Router;

/*
<BrowserRouter>  
            <div>
              <Nav/>
                  <Switch>
                      <Route path="/" exact component={Productpage} />
                      <Route path="/productpage" component={Productpage} />
                      <Route path="/cart" component={Cart} />
                      <Route path="/checkout" component={Checkout} />   
                  </Switch>
            </div>
          </BrowserRouter> 
*/