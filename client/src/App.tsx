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
import './assets/scss/style.scss';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AuthenticationPage from './pages/AuthenticationPage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
      <div className='main-wrapper'>
          <Router>
              <Header />
              <MobileHeader />
              <MiniCart />
              <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/cart' element={<CartPage />} />
                  <Route path='/shop' element={<ShopPage />} />
                  <Route
                      path='/product/:productId'
                      element={<ProductDetailPage />}
                  />
                  <Route path='/checkout' element={<CheckoutPage />} />
                  <Route path='/auth' element={<AuthenticationPage />} />
                  <Route path='/wishlist' element={<WishlistPage />} />
                  <Route path='/profile' element={<ProfilePage />} />
              </Routes>
              <Footer />
          </Router>

          <ToastContainer
              position='bottom-left'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          />
      </div>
  );
}

export default App;
