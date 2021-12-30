import PropTypes from "prop-types";
import React, { lazy, Suspense, useEffect } from "react";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { loadLanguages, multilanguage } from "redux-multilanguage";
import ScrollToTop from "./helpers/scroll-top";

// home pages
const Home = lazy(() => import("./pages/home/Home"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));

// other pages
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/Auth/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const Payment = lazy(() => import("./pages/other/Payment"));
const Success = lazy(() => import("./pages/other/Success"));
const Fail = lazy(() => import("./pages/other/Fail"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json"),
        },
      })
    );
  });

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={Home}
                />

                {/* Shop pages */}
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/shop"}
                  component={ShopGridStandard}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/shop/:categoryId"}
                  component={ShopGridStandard}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/shop/child/:childId"}
                  component={ShopGridStandard}
                />

                {/* Shop product pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  render={(routeProps) => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
                />

                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/my-account"}
                  component={MyAccount}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegister}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={Cart}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/compare"}
                  component={Compare}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/checkout"}
                  component={Checkout}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/checkout/payment"}
                  component={Payment}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/checkout/success"}
                  component={Success}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/checkout/fail"}
                  component={Fail}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
