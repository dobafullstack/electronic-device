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
    const [selectedDelivery, setSelectedDelivery] = useState("");
    //address modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setSelectedDelivery(id);
        setShow(true);
    };

    const { pathname } = location;
    const { isLogin, setIsLogin, token } = useContext(AuthContext);

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

    const onChangeDetails = async () => {
        setIsFetching(true);
        return await axiosClient
            .put(
                "/auth/update",
                {
                    name,
                    email,
                    phone,
                },
                {
                    headers: {
                        authorization: "Bearer " + token,
                    },
                }
            )
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
                    .put(
                        "/auth/change-password",
                        { oldPassword, newPassword },
                        {
                            headers: {
                                authorization: "Bearer " + token,
                            },
                        }
                    )
                    .then((res) => {
                        addToast("Cập nhật thành công", {
                            appearance: "success",
                            autoDismiss: true,
                            autoDismissTimeout: 3000,
                        });
                        setIsLogin(false);
                        localStorage.removeItem("access_token");
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
        axiosClient
            .get("https://api-vietnam-city.herokuapp.com/")
            .then((res) => {
                // setFieldValue("city", res[0].name);
                setCities(res);
            });
    }, []);

    if (!isLogin) return <Redirect to='/login-register' />;

    return !isFetching ? (
        <Fragment>
            <MetaTags>
                <title>Tin Học Mặt Trăng | My Account</title>
                <meta
                    name='description'
                    content='Compare page of flone react minimalist eCommerce template.'
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
                Home
            </BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                My Account
            </BreadcrumbsItem>
            <Layout headerTop='visible'>
                {/* breadcrumb */}
                <Breadcrumb />
                <div className='myaccount-area pb-80 pt-100'>
                    <div className='container'>
                        <div className='row'>
                            <div className='ml-auto mr-auto col-lg-9'>
                                <div className='myaccount-wrapper'>
                                    <Accordion defaultActiveKey='0'>
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
        <div className='flone-preloader-wrapper'>
            <div className='flone-preloader'>
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
