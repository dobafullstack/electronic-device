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
  const { orderId } = useParams();
  const [order, setOrder] = useState();

  const fetchingOrder = () =>
    orderApi
      .getDetailOrder(orderId)
      .then((res) => setOrder(res.result))
      .catch((err) => console.log(err));

  const onUpdate = async (body) => {
    try {
      const { result, error } = await orderApi.updateOrder(orderId, body);

      if (error === null) {
        NotificationManager.success(
          result,
          'Update Order',
          3000,
          null,
          null,
          ''
        );
        fetchingOrder();
      }
    } catch (error) {
      if (error.response.data) {
        NotificationManager.warning(
          error.response.data.error.message,
          'Update Order',
          3000,
          null,
          null,
          ''
        );
      }
    }
  };

  const onBill = async () => {
    try {
      const { result, error } = await billApi.createBill({ orderId });

      if (error === null) {
        NotificationManager.success(
          result,
          'Update Order',
          3000,
          null,
          null,
          ''
        );
        fetchingOrder();
      }
    } catch (error) {
      if (error.response.data) {
        NotificationManager.warning(
          error.response.data.error.message,
          'Update Order',
          3000,
          null,
          null,
          ''
        );
      }
    }
  };

  useEffect(() => {
    fetchingOrder();
  }, [orderId]);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>Detail Order</h1>
          <button
            type="button"
            onClick={() => fetchingOrder()}
            className="btn d-flex justify-content-center align-items-center"
            style={{ height: 25 }}
          >
            <i className="simple-icon-reload" />
          </button>

          <Breadcrumb match={match} />
          <Separator className="mb-5" />

          <Row>
            <Colxx xxs="24" xl="12" className="col-left">
              <Card className="mb-4">
                <CardBody>
                  <h3>Products</h3>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Product Price</th>
                        <th>Sub Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order &&
                        order.productItems.map((item) => (
                          <tr key={item.productItem._id}>
                            <td>{item.productItem.name}</td>
                            <td>{item.quantity}</td>
                            <td>{VND(item.productItem.price)}</td>
                            <td>
                              {VND(item.quantity * item.productItem.price)}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Colxx>
            <Colxx xxs="12" xl="6" className="col-left">
              <Card className="mb-4">
                <CardBody>
                  <h3>Delivery</h3>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order && (
                        <tr>
                          <td>{order.delivery.name}</td>
                          <td>{order.delivery.phone}</td>
                          <td>{order.delivery.address}</td>
                          <td>
                            {order.delivery.status === 'pending' && (
                              <Badge color="warning">
                                {order.delivery.status}
                              </Badge>
                            )}
                            {order.delivery.status === 'success' && (
                              <Badge color="success">
                                {order.delivery.status}
                              </Badge>
                            )}
                            {order.delivery.status === 'canceled' && (
                              <Badge color="danger">
                                {order.delivery.status}
                              </Badge>
                            )}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Colxx>
            <Colxx xxs="12" xl="6" className="col-left">
              <Card className="mb-4">
                <CardBody>
                  <h3>Payment</h3>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Method</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order && (
                        <tr>
                          <td>
                            {order.payment.status ? (
                              <Badge color="success">Đã thanh toán</Badge>
                            ) : (
                              <Badge color="danger">Chưa thanh toán</Badge>
                            )}
                          </td>
                          <td>
                            {order.payment.method === 'cash' ? (
                              <Badge color="success">
                                {order.payment.method}
                              </Badge>
                            ) : (
                              <Badge color="secondary">
                                {order.payment.method}
                              </Badge>
                            )}
                          </td>
                          <td>{VND(order.total)}</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Colxx>
          </Row>
          {order && (
            <div className="d-flex justify-content-end" style={{ gap: 10 }}>
              {order.delivery.status === 'pending' && !order.haveInBill ? (
                <Button
                  color="danger"
                  onClick={() =>
                    onUpdate({
                      delivery: {
                        ...order.delivery,
                        status: 'canceled',
                      },
                    })
                  }
                >
                  Hủy đơn hàng
                </Button>
              ) : null}
              {!order.haveInBill && order.delivery.status === 'pending' ? (
                <Button color="primary" onClick={() => onBill()}>
                  Lên hóa đơn
                </Button>
              ) : null}
              {order.haveInBill && order.delivery.status === 'pending' ? (
                <Button
                  color="success"
                  onClick={() =>
                    onUpdate({
                      delivery: {
                        ...order.delivery,
                        status: 'success',
                      },
                    })
                  }
                >
                  Hoàn thành đơn hàng
                </Button>
              ) : null}
            </div>
          )}
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(DetailsPages);
