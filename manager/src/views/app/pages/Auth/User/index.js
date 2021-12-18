import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ListUser = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './ListUser')
);
const DetailUser = React.lazy(() =>
  import(/* webpackChunkName: "product-image-list" */ './DetailUser')
);

export default function AttributePage({ match }) {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/list-users`} />
        <Route
          path={`${match.url}/list-users`}
          render={(props) => <ListUser {...props} />}
        />
        <Route
          path={`${match.url}/detail`}
          render={(props) => <DetailUser {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
}
