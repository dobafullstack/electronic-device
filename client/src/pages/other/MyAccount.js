import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { Card, Accordion } from "react-bootstrap/";
import Layout from "../../layouts/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Redirect } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import { useToasts } from "react-toast-notifications";
import AddressUpdateModal from "../../components/modal/AddressUpdateModal";
import Personal from "../../components/my-account/Personal";
import ChangePassword from "../../components/my-account/ChangePassword";
import ChangeAddress from "../../components/my-account/ChangeAddress";
import MyOrder from "../../components/my-account/MyOrder";
import getMyOrder from "../../api/orderApi";

const MyAccount = ({ location }) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orders, setOrders] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [cities, setCities] = useState([]);
  const [selectedDelivery, setSelectedDelivery] = useState("");
  //address modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setSelectedDelivery(id);
    setShow(true);
  };

  const { pathname } = location;
  const { isLogin, token } = useContext(AuthContext);

  const { addToast } = useToasts();

  const fetchUser = async () => {
    await axiosClient
      .get("/auth", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => setUser(res.result));
    setIsFetching(false);
  };
  const fetchOrders = async () => {
    await axiosClient
      .get("/order/my-order", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => setOrders(res.result));
  };

  useEffect(() => {
    fetchUser();
    fetchOrders();
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
    }
  }, [user]);

  useEffect(() => {
    axiosClient.get("https://api-vietnam-city.herokuapp.com/").then((res) => {
      // setFieldValue("city", res[0].name);
      setCities(res);
    });
  }, []);

  if (!isLogin) return <Redirect to="/login-register" />;
  return !isFetching ? (
    <Fragment>
      <MetaTags>
        <title>Tin Học Mặt Trăng | My Account</title>
        <meta
          name="description"
          content="Compare page of Ecommerce Project by KTA."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        My Account
      </BreadcrumbsItem>
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Personal
                      user={user}
                      fetchUser={fetchUser}
                      addToast={addToast}
                      setUser={setUser}
                      token={token}
                    />
                    <ChangePassword
                      user={user}
                      addToast={addToast}
                      token={token}
                    />
                    <ChangeAddress
                      user={user}
                      isFetching={isFetching}
                      handleShow={handleShow}
                    />
                    <MyOrder orders={orders} token={token} />
                  </Accordion>
                  <AddressUpdateModal
                    show={show}
                    handleClose={handleClose}
                    cities={cities}
                    user={user}
                    id={selectedDelivery}
                    setUser={setUser}
                    token={token}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  ) : (
    <div className="flone-preloader-wrapper">
      <div className="flone-preloader">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

MyAccount.propTypes = {
  location: PropTypes.object,
};

export default MyAccount;
