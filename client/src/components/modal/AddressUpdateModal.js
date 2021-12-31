import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap/";
import axiosClient from "../../api/axiosClient";
import { useToasts } from "react-toast-notifications";

function AddressUpdateModal({
    show,
    handleClose,
    cities,
    user,
    id,
    setUser,
    token,
}) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [street, setStreet] = useState("");

    const { addToast } = useToasts();
    const handleCityChange = (e) => {
        setCity(e.target.value);
    };
    const handleDistrictChange = (e) => {
        setDistrict(e.target.value);
    };
    const handleOnChange = async (e) => {
        e.preventDefault();

        if (id !== "") {
            const delivery = user.delivery.map((item) => {
                if (item._id === id) {
                    return {
                        name,
                        phone,
                        address: {
                            street,
                            city,
                            district,
                        },
                    };
                } else {
                    return item;
                }
            });

            setUser({
                ...user,
                delivery,
            });

            return await axiosClient
                .put(
                    "/auth/update",
                    {
                        delivery,
                    },
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    }
                )
                .then((res) => {
                    addToast("Cập nhật thành công", {
                        appearance: "success",
                        autoDismiss: true,
                        autoDismissTimeout: 3000,
                    });
                    handleClose();
                })
                .catch((err) => console.log(err));
        }
    };
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Update Address</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='myaccount-info-wrapper'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <div className='billing-info'>
                                <label>Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='billing-info'>
                                <label>Phone</label>
                                <input
                                    type='text'
                                    name='phone'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className='billing-info'>
                                <label>Street</label>
                                <input
                                    type='text'
                                    name='street'
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12'>
                            <div className='billing-select mb-20'>
                                <label>Tỉnh / thành phố</label>
                                <select onChange={handleCityChange} name='city'>
                                    {cities.map((city) => (
                                        <option
                                            value={city.name}
                                            key={city.key}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12'>
                            <div className='billing-select mb-20'>
                                <label>Quận / huyện</label>
                                <select
                                    onChange={handleDistrictChange}
                                    name='district'>
                                    {city !== "" &&
                                        cities.map((ci) => {
                                            if (ci.name === city) {
                                                return ci.district.map(
                                                    (dis, index) => (
                                                        <option
                                                            key={dis.key}
                                                            value={dis.name}
                                                            selected={
                                                                index === 0
                                                            }>
                                                            {dis.name}
                                                        </option>
                                                    )
                                                );
                                            }
                                        })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
                <Button variant='primary' onClick={(e) => handleOnChange(e)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddressUpdateModal;
