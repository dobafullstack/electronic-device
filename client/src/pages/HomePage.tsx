import React from "react";
import Banner from "../components/Banner/Banner";
import BlogArea from "../components/BlogArea/BlogArea";
import BrandArea from "../components/BrandArea/BrandArea";
import Modal from "../components/Modal/Modal";
import ProductArea from "../components/ProductArea/ProductArea";
import Slider from "../components/Slider/Slider";

function HomePage() {
    return (
        <>
            <Slider />
            <ProductArea isBestSeller products={[]} />
            <Banner />
            <ProductArea isNewArrival bottomBordered products={[]} />
            <BlogArea />
            <BrandArea />
            <Modal />
        </>
    );
}

export default HomePage;