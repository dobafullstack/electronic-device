import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ListDiscount = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './ListDiscount')
);

export default function ProductPage({ match }) {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect
          exact
          from={`${match.url}/`}
          to={`${match.url}/list-slider`}
        />
        <Route
          path={`${match.url}/list-slider`}
          render={(props) => <ListDiscount {...props} />}
        />
        <Route
          path={`${match.url}/:sliderId`}
          render={(props) => <ListDiscount {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
}
