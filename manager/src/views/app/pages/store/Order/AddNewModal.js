import attributeApi from 'api/attributeApi';
import categoryApi from 'api/categoryApi';
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

const AddNewModal = ({ modalOpen, toggleModal }) => {
  const initialValues = {
    name: '',
    unit: '',
    types: [],
  };

  const validate = yup.object().shape({
    name: yup.string().required('Name are required'),
    unit: yup.string().required('Unit are required'),
  });

  const onSubmit = async (values) => {
    try {
      const { result, error } = await attributeApi.createAttribute({
        ...values,
        types: values.types.map((item) => ({ name: item })),
      });
      if (error === null) {
        NotificationManager.success(
          result,
          'Create attribute',
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
          'Create attribute',
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
              <FormGroup>
                <Label>Unit</Label>
                <Input
                  placeholder="Unit"
                  name="unit"
                  value={values.unit}
                  onChange={handleChange}
                />
                {errors.unit && touched.unit ? (
                  <p className="text-danger">{errors.unit}</p>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>Types</Label>
                <FieldArray name="types">
                  {({ form, insert, remove }) => (
                    <>
                      {form.values.types.map((type, index) => (
                        <div
                          className="d-flex mb-3"
                          key={index}
                          style={{ gap: 10 }}
                        >
                          <Input
                            name={`types[${index}]`}
                            value={form.values.types[index]}
                            onChange={handleChange}
                            placeholder={`Type ${index + 1}`}
                          />
                          <Button
                            color="secondary"
                            outline
                            onClick={() => remove(index)}
                          >
                            -
                          </Button>
                        </div>
                      ))}
                      <br />
                      <Button
                        color="primary"
                        outline
                        onClick={() => insert(form.values.types.length)}
                      >
                        +
                      </Button>
                    </>
                  )}
                </FieldArray>
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
