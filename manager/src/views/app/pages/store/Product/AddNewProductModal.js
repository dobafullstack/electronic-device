import categoryApi from 'api/categoryApi';
import productApi from 'api/productApi';
import { NotificationManager } from 'components/common/react-notifications';
import { Formik, FieldArray } from 'formik';
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
  ModalHeader,
} from 'reactstrap';
import { storage } from '../../../../../helpers/Firebase';

const AddNewProductModal = ({ modalOpen, toggleModal }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [objTypes, setObjectTypes] = useState({});
  const imageKeys = [123, 463, 641, 256];

  const attributes =
    selectedCategory !== ''
      ? categories
          .find((x) => x._id === selectedCategory)
          .attributes.map((item) => item.unit)
      : [];

  const initialValues = {
    name: '',
    category_detail_id: '',
    price: 0,
    count: 0,
    images: ['', '', '', ''],
    ...objTypes,
  };

  const getLinkUpload = (image, setFieldValue, fieldName) => {
    console.log(fieldName);

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      () => {},
      (err) => console.log(err),
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setFieldValue(fieldName, url);
          });
      }
    );
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { result } = await categoryApi.getAllCategories();

        setCategories(result);
        setSelectedCategory(result[0]._id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, []);

  useEffect(() => {
    setObjectTypes(
      attributes.reduce((obj, key) => ({ ...obj, [key]: '' }), {})
    );
  }, [selectedCategory]);

  const onSubmit = (values) => {
    const addProduct = async () => {
      try {
        const { result } = await productApi.createProduct(values);

        NotificationManager.success(
          result,
          'Add Product',
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
            'Add Product',
            3000,
            null,
            null,
            ''
          );
        } else {
          NotificationManager.warning(
            error.message,
            'Add Product',
            3000,
            null,
            null,
            ''
          );
        }
      }
    };

    addProduct();
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
                <Label>Product name</Label>
                <Input
                  type="text"
                  placeholder="Product Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Price</Label>
                <Input
                  type="number"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Quantity</Label>
                <Input
                  type="number"
                  name="count"
                  value={values.count}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Category</Label>
                <Input
                  type="select"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Category Detail</Label>
                <Input
                  type="select"
                  name="category_detail_id"
                  onChange={handleChange}
                >
                  {selectedCategory !== '' &&
                    categories
                      .find((x) => x._id === selectedCategory)
                      .childCate.map((child) => (
                        <option value={child._id} key={child._id}>
                          {child.name}
                        </option>
                      ))}
                </Input>
              </FormGroup>
              {values.category !== '' &&
                categories
                  .find((x) => x._id === selectedCategory)
                  .attributes.map((att) => (
                    <FormGroup key={att._id}>
                      <Label>{att.name}</Label>
                      <Input
                        type="select"
                        name={att.unit}
                        onChange={handleChange}
                      >
                        {att.types.map((item) => (
                          <option value={item.name} key={item._id}>
                            {item.name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  ))}
              <FieldArray name="images">
                {({ form }) =>
                  form.values.images.map((item, index) => (
                    <FormGroup key={imageKeys[index]}>
                      <Label>Ảnh {index + 1}</Label>
                      <Input
                        name={`images[${index}]`}
                        type="file"
                        onChange={(e) => {
                          getLinkUpload(
                            e.target.files[0],
                            setFieldValue,
                            `images[${index}]`
                          );
                        }}
                      />
                    </FormGroup>
                  ))
                }
              </FieldArray>
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
