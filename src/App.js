

import './App.css';

// import Layout from './Components/Layout.js';
// Router Dom
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/pages/Home.js';
import Detail from './Components/pages/Detail.js';
import Search from './Components/pages/Search.js';
import Checkout from './Components/pages/Checkout.js';
import SignIn from './Components/pages/SignIn';
import Register from './Components/pages/Register';
import Cart from './Components/pages/Cart';
import Delivery from './Components/pages/Delivery';
import order from './Components/pages/order';
import Wishlist from './Components/pages/Wishlist';


const App = () => {

  return (

    <Router >
      <Route path="/" exact component={Home}></Route>
      <Route path="/detail" component={Detail}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/checkout" component={Checkout} ></Route>
      <Route path="/signin" component={SignIn} ></Route>
      <Route path="/cart" component={Cart} ></Route>
      <Route path="/delivery" component={Delivery} ></Route>
      <Route path="/order" component={order} ></Route>
      <Route path="/wishlist" component={Wishlist} ></Route>
      <Route path="/register" component={Register} ></Route>
    </Router>

  )
}

export default App


