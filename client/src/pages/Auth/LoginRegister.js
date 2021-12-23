import PropTypes from "prop-types";
import React, { Fragment, useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import MetaTags from "react-meta-tags";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Login from "./Login";
import Register from "./Register";

const LoginRegister = ({ location }) => {
    const { pathname } = location;
    const { isLogin } = useContext(AuthContext);

    if (isLogin) return <Redirect to='/' />;

    return (
        <Fragment>
            <MetaTags>
                <title>Flone | Login</title>
                <meta
                    name='description'
                    content='Compare page of flone react minimalist eCommerce template.'
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
                Home
            </BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Login Register
            </BreadcrumbsItem>
            <LayoutOne headerTop='visible'>
                {/* breadcrumb */}
                <Breadcrumb />
                <div className='login-register-area pt-100 pb-100'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-7 col-md-12 ml-auto mr-auto'>
                                <div className='login-register-wrapper'>
                                    <Tab.Container defaultActiveKey='login'>
                                        <Nav
                                            variant='pills'
                                            className='login-register-tab-list'>
                                            <Nav.Item>
                                                <Nav.Link eventKey='login'>
                                                    <h4>Login</h4>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey='register'>
                                                    <h4>Register</h4>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Login />
                                            <Register />
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

LoginRegister.propTypes = {
    location: PropTypes.object,
};

export default LoginRegister;
