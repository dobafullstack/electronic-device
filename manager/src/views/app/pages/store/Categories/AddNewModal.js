import attributeApi from 'api/attributeApi';
import categoryApi from 'api/categoryApi';
import { NotificationManager } from 'components/common/react-notifications';
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

const AddNewModal = ({ modalOpen, toggleModal }) => {
  const [attributes, setAttributes] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [selectedAttribute, setSelectedAttribute] = useState([]);

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

  const onSubmit = async () => {
    try {
      const { result, error } = await categoryApi.createCategory({
        name: categoryName,
        attributes: selectedAttribute,
      });

      if (error === null) {
        NotificationManager.success(
          result,
          'Create category',
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
          'Create category',
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
              onChange={(e) => onCheckChange(e, att._id)}
            />{' '}
            <Label check>{att.name}</Label>
          </FormGroup>
        ))}
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

export default AddNewModal;
