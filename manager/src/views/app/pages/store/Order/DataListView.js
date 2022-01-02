import React from 'react';
import { Card, CustomInput, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from 'components/common/CustomBootstrap';
import { formatDate } from 'helpers/Utils';
import VND from 'helpers/VND';

const DataListView = ({
  product,
  isSelect,
  collect,
  onCheckItem,
  location,
}) => {
  let deliveryStatus = '';
  let paymentStatus = '';
  let paymentMethod = '';

  switch (product.delivery.status) {
    case 'pending':
      deliveryStatus = 'warning';
      break;
    case 'success':
      deliveryStatus = 'success';
      break;
    case 'canceled':
      deliveryStatus = 'danger';
      break;
    default:
      deliveryStatus = 'warning';
  }

  switch (product.payment.status) {
    case true:
      paymentStatus = 'success';
      break;
    case false:
      paymentStatus = 'primary';
      break;
    default:
      paymentStatus = 'primary';
  }

  switch (product.payment.method) {
    case 'cash':
      paymentMethod = 'success';
      break;
    case 'paypal':
      paymentMethod = 'secondary';
      break;
    default:
      paymentMethod = 'success';
  }

  return (
    <Colxx xxs="12" className="mb-3">
      <Card
        onClick={(event) => onCheckItem(event, product._id)}
        className={classnames('d-flex flex-row', {
          active: isSelect,
        })}
      >
        <div className="pl-2 d-flex flex-grow-1 min-width-zero">
          <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <NavLink to={`${product._id}`} className="w-40 w-sm-100">
              <p className="list-item-heading mb-1 truncate">
                {product.userId ? product.userId.name : 'Khách vãng lai'}
              </p>
            </NavLink>
            <div className="w-15 w-sm-100">
              <Badge color={deliveryStatus} pill>
                {product.delivery.status}
              </Badge>
            </div>
            <div className="w-15 w-sm-100">
              <Badge color={paymentStatus} pill>
                {product.payment.status ? 'Đã thanh toán' : 'Chưa thanh toán'}
              </Badge>
            </div>

            <div className="w-15 w-sm-100">
              <Badge color={paymentMethod} pill>
                {product.payment.method}
              </Badge>
            </div>

            <div className="w-15 w-sm-100">
              <Badge color={product.haveInBill ? 'success' : 'warning'} pill>
                {product.haveInBill ? 'Đã có bill' : 'Chưa có bill'}
              </Badge>
            </div>

            <p className="mb-1 text-muted text-small w-15 w-sm-100">
              {VND(product.total)}
            </p>
            <p className="mb-1 text-muted text-small w-15 w-sm-100">
              {formatDate(new Date(Date.parse(product.createdAt)))}
            </p>
          </div>
        </div>
      </Card>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(DataListView);
