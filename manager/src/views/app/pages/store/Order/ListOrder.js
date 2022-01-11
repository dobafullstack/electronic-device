import attributeApi from 'api/attributeApi';
import orderApi from 'api/orderApi';
import { NotificationManager } from 'components/common/react-notifications';
import React from 'react';
import AddNewModal from './AddNewModal';
import ModelEditCategory from './EditModal';
import ListItem from './ListItem';

const ListOrder = ({ match }) => {
  const fetchApi = () => orderApi.getAllOrders().then((res) => res.result);

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
      noCreate
      title="List Orders"
    />
  );
};

export default ListOrder;
