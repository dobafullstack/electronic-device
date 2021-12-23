import categoryApi from 'api/categoryApi';
import { NotificationManager } from 'components/common/react-notifications';
import ListItem from 'layout/ListPageLayout/ListItem';
import React from 'react';
import { useParams } from 'react-router-dom';
import AddNewModal from './AddNewChildCate';
import ModelEditCategoryDetail from './ModelEditCategoryDetail';

const DetailCategory = ({ match }) => {
  const { categoryId } = useParams();

  const fetchApi = () =>
    categoryApi.getCategory(categoryId).then((res) => res.result.childCate);

  const deleteItem = async (selectedItem) => {
    try {
      const { result, error } = await categoryApi.deleteChildCate(
        categoryId,
        selectedItem
      );

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
      EditModal={ModelEditCategoryDetail}
      deleteItem={deleteItem}
      match={match}
    />
  );
};

export default DetailCategory;
