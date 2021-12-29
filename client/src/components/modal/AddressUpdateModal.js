import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap/";

function AddressUpdateModal({ show, handleClose, cities }) {
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Update Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="myaccount-info-wrapper">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="billing-info">
                <label>Address</label>
                <input type="text" name="address" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="billing-select mb-20">
                <label>Tỉnh / thành</label>
                <select onChange={handleCityChange} name="city">
                  {cities.map((city) => (
                    <option value={city.name} key={city.key}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="billing-select mb-20">
                <label>Quận / huyện</label>
                <select onChange={handleDistrictChange} name="district">
                  {city !== "" &&
                    cities.map((city) => {
                      if (city.name === city) {
                        return city.district.map((dis, index) => (
                          <option
                            key={dis.key}
                            value={dis.name}
                            selected={index === 0}
                          >
                            {dis.name}
                          </option>
                        ));
                      }
                    })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddressUpdateModal;
