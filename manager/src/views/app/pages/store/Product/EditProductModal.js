import categoryApi from 'api/categoryApi';
import productApi from 'api/productApi';
import { NotificationManager } from 'components/common/react-notifications';
import { FieldArray, Formik } from 'formik';
import { storage } from 'helpers/Firebase';
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

export default function EditProductModal({
  isOpenModal,
  setIsOpenModal,
  item,
}) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [objTypes, setObjectTypes] = useState({});
  const [product, setProduct] = useState();
  const imageKeys = [123, 463, 641, 256];

  const attributes =
    selectedCategory !== ''
      ? categories
          .find((x) => x._id === selectedCategory)
          .attributes.map((att) => att.unit)
      : [];

  const initialValues = {
    name: product && product.name,
    category_detail_id: product && product.category_detail_id,
    price: product && product.price,
    count: product && product.count,
    images: product && product.images,
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
    productApi
      .getDetailProduct(item)
      .then((res) => setProduct(res.result))
      .catch((err) => console.log(err));
  }, [item]);

  useEffect(() => {
    setObjectTypes(
      attributes.reduce((obj, key) => ({ ...obj, [key]: '' }), {})
    );
  }, [selectedCategory]);

  const onSubmit = (values) => {
    const editProduct = async () => {
      try {
        const { result } = await productApi.editProduct(item, values);

        NotificationManager.success(
          result,
          'Edit Product',
          3000,
          null,
          null,
          ''
        );
        setIsOpenModal(false);
      } catch (error) {
        if (error.response.data) {
          NotificationManager.warning(
            error.response.data.result,
            'Edit Product',
            3000,
            null,
            null,
            ''
          );
        } else {
          NotificationManager.warning(
            error.message,
            'Edit Product',
            3000,
            null,
            null,
            ''
          );
        }
      }
    };

    editProduct();
  };

  return (
    <Modal isOpen={isOpenModal} toggle={() => setIsOpenModal(!isOpenModal)}>
      <ModalHeader>Edit Product</ModalHeader>
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
                        {att.types.map((type) => (
                          <option value={type.name} key={type._id}>
                            {type.name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  ))}
              <FieldArray name="images">
                {({ form }) =>
                  form.values.images.map((image, index) => (
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
                <Button
                  color="secondary"
                  outline
                  onClick={() => setIsOpenModal(false)}
                >
                  Cancel
                </Button>
                <Button color="primary" type="submit">
                  Submit
                </Button>{' '}
              </div>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </Modal>
  );
}
