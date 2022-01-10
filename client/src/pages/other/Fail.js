import React, { Fragment } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

export default function Fail({ location: { pathname } }) {
  return (
    <Fragment>
      <MetaTags>
        <title>Tin Học Mặt Trăng | Checkout</title>
        <meta
          name="description"
          content="Checkout page of Ecommerce Project by KTA."
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
          className="text-danger d-flex justify-content-center align-items-center flex-column"
          style={{ minHeight: "calc(100vh - 377px - 141px)" }}
        >
          <i className="fas fa-times-circle" style={{ fontSize: "10rem" }}></i>
          <Link to="/checkout" className="btn btn-danger mt-5">
            Thử lại
          </Link>
        </div>
      </Layout>
    </Fragment>
  );
}
