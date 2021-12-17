import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ListProduct = React.lazy(() => import('./ListProduct'));
const DetailProduct = React.lazy(() => import('./DetailProduct'));

export default function ProductPage({ match }) {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect
          exact
          from={`${match.url}/`}
          to={`${match.url}/list-product`}
        />
        <Route
          path={`${match.url}/list-product`}
          render={(props) => <ListProduct {...props} />}
        />
        <Route
          path={`${match.url}/detail`}
          render={(props) => <DetailProduct {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
}
