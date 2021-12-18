import categoryApi from 'api/categoryApi';
import { NotificationManager } from 'components/common/react-notifications';
import IntlMessages from 'helpers/IntlMessages';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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

const AddNewChildCate = ({ modalOpen, toggleModal }) => {
  const [categoryName, setCategoryName] = useState('');
  const { categoryId } = useParams();

  const onSubmit = async () => {
    try {
      const { result, error } = await categoryApi.addChildCate(categoryId, {
        name: categoryName,
      });

      if (error === null) {
        NotificationManager.success(
          result,
          'Add category child',
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
          <Label>Category Child Name</Label>
          <Input
            type="text"
            placeholder="Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
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

export default AddNewChildCate;
