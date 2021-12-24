import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect, useSelector } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Product = ({ location }) => {
  const { pathname } = location;
  const products = useSelector(state => state.productData.products);
  const {id} = useParams();

  const product = products.find(x => x._id === id);

  return (
      <Fragment>
          <MetaTags>
              <title>Flone | Product Page</title>
              <meta
                  name='description'
                  content='Product page of flone react minimalist eCommerce template.'
              />
          </MetaTags>

          <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
              Home
          </BreadcrumbsItem>
          <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
              Shop Product
          </BreadcrumbsItem>

          {product && (
              <LayoutOne headerTop='visible'>
                  {/* breadcrumb */}
                  <Breadcrumb />

                  {/* product description with image */}
                  <ProductImageDescription
                      spaceTopClass='pt-100'
                      spaceBottomClass='pb-100'
                      product={product}
                  />

                  {/* product description tab */}
                  {/* <ProductDescriptionTab
                      spaceBottomClass="pb-90"
                      productFullDesc={product.description}
                    /> */}

                  {/* related product slider */}
                  <RelatedProductSlider
                    spaceBottomClass="pb-95"
                    category={product.category_detail_id.name}
                  />
              </LayoutOne>
          )}
      </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
};

export default Product;
