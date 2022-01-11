import React from "react";
import { Accordion, Card, Table } from "react-bootstrap";

function MyReward({ user }) {
    return (
        <Card className='single-my-account mb-20'>
            <Card.Header className='panel-heading'>
                <Accordion.Toggle variant='link' eventKey='5'>
                    <h3 className='panel-title'>
                        <span>6 .</span> My Reward{" "}
                    </h3>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='5'>
                <Card.Body>
                    <div className='myaccount-info-wrapper'>
                        <div className='account-info-wrapper'>
                            <h4>Lucky Wheel Draw</h4>
                        </div>
                        <div className='lucky-draw'>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Tên khuyến mãi</th>
                                        <th>Giá trị</th>
                                        <th>Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.rewards.map((item) => (
                                        <tr>
                                            <td>
                                                {item.title.split(" ")[0]}{" "}
                                                {item.title.split(" ")[1].split("%")[0]}%
                                            </td>
                                            <td>{item.discount_value}</td>
                                            <td>{item.code}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default MyReward;
