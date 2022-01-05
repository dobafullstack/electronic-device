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
  return (
    <Colxx xxs="12" className="mb-3">
      <ContextMenuTrigger id="menu_id" data={product._id} collect={collect}>
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
                  {product.name}
                </p>
              </NavLink>

              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.username}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.email}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.phone}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.role_id.name === 'admin' && (
                  <Badge color="success">{product.role_id.name}</Badge>
                )}
                {product.role_id.name === 'customer' && (
                  <Badge color="primary">{product.role_id.name}</Badge>
                )}
                {product.role_id.name === 'staff' && (
                  <Badge color="secondary">{product.role_id.name}</Badge>
                )}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.active ? (
                  <Badge color="success">active</Badge>
                ) : (
                  <Badge color="danger">unactive</Badge>
                )}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {formatDate(new Date(Date.parse(product.createdAt)))}
              </p>
            </div>
          </div>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(DataListView);
