import categoryApi from 'api/categoryApi';
import IntlMessages from 'helpers/IntlMessages';
import React, { useEffect, useState } from 'react';
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

const AddNewProductModal = ({ modalOpen, toggleModal }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedChild, setSelectedChild] = useState('');

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { result } = await categoryApi.getAllCategories();

        setCategories(result);
        setSelectedCategory(result[0]._id);
        setSelectedChild(result[0].childCate[0]._id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, []);

  const onSubmit = async () => {
    return null;
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
        <FormGroup>
          <Label>Product name</Label>
          <Input type="text" placeholder="Product Name" />
        </FormGroup>
        <FormGroup>
          <Label>Price</Label>
          <Input type="number" />
        </FormGroup>
        <FormGroup>
          <Label>Category</Label>
          <Input
            type="select"
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedChild(
                categories.find((x) => x._id === e.target.value).childCate[0]
                  ._id
              );
            }}
          >
            {categories.map((category) => (
              <option value={category._id} key={category._id}>
                {category.name}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Category Detail {selectedChild}</Label>
          <Input
            type="select"
            onChange={(e) => setSelectedChild(e.target.value)}
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
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={toggleModal}>
          <IntlMessages id="pages.cancel" />
        </Button>
        <Button color="primary" onClick={() => onSubmit()}>
          <IntlMessages id="pages.submit" />
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

export default AddNewProductModal;
