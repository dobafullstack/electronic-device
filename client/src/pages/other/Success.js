import React, { Fragment } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

export default function Success({ location: { pathname } }) {
  return (
    <Fragment>
      <MetaTags>
        <title>Tin Học Mặt Trăng | Checkout</title>
        <meta
          name="description"
          content="Checkout page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/checkout"}>
        Checkout
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/checkout" + pathname}>
        Payment
      </BreadcrumbsItem>
      <Layout headerTop="visible">
        <Breadcrumb />
        <div
          className="text-success d-flex justify-content-center align-items-center flex-column"
          style={{ minHeight: "calc(100vh - 377px - 141px)" }}
        >
          <i className="fas fa-check-circle" style={{ fontSize: "10rem" }}></i>
          <Link to="/" className="btn btn-success mt-5">
            Tiếp tục mua hàng
          </Link>
        </div>
      </Layout>
    </Fragment>
  );
}
