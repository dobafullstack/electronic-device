import ContextMenuContainer from 'containers/pages/ContextMenuContainer';
import Pagination from 'layout/ListPageLayout/Pagination';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row } from 'reactstrap';
import DataListView from './DataListView';

function collect(props) {
  return { data: props.data };
}

const ListPageListing = ({
  items,
  selectedItems,
  onCheckItem,
  currentPage,
  totalPage,
  onContextMenuClick,
  onContextMenu,
  onChangePage,
  notEdit,
}) => {
  const location = useLocation();

  return (
    <Row>
      {items.map((product) => {
        return (
          <DataListView
            key={product._id}
            product={product}
            isSelect={selectedItems.includes(product._id)}
            onCheckItem={onCheckItem}
            collect={collect}
            location={location}
          />
        );
      })}
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onChangePage={(i) => onChangePage(i)}
      />
      <ContextMenuContainer
        onContextMenuClick={onContextMenuClick}
        onContextMenu={onContextMenu}
        notEdit={notEdit}
      />
    </Row>
  );
};

export default React.memo(ListPageListing);
