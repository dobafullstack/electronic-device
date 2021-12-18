import attributeApi from 'api/attributeApi';
import categoryApi from 'api/categoryApi';
import { NotificationManager } from 'components/common/react-notifications';
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

export default function ModelEditCategory({
  isOpenModal,
  setIsOpenModal,
  item,
}) {
  const [categoryName, setCategoryName] = useState('');
  const [attributes, setAttributes] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const { result, error } = await categoryApi.getCategory(item);

      if (error === null) {
        setCategoryName(result.name);
        setSelectedAttribute(result.attributes.map((x) => x._id));
      }
    };

    fetchCategory().catch((err) => console.log(err));
  }, [item]);

  useEffect(() => {
    const fetchAttribute = async () => {
      const { result, error } = await attributeApi.getAllAttributes();

      if (error === null) {
        setAttributes(result);
      }
    };

    fetchAttribute().catch((err) => console.log(err));
  }, []);

  const onCheckChange = (e, attributeId) => {
    const index = selectedAttribute.findIndex((x) => x === attributeId);

    if (index >= 0)
      setSelectedAttribute(selectedAttribute.filter((x) => x !== attributeId));
    else setSelectedAttribute([...selectedAttribute, attributeId]);
  };

  const onSave = async () => {
    try {
      const { result } = await categoryApi.updatedCategory(item, {
        name: categoryName,
        attributes: selectedAttribute,
      });

      NotificationManager.success(
        result,
        'Update category',
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
          'Update category',
          3000,
          null,
          null,
          ''
        );
      }
    }
  };

  return (
    <Modal isOpen={isOpenModal} toggle={() => setIsOpenModal(!isOpenModal)}>
      <ModalHeader>Edit Category</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Category Name</Label>
          <Input
            type="text"
            placeholder="Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </FormGroup>
        {attributes.map((att) => (
          <FormGroup check key={att._id}>
            <Input
              type="checkbox"
              checked={selectedAttribute.includes(att._id)}
              onChange={(e) => onCheckChange(e, att._id)}
            />{' '}
            <Label check>{att.name}</Label>
          </FormGroup>
        ))}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => onSave()}>
          Save
        </Button>{' '}
        <Button color="secondary" onClick={() => setIsOpenModal(false)}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
