import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ListCategory = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './ListCategory')
);
const DetailCategory = React.lazy(() =>
  import(/* webpackChunkName: "product-image-list" */ './DetailCategory')
);

export default function CategoryPage({ match }) {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect
          exact
          from={`${match.url}/`}
          to={`${match.url}/list-categories`}
        />
        <Route
          path={`${match.url}/list-categories`}
          render={(props) => <ListCategory {...props} />}
        />
        <Route
          path={`${match.url}/:categoryId`}
          render={(props) => <DetailCategory {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
}
