import billApi from 'api/billApi';
import orderApi from 'api/orderApi';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { NotificationManager } from 'components/common/react-notifications';
import Breadcrumb from 'containers/navs/Breadcrumb';
import VND from 'helpers/VND';
import React, { useEffect, useState } from 'react';
import { injectIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import { Badge, Button, Card, CardBody, Row, Table } from 'reactstrap';

const DetailsPages = ({ match, intl }) => {
  const { billId } = useParams();
  const [bill, setBill] = useState();

  const fetchingBill = () =>
    billApi
      .getDetailBill(billId)
      .then((res) => setBill(res.result))
      .catch((err) => console.log(err));

  useEffect(() => {
    fetchingBill();
  }, [billId]);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>Detail Order</h1>
          <button
            type="button"
            onClick={() => fetchingBill()}
            className="btn d-flex justify-content-center align-items-center"
            style={{ height: 25 }}
          >
            <i className="simple-icon-reload" />
          </button>

          <Breadcrumb match={match} />
          <Separator className="mb-5" />

          <Row>
            <Colxx xxs="12" xl="6" className="col-left">
              <Card className="mb-4">
                <CardBody>
                  <h3>Products</h3>
                  {bill &&
                    bill.productItems.map((item) => (
                      <div
                        className="d-flex justify-content-between mt-4"
                        key={item.productItem._id}
                      >
                        <strong>{item.productItem.name}</strong>
                        <p>{VND(item.productItem.price)}</p>
                        <p>x{item.quantity}</p>
                        <p>{VND(item.quantity * item.productItem.price)}</p>
                      </div>
                    ))}
                  <hr />
                  <div className="d-flex justify-content-between mt-4">
                    <strong>Total:</strong>
                    {bill && <p>{VND(bill.total)}</p>}
                  </div>
                </CardBody>
              </Card>
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(DetailsPages);
