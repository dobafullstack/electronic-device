import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ListRole = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './ListRole')
);
const DetailRole = React.lazy(() =>
  import(/* webpackChunkName: "product-image-list" */ './DetailRole')
);

export default function AttributePage({ match }) {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/list-roles`} />
        <Route
          path={`${match.url}/list-roles`}
          render={(props) => <ListRole {...props} />}
        />
        <Route
          path={`${match.url}/detail`}
          render={(props) => <DetailRole {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
}
