import productApi from 'api/productApi';
import roleApi from 'api/roleApi';
import { NotificationManager } from 'components/common/react-notifications';
import ListItem from 'layout/ListPageLayout/ListItem';
import React from 'react';
import AddNewModal from './AddNewModal';
import EditModal from './EditModal';

export default function ListProduct({ match }) {
  const fetchApi = () => roleApi.getAllRoles().then((res) => res.result);

  const deleteItem = async (roleId) => {
    try {
      const { result } = await roleApi.updateRole(roleId, {active: false});

      NotificationManager.success(
        result,
        'Delete Role',
        3000,
        null,
        null,
        ''
      );
    } catch (error) {
      if (error.response.data) {
        NotificationManager.warning(
          error.response.data.result,
          'Delete Role',
          3000,
          null,
          null,
          ''
        );
      } else {
        NotificationManager.warning(
          error.message,
          'Delete Role',
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
      match={match}
      deleteItem={deleteItem}
      AddNewModal={AddNewModal}
      EditModal={EditModal}
      title="List Role"
    />
  );
}
