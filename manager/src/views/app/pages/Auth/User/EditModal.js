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
  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState();

  const initialValues = {
    name: user?.name || '',
    username: user?.username || '',
    email: user?.email || '',
    phone: user?.phone || '',
    role_id: user?.role_id._id || '',
    active: user?.active || true,
  };

  const validate = yup.object().shape({
    name: yup.string().required('Name are required'),
    username: yup.string().required('Username are required'),
    email: yup.string().required('Email are required'),
    phone: yup
      .number()
      .typeError('Invalid Phone number')
      .required('Phone are required'),
    role_id: yup.string().required('Role are required'),
  });

  const onSubmit = async (values) => {
    try {
      const { result, error } = await authApi.updateUser(item, {
        ...values,
        active: values.active === 'true'
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
      toggle();
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

  useEffect(() => {
    authApi.getUserById(item).then((res) => setUser(res.result));
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
                <Label>Role</Label>
                <Input
                  type="select"
                  name="role_id"
                  value={values.role_id}
                  onChange={handleChange}
                >
                  {user &&
                    roles.map((role) => (
                      <option value={role._id} key={role._id}>
                        {role.name}
                      </option>
                    ))}
                </Input>
                {errors.role_id && touched.role_id ? (
                  <p className="text-danger">{errors.role_id}</p>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>Active</Label>
                <Input
                  type="select"
                  name="active"
                  value={values.active}
                  onChange={handleChange}
                >
                  <option value="true" selected>
                    active
                  </option>
                  <option value="false">unactive</option>
                </Input>
                {errors.active && touched.active ? (
                  <p className="text-danger">{errors.active}</p>
                ) : null}
              </FormGroup>
              <div className="d-flex justify-content-end" style={{gap: 10}}>
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
