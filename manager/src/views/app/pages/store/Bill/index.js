import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ListBill = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './ListBill')
);
const DetailBill = React.lazy(() =>
  import(/* webpackChunkName: "product-image-list" */ './DetailBill')
);

export default function BillPage({ match }) {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/list-bill`} />
        <Route
          path={`${match.url}/list-bill`}
          render={(props) => <ListBill {...props} />}
        />
        <Route
          path={`${match.url}/detail`}
          render={(props) => <DetailBill {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
}
