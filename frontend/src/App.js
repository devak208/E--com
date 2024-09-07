import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Productctdetails from './pages/productDetails';
import './App.css';
import Home from './pages/home';
import Cartpage from './pages/cartpage';
import { useState } from 'react';
import Header from './components/header';

function App() {
  const [cartitems, setcartitems] = useState([]);
  return (<>

    <BrowserRouter>
      <Header cartitems={cartitems} className="fixed" />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Home />} />
        <Route path='/product/:id' element={<Productctdetails cartitems={cartitems} setcartitems={setcartitems} />} />
        <Route path='/product/Cart' element={<Cartpage cartitems={cartitems} setcartitems={setcartitems} />} />

      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;
