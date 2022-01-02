import sliderApi from 'api/sliderApi';
import { NotificationManager } from 'components/common/react-notifications';
import ListItem from 'layout/ListPageLayout/ListItem';
import React from 'react';
import AddNewProductModal from './AddNewProductModal';
import EditProductModal from './EditProductModal';

export default function ListSlider({ match }) {
  const fetchApi = () => sliderApi.getAllSlider().then((res) => res.result);

  const deleteItem = async (sliderId) => {
    try {
      const { result } = await sliderApi.deleteSlider(sliderId);

      NotificationManager.success(
        result,
        'Delete Slider',
        3000,
        null,
        null,
        ''
      );
    } catch (error) {
      if (error.response.data) {
        NotificationManager.warning(
          error.response.data.result,
          'Delete Slider',
          3000,
          null,
          null,
          ''
        );
      } else {
        NotificationManager.warning(
          error.message,
          'Delete Slider',
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
      title="List Slider"
    />
  );
}
