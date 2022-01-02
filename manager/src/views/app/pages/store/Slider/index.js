import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ListOrder = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './ListSlider')
);
const DetailOrder = React.lazy(() =>
  import(/* webpackChunkName: "product-image-list" */ './DetailSlider')
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
          render={(props) => <ListOrder {...props} />}
        />
        <Route
          path={`${match.url}/detail`}
          render={(props) => <DetailOrder {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
}
