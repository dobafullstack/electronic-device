import React, { useState } from "react";
import "../../assets/css/checkout.css";
import UnLogged from "./UnLogged";

export default function Logged({
    selectedAddress,
    setSelectedAddress,
    values,
    handleChange,
    setFieldValue,
    data,
    touched,
    errors
}) {
    const [addNewAddress, setAddNewAddress] = useState(false);

    const onSelectDelivery = (delivery) => {
        setSelectedAddress(delivery._id);
        setFieldValue("name", delivery.name);
        setFieldValue("phone", delivery.phone);
        setFieldValue("city", delivery.address.city);
        setFieldValue("district", delivery.address.district);
        setFieldValue("street", delivery.address.street);
        setFieldValue("userId", data?.result._id);
    };

    if (addNewAddress)
        return (
            <UnLogged
                values={values}
                handleChange={handleChange}
                addNewAddress={addNewAddress}
                setAddNewAddress={setAddNewAddress}
                touched={touched}
                errors={errors}
            />
        );

    return (
        <div className='col-lg-7'>
            <div className='delivery-address-wrapper'>
                <div
                    className='delivery-address-header d-flex align-items-center'
                    style={{ gap: 10, fontSize: 20 }}>
                    <i className='fas fa-map-marker-alt'></i>
                    <p style={{ fontSize: 20 }} className='m-0'>
                        Địa chỉ giao hàng
                    </p>
                </div>
                {data?.result.delivery.map((item) => (
                    <div
                        className='delivery-address-item w-100 mt-4 p-2 d-flex align-items-center'
                        onClick={() => onSelectDelivery(item)}
                        style={{
                            borderStyle: "dashed",
                            borderWidth: 1,
                            minHeight: 150,
                            position: "relative",
                            cursor: "pointer",
                        }}>
                        <div>
                            <div
                                className='d-flex justify-content-start align-items-center'
                                style={{ gap: 10 }}>
                                <i className='fal fa-user'></i>
                                <p className='m-0'>Họ và Tên:</p>
                                <p className='m-0'>{item.name}</p>
                            </div>
                            <div
                                className='d-flex justify-content-start align-items-center'
                                style={{ gap: 10 }}>
                                <i className='fal fa-phone'></i>
                                <p className='m-0'>Số điện thoại:</p>
                                <p className='m-0'>{item.phone}</p>
                            </div>
                            <div
                                className='d-flex justify-content-start align-items-center'
                                style={{ gap: 10 }}>
                                <i className='far fa-city'></i>
                                <p className='m-0'>Tỉnh / thành:</p>
                                <p className='m-0'>{item.address.city}</p>
                            </div>
                            <div
                                className='d-flex justify-content-start align-items-center'
                                style={{ gap: 10 }}>
                                <i className='far fa-building'></i>
                                <p className='m-0'>Quận / huyện:</p>
                                <p className='m-0'>{item.address.district}</p>
                            </div>
                            <div
                                className='d-flex justify-content-start align-items-center'
                                style={{ gap: 10 }}>
                                <i className='fal fa-address-card'></i>
                                <p className='m-0'>Địa chỉ:</p>
                                <p className='m-0'>{item.address.street}</p>
                            </div>
                        </div>
                        {selectedAddress === item._id && (
                            <div
                                className='text-success'
                                style={{
                                    position: "absolute",
                                    top: -15,
                                    right: -15,
                                    fontSize: 30,
                                    backgroundColor: "white",
                                }}>
                                <i className='fas fa-check-circle'></i>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className='additional-info-wrap mt-3'>
                <div className='additional-info'>
                    <label>Order notes</label>
                    <textarea
                        placeholder='Notes about your order, e.g. special notes for delivery. '
                        name='description'
                        defaultValue={""}
                        onChange={handleChange}
                        value={values.description}
                        style={{ backgroundColor: "white" }}
                    />
                </div>
            </div>
            <div
                className='w-100'
                style={{
                    borderWidth: 1,
                    borderStyle: "dashed",
                    height: 50,
                    cursor: "pointer",
                }}
                onClick={() => setAddNewAddress(true)}
                className='mt-3 d-flex justify-content-center align-items-center'>
                <p>+ Add new address</p>
            </div>
        </div>
    );
}
