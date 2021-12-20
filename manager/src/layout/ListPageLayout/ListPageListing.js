import React from 'react';
import { Row } from 'reactstrap';
import ContextMenuContainer from 'containers/pages/ContextMenuContainer';
import { useLocation } from 'react-router-dom';
import Pagination from './Pagination';
import DataListView from './DataListView';
import ImageListView from './ImageListView';
import ThumbListView from './ThumbListView';

function collect(props) {
  return { data: props.data };
}

const ListPageListing = ({
  items,
  displayMode,
  selectedItems,
  onCheckItem,
  currentPage,
  totalPage,
  onContextMenuClick,
  onContextMenu,
  onChangePage,
}) => {
  const location = useLocation();

  return (
    <Row>
      {items.map((product) => {
        if (location.pathname.includes('product')) {
          if (displayMode === 'imagelist') {
            return (
              <ImageListView
                key={product._id}
                product={product}
                isSelect={selectedItems.includes(product._id)}
                collect={collect}
                onCheckItem={onCheckItem}
                location={location}
              />
            );
          }
          if (displayMode === 'thumblist') {
            return (
              <ThumbListView
                key={product._id}
                product={product}
                isSelect={selectedItems.includes(product._id)}
                collect={collect}
                onCheckItem={onCheckItem}
                location={location}
              />
            );
          }
        }
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
      />
    </Row>
  );
};

export default React.memo(ListPageListing);
