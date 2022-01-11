import React from "react";
import { Accordion, Card } from "react-bootstrap";
import WheelComponent from "react-wheel-of-prizes";

function LuckyWheel() {
  const segments = [
    "Voucher 10%",
    "Voucher 20%",
    "Voucher 30%",
    "Voucher 40%",
    "Voucher 50%",
    "Giảm trực tiếp 500K",
    "Freeship",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <Card className="single-my-account mb-20">
      <Card.Header className="panel-heading">
        <Accordion.Toggle variant="link" eventKey="2">
          <h3 className="panel-title">
            <span>5 .</span> Lucky Wheel{" "}
          </h3>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body>
          <div className="myaccount-info-wrapper">
            <div className="account-info-wrapper">
              <h4>Lucky Wheel Draw</h4>
            </div>
            <div className="lucky-draw">
              <WheelComponent
                segments={segments}
                segColors={segColors}
                onFinished={(winner) => onFinished(winner)}
                primaryColor="black"
                contrastColor="white"
                buttonText="Spin"
                isOnlyOnce={false}
                size={290}
                upDuration={100}
                downDuration={1000}
                fontFamily="Arial"
              />
            </div>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default LuckyWheel;
