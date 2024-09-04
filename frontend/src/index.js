import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    
  <>
    <App/>
  </>
);