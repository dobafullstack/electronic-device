import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect, useDispatch, useSelector } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByIdAction } from "../../redux/actions/productActions";
const Product = ({ location, match }) => {
  const { pathname } = location;
  const product = useSelector((state) => state.productData.product.data);
  const loading = useSelector((state) => state.productData.product.loading);
  const { id } = useParams();

  const dispatch = useDispatch();
  console.log("not dispatched");
  useEffect(() => {
    dispatch(getProductByIdAction(match.params.id));
    console.log("dispatched");
  }, [dispatch, match.params.id]);

  //   const product = products.find((x) => x._id === match.params.id);

  return (
    <Fragment>
      {!loading ? (
        <>
          <MetaTags>
            <title>Tin Học Mặt Trăng | {product.name || "Product"}</title>
            <meta
              name="description"
              content="Product page of flone react minimalist eCommerce template."
            />
          </MetaTags>

          <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
            Home
          </BreadcrumbsItem>
          <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
            {product.name || "Product"}
          </BreadcrumbsItem>

          <LayoutOne headerTop="visible">
            {/* breadcrumb */}
            <Breadcrumb />

            {/* product description with image */}
            <ProductImageDescription
              spaceTopClass="pt-100"
              spaceBottomClass="pb-100"
              product={product}
            />

            {/* product description tab */}
            <ProductDescriptionTab
              spaceBottomClass="pb-90"
              productFullDesc={product.description}
            />

            {/* related product slider */}
            <RelatedProductSlider
              spaceBottomClass="pb-95"
              category={product.category_detail_id.name}
            />
          </LayoutOne>
        </>
      ) : (
        <div className="flone-preloader-wrapper">
          <div className="flone-preloader">
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
};

export default Product;
