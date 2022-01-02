import attributeApi from 'api/attributeApi';
import authApi from 'api/authApi';
import categoryApi from 'api/categoryApi';
import roleApi from 'api/roleApi';
import { NotificationManager } from 'components/common/react-notifications';
import { FieldArray, Formik } from 'formik';
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

export default function ModelEditCategory({
  isOpenModal,
  setIsOpenModal,
  item,
}) {
  const toggle = () => setIsOpenModal(!isOpenModal);
  const [role, setRole] = useState();

  const initialValues = {
    name: role?.name || '',
    active: role?.active  || true
  };

  const validate = yup.object().shape({
    name: yup.string().required('Name are required'),
  });

  const onSubmit = async (values) => {
    try {
      const { result, error } = await roleApi.updateRole(item, {
        ...values,
        active: values.active === 'true',
      });

      if (error === null) {
        NotificationManager.success(
          result,
          'Update Role',
          3000,
          null,
          null,
          ''
        );
      }
      toggle();
    } catch (error) {
      if (error.response.data) {
        NotificationManager.warning(
          error.response.data.error.message,
          'Update Role',
          3000,
          null,
          null,
          ''
        );
      }
    }
  };

  useEffect(() => {
    roleApi.getDetailRole(item).then((res) => setRole(res.result));
  }, [item]);

  return (
    <Modal isOpen={isOpenModal} toggle={toggle}>
      <ModalHeader>Edit User</ModalHeader>
      <ModalBody>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values) => onSubmit(values)}
          enableReinitialize
        >
          {({ values, handleChange, errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
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
                <Label>Active</Label>
                <Input
                  name="active"
                  value={values.active}
                  type="select"
                  onChange={handleChange}
                >
                  <option value="true">active</option>
                  <option value="false">unactive</option>
                </Input>
                {errors.active && touched.active ? (
                  <p className="text-danger">{errors.active}</p>
                ) : null}
              </FormGroup>

              <div className="d-flex justify-content-end" style={{ gap: 10 }}>
                <Button color="primary" type="submit">
                  Save
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </Modal>
  );
}
