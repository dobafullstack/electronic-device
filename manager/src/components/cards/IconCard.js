import React from 'react';
import { Card, CardBody } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Link } from 'react-router-dom';

const IconCard = ({ className = 'mb-4', icon, title, value }) => {
  return (
    <div className={`icon-row-item ${className}`}>
      <Link to="/app/pages/store/orders/list-order">
        <Card>
          <CardBody className="text-center">
            <i className={icon} />
            <p className="card-text font-weight-semibold mb-0">
              <IntlMessages id={title} />
            </p>
            <p className="lead text-center">{value}</p>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default React.memo(IconCard);
