import productApi from 'api/productApi';
import { NotificationManager } from 'components/common/react-notifications';
import ListItem from 'layout/ListPageLayout/ListItem';
import React from 'react';
import AddNewProductModal from './AddNewProductModal';
import EditProductModal from './EditProductModal';

export default function ListProduct({ match }) {
  const fetchApi = () => productApi.getAllProducts().then((res) => res.result);

  const deleteItem = async (productId) => {
    try {
      const { result } = await productApi.deleteProduct(productId);

      NotificationManager.success(
        result,
        'Delete Product',
        3000,
        null,
        null,
        ''
      );
    } catch (error) {
      if (error.response.data) {
        NotificationManager.warning(
          error.response.data.result,
          'Delete Product',
          3000,
          null,
          null,
          ''
        );
      } else {
        NotificationManager.warning(
          error.message,
          'Delete Product',
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
      AddNewModal={AddNewProductModal}
      EditModal={EditProductModal}
    />
  );
}
