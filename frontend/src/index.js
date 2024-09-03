import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Productctdetails from './pages/productDetails';
import Cartpage from './pages/cartpage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Home/>} />
        <Route path='/product/:id'element={<Productctdetails/>}/>
        <Route path='/product/cart/:id'element={<Cartpage/>}/>
      </Routes>
    </BrowserRouter>

  </>
);