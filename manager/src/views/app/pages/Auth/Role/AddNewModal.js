import attributeApi from 'api/attributeApi';
import categoryApi from 'api/categoryApi';
import roleApi from 'api/roleApi';
import { NotificationManager } from 'components/common/react-notifications';
import { FieldArray, Formik } from 'formik';
import IntlMessages from 'helpers/IntlMessages';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import * as yup from 'yup';
import authApi from 'api/authApi';

const AddNewModal = ({ modalOpen, toggleModal }) => {
  const initialValues = {
    name: '',
  };

  const validate = yup.object().shape({
    name: yup.string().required('Name are required'),
  });

  const onSubmit = async (values) => {
    try {
      const { result, error } = await roleApi.createRole({
        ...values,
      });

      if (error === null) {
        NotificationManager.success(
          result,
          'Create Role',
          3000,
          null,
          null,
          ''
        );
      }
      toggleModal();
    } catch (error) {
      if (error.response.data) {
        NotificationManager.warning(
          error.response.data.error.message,
          'Create Role',
          3000,
          null,
          null,
          ''
        );
      }
    }
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
          validationSchema={validate}
          onSubmit={(values) => onSubmit(values)}
        >
          {({ values, handleChange, errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit} id="attribute-form">
              <FormGroup>
                <Label>Name</Label>
                <Input
                  placeholder="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && touched.name ? (
                  <p className="text-danger">{errors.name}</p>
                ) : null}
              </FormGroup>
            </Form>
          )}
        </Formik>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={toggleModal}>
          <IntlMessages id="pages.cancel" />
        </Button>
        <Button color="primary" type="submit" form="attribute-form">
          <IntlMessages id="pages.submit" />
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

export default AddNewModal;
