import React, { useState, useEffect } from 'react';
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
import IntlMessages from 'helpers/IntlMessages';
import { useParams } from 'react-router-dom';
import categoryApi from 'api/categoryApi';
import { NotificationManager } from 'components/common/react-notifications';

export default function ModelEditCategoryDetail({
  isOpenModal,
  setIsOpenModal,
  item,
}) {
  const [categoryName, setCategoryName] = useState('');
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const { result, error } = await categoryApi.getCategory(categoryId);

      if (error === null) {
        const childCate = result.childCate.filter((x) => x._id === item);
        setCategoryName(childCate[0].name);
      }
    };

    fetchCategory().catch((err) => console.log(err));
  }, [item, categoryId]);

  const onEdit = async () => {
    try {
      const { result } = await categoryApi.updateChildCate(categoryId, item, {
        name: categoryName,
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
      <ModalHeader>
        <IntlMessages id="modal.modal-title" />
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
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => onEdit()}>
          Do Something
        </Button>{' '}
        <Button color="secondary" onClick={() => setIsOpenModal(false)}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
