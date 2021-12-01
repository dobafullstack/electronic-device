import React from 'react';
import Header from './components/Header/Header';
import { Counter } from './features/counter/Counter';
import './App.css';
import MobileHeader from './components/Header/MobileHeader';
import MiniCart from './components/Cart/MiniCart';
import Slider from './components/Slider/Slider';
import ProductArea from './components/ProductArea/ProductArea';
import Banner from './components/Banner/Banner';
import BlogArea from './components/BlogArea/BlogArea';
import BrandArea from './components/BrandArea/BrandArea';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <MobileHeader />
      <MiniCart />
      <Slider />
      <ProductArea head="Best-seller products" />
      <Banner />
      <ProductArea head="New Arrival" bottomBordered />
      <BlogArea />
      <BrandArea />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
