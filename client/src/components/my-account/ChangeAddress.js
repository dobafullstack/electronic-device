import React from "react";
import { Accordion, Card } from "react-bootstrap";

export default function ChangeAddress({ isFetching, user, handleShow }) {
  return (
    <Card className="single-my-account mb-20">
      <Card.Header className="panel-heading">
        <Accordion.Toggle variant="link" eventKey="2">
          <h3 className="panel-title">
            <span>3 .</span> Modify your address book entries{" "}
          </h3>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body>
          <div className="myaccount-info-wrapper">
            <div className="account-info-wrapper">
              <h4>Address Book Entries</h4>
            </div>
            {!isFetching &&
              user?.delivery.map((item) => (
                <div className="entries-wrapper" key={item._id}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                      <div className="entries-info text-center">
                        <p>{item.name}</p>
                        <p>{item.phone} </p>
                        <p>{item.address.street}</p>
                        <p>{item.address.district}</p>
                        <p>{item.address.city}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                      <div className="entries-edit-delete text-center">
                        <button
                          className="edit"
                          onClick={() => handleShow(item._id)}
                        >
                          Edit
                        </button>
                        <button>Delete</button>
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
