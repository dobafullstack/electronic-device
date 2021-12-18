import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Store = React.lazy(() =>
  import(/* webpackChunkName: "pages-product" */ './store')
);
const Auth = React.lazy(() =>
  import(/* webpackChunkName: "pages-product" */ './Auth')
);
const Profile = React.lazy(() =>
  import(/* webpackChunkName: "pages-profile" */ './profile')
);
const Miscellaneous = React.lazy(() =>
  import(/* webpackChunkName: "pages-miscellaneous" */ './miscellaneous')
);
const Blog = React.lazy(() =>
  import(/* webpackChunkName: "pages-blog" */ './blog')
);

const Pages = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/product`} />
      <Route
        path={`${match.url}/store`}
        render={(props) => <Store {...props} />}
      />
      <Route
        path={`${match.url}/auth`}
        render={(props) => <Auth {...props} />}
      />
      <Route
        path={`${match.url}/profile`}
        render={(props) => <Profile {...props} />}
      />
      <Route
        path={`${match.url}/blog`}
        render={(props) => <Blog {...props} />}
      />
      <Route
        path={`${match.url}/miscellaneous`}
        render={(props) => <Miscellaneous {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Pages;
