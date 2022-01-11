import discountApi from 'api/discountApi';
import sliderApi from 'api/sliderApi';
import { NotificationManager } from 'components/common/react-notifications';
import ListItem from 'layout/ListPageLayout/ListItem';
import React from 'react';
import AddNewProductModal from './AddNewProductModal';
import EditProductModal from './EditProductModal';

export default function ListSlider({ match }) {
  const fetchApi = () => discountApi.getAllDiscounts().then((res) => res.result);

  const deleteItem = async (discountId) => {
    try {
      const { result } = await discountApi.deleteDiscount(discountId);

      NotificationManager.success(
        result,
        'Delete Discount',
        3000,
        null,
        null,
        ''
      );
    } catch (error) {
      if (error.response.data) {
        NotificationManager.warning(
          error.response.data.result,
          'Delete Discount',
          3000,
          null,
          null,
          ''
        );
      } else {
        NotificationManager.warning(
          error.message,
          'Delete Discount',
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
      notEdit
      title="List Discount"
    />
  );
}
