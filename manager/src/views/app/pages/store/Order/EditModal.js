import attributeApi from 'api/attributeApi';
import categoryApi from 'api/categoryApi';
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
  const [attribute, setAttribute] = useState();

  const toggle = () => setIsOpenModal(!isOpenModal);

  useEffect(() => {
    attributeApi
      .getDetailAttribute(item)
      .then((res) => setAttribute(res.result))
      .catch((err) => console.log(err));
  }, [item]);

  const initialValues = {
    name: attribute ? attribute.name : '',
    unit: attribute ? attribute.unit : '',
    types: attribute ? attribute.types.map(type => type.name) : [],
  };

  const validate = yup.object().shape({
    name: yup.string().required('Name are required'),
    unit: yup.string().required('Unit are required'),
  });

  const onSubmit = async (values) => {
    try {
      const { result } = await attributeApi.editAttribute(item, {
        ...values,
        types: values.types.map(type => ({name: type}))
      });

      NotificationManager.success(
        result,
        'Update attribute',
        3000,
        null,
        null,
        ''
      );

      setIsOpenModal(false);
    } catch (error) {
      if (error.response.data) {
        NotificationManager.warning(
          error.response.data.error.message,
          'Update attribute',
          3000,
          null,
          null,
          ''
        );
      }
    }
  };

  return (
    <Modal isOpen={isOpenModal} toggle={toggle}>
      <ModalHeader>Edit Attribute</ModalHeader>
      <ModalBody>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values) => onSubmit(values)}
          enableReinitialize
        >
          {({ values, handleChange, errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit} id="attribute-form-edit">
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
        <Button color="primary" type="submit" form="attribute-form-edit">
          Save
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
