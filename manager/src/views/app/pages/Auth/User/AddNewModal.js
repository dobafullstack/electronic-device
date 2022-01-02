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
import authApi from 'api/authApi'

const AddNewModal = ({ modalOpen, toggleModal }) => {
  const [roles, setRoles] = useState([]);

  const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    role_id: '',
  };

  const validate = yup.object().shape({
    name: yup.string().required('Name are required'),
    username: yup.string().required('Username are required'),
    email: yup.string().required('Email are required'),
    phone: yup
      .number()
      .typeError('Invalid Phone number')
      .required('Phone are required'),
    password: yup.string().required('Password are required'),
    role_id: yup.string().required('Role are required'),
  });

  const onSubmit = async (values) => {
    try {
      const { result, error } = await authApi.createUser({
        ...values,
      });

      if (error === null) {
        NotificationManager.success(
          result,
          'Create User',
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
          'Create User',
          3000,
          null,
          null,
          ''
        );
      }
    }
  };

  useEffect(() => {
    roleApi.getAllRoles().then((res) => setRoles(res.result));
  }, []);

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
                <Label>Username</Label>
                <Input
                  placeholder="Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && touched.username ? (
                  <p className="text-danger">{errors.username}</p>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <p className="text-danger">{errors.email}</p>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>Phone</Label>
                <Input
                  placeholder="Phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                {errors.phone && touched.phone ? (
                  <p className="text-danger">{errors.phone}</p>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password ? (
                  <p className="text-danger">{errors.password}</p>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>Role</Label>
                <Input
                  type="select"
                  name="role_id"
                  value={values.role_id}
                  onChange={handleChange}
                >
                  {roles.map(role => <option value={role._id} key={role._id}>{role.name}</option>)}
                </Input>
                {errors.role_id && touched.role_id ? (
                  <p className="text-danger">{errors.role_id}</p>
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
