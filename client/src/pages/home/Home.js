import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../../layouts/Layout";
import HeroSliderSixteen from "../../wrappers/hero-slider/HeroSliderSixteen";
import CategoryThreeSlider from "../../wrappers/category/CategoryThreeSlider";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import TabProductTen from "../../wrappers/product/TabProductTen";
import BannerTwelve from "../../wrappers/banner/BannerTwelve";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getAllBestSellerAction,
  getAllNewArrivalAction,
  getAllSaleItemsAction,
} from "../../redux/actions/productActions";
import { getAllCategoriesAction } from "../../redux/actions/categoryActions";

const HomeElectronicsTwo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBestSellerAction());
    dispatch(getAllNewArrivalAction());
    dispatch(getAllSaleItemsAction());
    dispatch(getAllCategoriesAction());
  }, []);
  return (
    <Fragment>
      <MetaTags>
        <title>Tin Học Mặt Trăng | Home</title>
        <meta
          name="description"
          content="Electronics home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <Layout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderSixteen />
        {/* category */}
        <CategoryThreeSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />
        {/* feature icon */}
        <FeatureIconFour
          bgImg="/assets/img/bg/shape.png"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        />
        {/* tab product */}
        <TabProductTen
          spaceBottomClass="pb-60"
          spaceTopClass="pt-100"
          category="electronics"
        />
        {/* banner */}
        <BannerTwelve />
        {/* blog featured */}
        {/* <BlogFeaturedThree spaceTopClass="pt-70" spaceBottomClass="pb-70" /> */}
      </Layout>
    </Fragment>
  );
};

export default HomeElectronicsTwo;
