import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ProductPage = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './Product')
);
const AttributePage = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './Attributes')
);
const CategoryPage = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './Categories')
);
const OrderPage = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './Order')
);
const BillPage = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './Bill')
);
const SliderPage = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './Slider')
);

const PagesStore = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/products`} />
      <Route
        path={`${match.url}/products`}
        render={(props) => <ProductPage {...props} />}
      />
      <Route
        path={`${match.url}/attributes`}
        render={(props) => <AttributePage {...props} />}
      />
      <Route
        path={`${match.url}/categories`}
        render={(props) => <CategoryPage {...props} />}
      />
      <Route
        path={`${match.url}/orders`}
        render={(props) => <OrderPage {...props} />}
      />
      <Route
        path={`${match.url}/bills`}
        render={(props) => <BillPage {...props} />}
      />
      <Route
        path={`${match.url}/sliders`}
        render={(props) => <SliderPage {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default PagesStore;
