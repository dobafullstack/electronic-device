import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import MobileHeader from "./components/Header/MobileHeader";
import MiniCart from "./components/Cart/MiniCart";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";

function App() {
    return (
        <div className='main-wrapper'>
            <Router>
                <Header />
                <MobileHeader />
                <MiniCart />
                <main>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/cart' element={<CartPage />} />
                        <Route path='/shop' element={<ShopPage />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

function NotFound() {
    return (
        <div
            style={{
                width: "100%",
                minHeight: "calc(100vh - 142px - 148px - 485px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <h2>Not found</h2>
        </div>
    );
}

export default App;
