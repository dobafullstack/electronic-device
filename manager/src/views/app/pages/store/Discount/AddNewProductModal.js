import sliderApi from 'api/sliderApi';
import { NotificationManager } from 'components/common/react-notifications';
import { Formik } from 'formik';
import IntlMessages from 'helpers/IntlMessages';
import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import discountApi from 'api/discountApi';

const AddNewProductModal = ({ modalOpen, toggleModal }) => {
  const initialValues = {
    title: '',
    discount_value: '',
    startDate: new Date(),
    endDate: new Date(),
  };

  const onSubmit = (values) => {
    const expire = values.endDate.getTime() - values.startDate.getTime();

    console.log(expire);

    const addDiscount = async () => {
      try {
        const { result } = await discountApi.createDiscount({
          ...values,
          expire,
        });

        NotificationManager.success(
          result,
          'Add Discount',
          3000,
          null,
          null,
          ''
        );
        toggleModal();
      } catch (error) {
        if (error.response.data) {
          NotificationManager.warning(
            error.response.data.result,
            'Add Discount',
            3000,
            null,
            null,
            ''
          );
        } else {
          NotificationManager.warning(
            error.message,
            'Add Discount',
            3000,
            null,
            null,
            ''
          );
        }
      }
    };

    addDiscount();
  };

  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>
        <IntlMessages id="pages.add-new-modal-title" />
      </ModalHeader>
      <ModalBody>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ values, handleChange, handleSubmit, setFieldValue }) => (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <FormGroup>
                <Label>Title</Label>
                <Input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Discount value</Label>
                <Input
                  type="text"
                  name="discount_value"
                  value={values.discount_value}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Start</Label>
                <DatePicker
                  selected={values.startDate}
                  dateFormat="MMMM d, yyyy"
                  className="form-control"
                  name="startDate"
                  onChange={(date) => setFieldValue('startDate', date)}
                />
              </FormGroup>
              <FormGroup>
                <Label>End</Label>
                <DatePicker
                  selected={values.endDate}
                  dateFormat="MMMM d, yyyy"
                  className="form-control"
                  name="endDate"
                  onChange={(date) => setFieldValue('endDate', date)}
                />
              </FormGroup>

              <div className="d-flex justify-content-end" style={{ gap: 10 }}>
                <Button color="secondary" outline onClick={toggleModal}>
                  <IntlMessages id="pages.cancel" />
                </Button>
                <Button color="primary" type="submit">
                  <IntlMessages id="pages.submit" />
                </Button>{' '}
              </div>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </Modal>
  );
};

export default AddNewProductModal;
