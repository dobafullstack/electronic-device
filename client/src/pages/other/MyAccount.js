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

const MyAccount = ({ location }) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const [cities, setCities] = useState([]);
  //address modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { pathname } = location;
  const { isLogin } = useContext(AuthContext);

  const { addToast } = useToasts();

  const fetchUser = async () => {
    await axiosClient.get("/auth").then((res) => setUser(res.result));
    setIsFetching(false);
  };

  const onChangeDetails = async () => {
    setIsFetching(true);
    return await axiosClient
      .put("/auth/update", {
        name,
        email,
        phone,
      })
      .then(({ result }) => {
        fetchUser();
        setUser(result);
        addToast(result, {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      });
  };

  const onPasswordChange = async () => {
    if (user) {
      if (newPassword === confirmPassword) {
        await axiosClient
          .put("/auth/change-password", { oldPassword, newPassword })
          .then((res) => {
            addToast("Cập nhật thành công", {
              appearance: "success",
              autoDismiss: true,
              autoDismissTimeout: 3000,
            });
          })
          .catch((error) => {
            if (error.response.data) {
              addToast(error.response.data.error.message, {
                appearance: "error",
                autoDismiss: true,
                autoDismissTimeout: 3000,
              });
            }
          });
      } else {
        addToast("Confirm password not match", {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      }
    }
  };

  useEffect(() => {
    fetchUser();
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
          content="Compare page of flone react minimalist eCommerce template."
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
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="0">
                          <h3 className="panel-title">
                            <span>1 .</span> Edit your account information{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <form onSubmit={(e) => e.preventDefault()}>
                            <div className="myaccount-info-wrapper">
                              <div className="account-info-wrapper">
                                <h4>My Account Information</h4>
                                <h5>Your Personal Details</h5>
                              </div>
                              <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Name</label>
                                    <input
                                      type="text"
                                      name="name"
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Email Address</label>
                                    <input
                                      type="email"
                                      name="email"
                                      value={email}
                                      readOnly
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Phone</label>
                                    <input
                                      type="text"
                                      name="phone"
                                      value={phone}
                                      onChange={(e) => setPhone(e.target.value)}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button
                                    type="submit"
                                    onClick={() => onChangeDetails()}
                                  >
                                    Continue
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="1">
                          <h3 className="panel-title">
                            <span>2 .</span> Change your password
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Change Password</h4>
                              <h5>Your Password</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Old Password</label>
                                  <input
                                    type="password"
                                    name="old-password"
                                    value={oldPassword}
                                    onChange={(e) =>
                                      setOldPassword(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>New Password</label>
                                  <input
                                    type="password"
                                    name="new-password"
                                    value={newPassword}
                                    onChange={(e) =>
                                      setNewPassword(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>New Password Confirm</label>
                                  <input
                                    type="password"
                                    name="confirm-password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                      setConfirmPassword(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button
                                  type="submit"
                                  onClick={() => onPasswordChange()}
                                >
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="2">
                          <h3 className="panel-title">
                            <span>3 .</span> Modify your address book entries{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Address Book Entries</h4>
                            </div>
                            {!isFetching &&
                              user?.delivery.map((item) => (
                                <div className="entries-wrapper">
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                      <div className="entries-info text-center">
                                        <p>{item.name}</p>
                                        <p>{item.phone} </p>
                                        <p>{item.address.street}</p>
                                        <p>{item.address.district}</p>
                                        <p>{item.address.city}</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                      <div className="entries-edit-delete text-center">
                                        <button
                                          className="edit"
                                          onClick={handleShow}
                                        >
                                          Edit
                                        </button>
                                        <button>Delete</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <AddressUpdateModal
                    show={show}
                    handleClose={handleClose}
                    cities={cities}
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
