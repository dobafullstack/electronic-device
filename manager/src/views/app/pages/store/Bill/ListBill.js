import attributeApi from 'api/attributeApi';
import billApi from 'api/billApi';
import { NotificationManager } from 'components/common/react-notifications';
import React from 'react';
import AddNewModal from './AddNewModal';
import ModelEditCategory from './EditModal';
import ListItem from './ListItem';

const ListBill = ({ match }) => {
  const fetchApi = () =>
    billApi.getAllBills().then((res) => res.result);

  const deleteItem = async (selectedItem) => {
    try {
      const { result, error } = await attributeApi.deleteAttribute(
        selectedItem
      );

      if (error === null) {
        NotificationManager.success(
          result,
          'Delete attribute',
          3000,
          null,
          null,
          ''
        );
      }
    } catch (error) {
      if (error.response.data) {
        NotificationManager.warning(
          error.response.data.error.message,
          'Delete attribute',
          3000,
          null,
          null,
          ''
        );
      }
    }
  };

  return (
    <ListItem
      fetchApi={fetchApi}
      AddNewModal={AddNewModal}
      EditModal={ModelEditCategory}
      deleteItem={deleteItem}
      match={match}
      title="List Bill"
    />
  );
};

export default ListBill;
