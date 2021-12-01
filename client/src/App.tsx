import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import MobileHeader from './components/Header/MobileHeader';
import MiniCart from './components/Cart/MiniCart';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Header />
        <MobileHeader />
        <MiniCart />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
