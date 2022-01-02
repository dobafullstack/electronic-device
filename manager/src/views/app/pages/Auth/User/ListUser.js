import attributeApi from 'api/attributeApi';
import authApi from 'api/authApi';
import orderApi from 'api/orderApi';
import { NotificationManager } from 'components/common/react-notifications';
import React from 'react';
import AddNewModal from './AddNewModal';
import ModelEditCategory from './EditModal';
import ListItem from './ListItem';

const ListUser = ({ match }) => {
  const fetchApi = () => authApi.getAllUsers().then((res) => res.result);

  const deleteItem = async (selectedItem) => {
    try {
      const { result, error } = await authApi.updateUser(selectedItem, {
        active: false,
      });

      if (error === null) {
        NotificationManager.success(
          result,
          'Delete User',
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
          'Delete User',
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
      title="List Users"
    />
  );
};

export default ListUser;
