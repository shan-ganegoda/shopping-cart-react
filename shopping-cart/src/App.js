import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';



function App() {
  return (
    <div>
      <Header/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = { <Home /> } />
            <Route path='/cart' element = { <Cart /> } />
            <Route path='/checkout' element = { <Checkout /> } />
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
