import React from 'react';
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText,
  CustomInput,
  Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from 'components/common/CustomBootstrap';
import { formatDate } from 'helpers/Utils';

const ImageListView = ({ product, isSelect, collect, onCheckItem }) => {
  return (
    <Colxx sm="6" lg="4" xl="3" className="mb-3" key={product._id}>
      <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
        <Card
          onClick={(event) => onCheckItem(event, product._id)}
          className={classnames({
            active: isSelect,
          })}
        >
          <div className="position-relative">
            <NavLink to={`${product._id}`} className="w-40 w-sm-100">
              <CardImg top alt={product.name} src={product.images[0]} />
            </NavLink>
            <Badge
              color={product.statusColor}
              pill
              className="position-absolute badge-top-left"
            >
              {product.status}
            </Badge>
          </div>
          <CardBody>
            <Row>
              <Colxx xxs="2">
                <CustomInput
                  className="item-check mb-0"
                  type="checkbox"
                  id={`check_${product._id}`}
                  checked={isSelect}
                  onChange={() => {}}
                  label=""
                />
              </Colxx>
              <Colxx xxs="10" className="mb-3">
                <CardSubtitle>{product.name}</CardSubtitle>
                <CardText className="text-muted text-small mb-0 font-weight-light">
                  {formatDate(new Date(Date.parse(product.createdAt)))}
                </CardText>
              </Colxx>
            </Row>
          </CardBody>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ImageListView);
