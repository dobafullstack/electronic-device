import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import VND from "../../helpers/VND";
import axiosClient from "../../api/axiosClient";

function MyOrder({ orders, token }) {
  const handleOrderCancelation = async (item) => {
    await axiosClient.put(
      `/order/${item._id}`,
      {
        delivery: {
          name: item.delivery.name,
          address: item.delivery.address,
          phone: item.delivery.phone,
          status: "canceled",
        },
      },
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
    window.location.reload();
  };

  const getOrderStatus = (status) => {
    switch (status) {
      case "pending":
        return "Đang chờ xử lý";
      case "delivering":
        return "Đang giao hàng";
      case "success":
        return "Đã giao hàng";
      case "canceled":
        return "Đã hủy";
      default:
        return "";
    }
  };
  return (
    <Card className="single-my-account mb-20">
      <Card.Header className="panel-heading">
        <Accordion.Toggle variant="link" eventKey="3">
          <h3 className="panel-title">
            <span>4 .</span> My Orders{" "}
          </h3>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="3">
        <Card.Body>
          <div className="myaccount-info-wrapper">
            <div className="account-info-wrapper">
              <h4>List of orders</h4>
            </div>
            {orders &&
              orders.map((item) => (
                <div className="entries-wrapper-order" key={item._id}>
                  <div className="row">
                    <div className="col-lg-9 col-md-9 d-flex">
                      <div className="entries-info">
                        <p>- Thông tin Đơn hàng</p>
                        <p>{`Trạng thái: ${getOrderStatus(
                          item.delivery.status
                        )}`}</p>
                        <p>{`${item.delivery.name} (${item.delivery.phone})`}</p>
                        <p>{item.delivery.address}</p>
                        <p></p>
                        <p>- Sản phẩm:</p>
                        {item.productItems.map((product) => (
                          <Link
                            to={`/product/${product.productItem._id}`}
                            key={product.productItem._id}
                          >
                            <p>{`${product.productItem.name} - (SL: ${product.quantity})`}</p>
                          </Link>
                        ))}
                        <p>- Thông tin thanh toán:</p>
                        <p>{`Tổng cộng: ${VND(item.total)}`}</p>
                        <p>{`Hình thức thanh toán: ${item.payment.method}`}</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 d-flex align-items-center justify-content-center">
                      <div className="entries-edit-delete">
                        <button
                          className={
                            item.delivery.status === "pending"
                              ? "edit"
                              : "edit-disabled"
                          }
                          disabled={
                            item.delivery.status === "pending" ? false : true
                          }
                          onClick={() => handleOrderCancelation(item)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <div className="billing-back-btn">
              <div className="billing-btn">
                <button type="submit">Continue</button>
              </div>
            </div>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default MyOrder;
