import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ListOrder = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './ListOrder')
);
const DetailOrder = React.lazy(() =>
  import(/* webpackChunkName: "product-image-list" */ './DetailOrder')
);

export default function ProductPage({ match }) {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/list-order`} />
        <Route
          path={`${match.url}/list-order`}
          render={(props) => <ListOrder {...props} />}
        />
        <Route
          path={`${match.url}/:orderId`}
          render={(props) => <DetailOrder {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
}
