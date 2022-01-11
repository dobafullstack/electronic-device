import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Accordion, Button, Card, Modal } from "react-bootstrap";
import WheelComponent from "react-wheel-of-prizes";
import axiosClient from "../../api/axiosClient";
import { AuthContext } from "../../Context/AuthContext";

function LuckyWheel({user}) {
  const [turns, setTurns] = useState(user.turns);
  const [reward, setReward] = useState('')
  const [code, setCode] = useState('');
  const { isLogin, token } = useContext(AuthContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const segments = [
    "Voucher 10%",
    "Voucher 20%",
    "Voucher 30%",
    "Voucher 40%",
    "Voucher 50%",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
  ];
  const onFinished = (winner) => {
    setReward(winner);
  };

  useEffect(() => {
    if (reward !== ''){
      setTurns(turns - 1)
      const discount_value = parseInt(
          reward.split("Voucher ")[1].split("%")[0]
      );

      console.log(discount_value);

      axiosClient
          .post(
              "/discount/lucky_wheel",
              {
                  discount_value,
                  title: reward,
                  userId: user._id,
              },
              {
                  headers: {
                      authorization: "Bearer " + token,
                  },
              }
          )
          .then((res) => {
              setCode(res.result.code);
              handleShow();
          })
          .catch((err) => {
              console.log(err);
          });


    }
  }, [reward]);

  return (
      <Card className='single-my-account mb-20'>
          <Card.Header className='panel-heading'>
              <Accordion.Toggle variant='link' eventKey='4'>
                  <h3 className='panel-title'>
                      <span>5 .</span> Lucky Wheel{" "}
                  </h3>
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='4'>
              <Card.Body>
                  <div className='myaccount-info-wrapper'>
                      <div className='account-info-wrapper'>
                          <h4>Lucky Wheel Draw</h4>
                          <h6>Your turns: {turns}</h6>
                      </div>
                      <div className='lucky-draw'>
                          {turns >= 1 ? (
                              <WheelComponent
                                  segments={segments}
                                  segColors={segColors}
                                  onFinished={(winner) => onFinished(winner)}
                                  primaryColor='black'
                                  contrastColor='white'
                                  buttonText='Spin'
                                  isOnlyOnce={false}
                                  size={290}
                                  upDuration={100}
                                  downDuration={1000}
                                  fontFamily='Arial'
                              />
                          ) : (
                              <p>Bạn đã hết lượt quay</p>
                          )}
                      </div>
                  </div>
              </Card.Body>
          </Accordion.Collapse>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Congratulation</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  Chúc mừng bạn đã nhận được giải thưởng: {reward} <br />
                  Mã giảm giá của bạn là {code}
              </Modal.Body>
              <Modal.Footer>
                  <Button variant='primary' onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
      </Card>
  );
}

export default LuckyWheel;
