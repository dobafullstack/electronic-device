import productApi from 'api/productApi';
import ListItem from 'layout/ListPageLayout/ListItem';
import React from 'react';
import AddNewProductModal from './AddNewProductModal';
import EditProductModal from './EditProductModal';

export default function ListProduct({ match }) {
  const fetchApi = () => productApi.getAllProducts().then((res) => res.result);

  const deleteItem = () => null;

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
