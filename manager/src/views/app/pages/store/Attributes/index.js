import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ListAttribute = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './ListAttribute')
);
const DetailAttribute = React.lazy(() =>
  import(/* webpackChunkName: "product-image-list" */ './DetailAttribute')
);

export default function AttributePage({ match }) {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect
          exact
          from={`${match.url}/`}
          to={`${match.url}/list-attributes`}
        />
        <Route
          path={`${match.url}/list-attributes`}
          render={(props) => <ListAttribute {...props} />}
        />
        <Route
          path={`${match.url}/:attributeId`}
          render={(props) => <ListAttribute {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
}
