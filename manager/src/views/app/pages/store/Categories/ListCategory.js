import categoryApi from 'api/categoryApi';
import { NotificationManager } from 'components/common/react-notifications';
import ListItem from 'layout/ListPageLayout/ListItem';
import React from 'react';
import AddNewModal from './AddNewModal';
import ModelEditCategory from './ModelEditCategory';

const ListCategory = ({ match }) => {
  const fetchApi = () =>
    categoryApi.getAllCategories().then((res) => res.result);

  const deleteItem = async (selectedItem) => {
    try {
      const { result, error } = await categoryApi.deleteCategory(selectedItem);

      if (error === null) {
        NotificationManager.success(
          result,
          'Delete category',
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
          'Delte category',
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
    />
  );
};

export default ListCategory;
