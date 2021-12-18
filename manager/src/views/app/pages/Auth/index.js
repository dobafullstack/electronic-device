import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const UserPage = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './User')
);
const RolePage = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './Role')
);

const PageAuth = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/users`} />
      <Route
        path={`${match.url}/users`}
        render={(props) => <UserPage {...props} />}
      />
      <Route
        path={`${match.url}/roles`}
        render={(props) => <RolePage {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default PageAuth;
