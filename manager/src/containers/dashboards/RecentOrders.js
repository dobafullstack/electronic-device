/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, CardBody, CardTitle, Badge } from 'reactstrap';

import IntlMessages from 'helpers/IntlMessages';
import { adminRoot } from 'constants/defaultValues';

const RecentOrders = ({ data }) => {
  return (
    <Card>
      <div className="position-absolute card-top-buttons">
        <button type="button" className="btn btn-header-light icon-button">
          <i className="simple-icon-refresh" />
        </button>
      </div>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.recent-orders" />
        </CardTitle>
        <div className="scroll dashboard-list-with-thumbs">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {data.slice(0, 8).map((order, index) => {
              console.log(order);
              return (
                <div key={index} className="d-flex flex-row mb-3">
                  <NavLink
                    to={`${adminRoot}/pages/store/orders/${order._id}`}
                    className="d-block position-relative"
                  >
                    <img
                      src={order.productItems[0].productItem.images[0]}
                      alt={order.productItems[0].productItem.name}
                      width="85px"
                      className="list-thumbnail border-0"
                    />
                    <Badge
                      key={index}
                      className="position-absolute badge-top-right"
                      color={
                        order.delivery.status === 'success'
                          ? 'success'
                          : 'warning'
                      }
                      pill
                    >
                      {order.delivery.status.toUpperCase()}
                    </Badge>
                  </NavLink>

                  <div className="pl-3 pt-2 pr-2 pb-2">
                    <NavLink
                      to={`${adminRoot}/pages/store/orders/${order._id}`}
                    >
                      <p className="list-item-heading">
                        {order.productItems[0].productItem.name}
                      </p>
                      <div className="pr-4">
                        <p className="text-muted mb-1 text-small">
                          {order.productItems[0].productItem.description.slice(
                            0,
                            100
                          )}
                        </p>
                      </div>
                      <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                        {new Date(order.createdAt).toLocaleString('vi-VN')}
                      </div>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
  );
};
export default RecentOrders;
