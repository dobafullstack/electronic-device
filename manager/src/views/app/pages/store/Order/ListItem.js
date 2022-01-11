import ListPageHeading from 'containers/pages/ListPageHeading';
import { getTotalPage } from 'helpers/Utils';
import useMousetrap from 'hooks/use-mousetrap';
import React, { useCallback, useEffect, useState } from 'react';
import ListPageListing from './ListPageListing';

const getIndex = (value, arr, prop) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][prop] === value) {
      return i;
    }
  }
  return -1;
};

const orderOptions = [
  { column: 'title', label: 'Product Name' },
  { column: 'category', label: 'Category' },
  { column: 'status', label: 'Status' },
];
const pageSizes = [4, 8, 12, 20];

const ListItem = ({
  match,
  fetchApi,
  AddNewModal,
  deleteItem,
  EditModal,
  notEdit,
  title,
  noCreate,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayMode, setDisplayMode] = useState('list');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(8);
  const [selectedOrderOption, setSelectedOrderOption] = useState({
    column: 'title',
    label: 'Product Name',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([]);
  const [lastChecked, setLastChecked] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const fetchData = useCallback(async () => {
    fetchApi()
      .then((res) => {
        return res;
      })
      .then((data) => {
        setTotalPage(getTotalPage(data, selectedPageSize));
        setItems(
          data
            .reverse()
            .slice(
              (currentPage - 1) * selectedPageSize,
              selectedPageSize * currentPage
            )
            .filter((x) =>
              x.userId
                ? x.userId.name.toLowerCase().includes(search)
                : x.delivery.name.toLowerCase().includes(search)
            )
        );
        setSelectedItems([]);
        setTotalItemCount(data.length);
        setIsLoaded(true);
      });
  }, [search, currentPage, selectedPageSize]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize, selectedOrderOption]);

  useEffect(() => {
    fetchData();
  }, [selectedPageSize, currentPage, selectedOrderOption, search, fetchData]);

  const onReload = () => {
    fetchData();
  };

  const onCheckItem = (event, id) => {
    if (
      event.target.tagName === 'A' ||
      (event.target.parentElement && event.target.parentElement.tagName === 'A')
    ) {
      return true;
    }
    if (lastChecked === null) {
      setLastChecked(id);
    }

    let selectedList = [...selectedItems];
    if (selectedList.includes(id)) {
      selectedList = selectedList.filter((x) => x !== id);
    } else {
      selectedList.push(id);
    }
    setSelectedItems(selectedList);

    if (event.shiftKey) {
      let newItems = [...items];
      const start = getIndex(id, newItems, 'id');
      const end = getIndex(lastChecked, newItems, 'id');
      newItems = newItems.slice(Math.min(start, end), Math.max(start, end) + 1);
      selectedItems.push(
        ...newItems.map((item) => {
          return item.id;
        })
      );
      selectedList = Array.from(new Set(selectedItems));
      setSelectedItems(selectedList);
    }
    document.activeElement.blur();
    return false;
  };

  const handleChangeSelectAll = (isToggle) => {
    if (selectedItems.length >= items.length) {
      if (isToggle) {
        setSelectedItems([]);
      }
    } else {
      setSelectedItems(items.map((x) => x.id));
    }
    document.activeElement.blur();
    return false;
  };

  const onContextMenuClick = (e, data) => {
    if (selectedItems.length === 1) {
      if (data.action === 'edit') {
        setIsOpenModal(!isOpenModal);
      }
      if (data.action === 'delete') {
        deleteItem(selectedItems[0]);
        setItems(items.filter((x) => x._id !== selectedItems[0]));
      }
    }
  };

  const onContextMenu = (e, data) => {
    const clickedProductId = data.data;
    if (!selectedItems.includes(clickedProductId)) {
      setSelectedItems([clickedProductId]);
    }

    return true;
  };

  useMousetrap(['ctrl+a', 'command+a'], () => {
    handleChangeSelectAll(false);
  });

  useMousetrap(['ctrl+d', 'command+d'], () => {
    setSelectedItems([]);
    return false;
  });

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <>
      <div className="disable-text-selection">
        <ListPageHeading
          heading={title} /* title */
          displayMode={displayMode} /* grid or list or thumb */
          changeDisplayMode={setDisplayMode}
          onReload={onReload}
          handleChangeSelectAll={handleChangeSelectAll}
          noCreate={noCreate}
          changeOrderBy={(column) => {
            setSelectedOrderOption(
              orderOptions.find((x) => x.column === column)
            );
          }} /* sorting */
          changePageSize={setSelectedPageSize}
          selectedPageSize={selectedPageSize}
          totalItemCount={totalItemCount}
          selectedOrderOption={selectedOrderOption}
          match={match}
          startIndex={startIndex}
          endIndex={endIndex}
          selectedItemsLength={selectedItems ? selectedItems.length : 0}
          itemsLength={items ? items.length : 0}
          onSearchKey={(e) => {
            if (e.key === 'Enter') {
              setSearch(e.target.value.toLowerCase());
            }
          }}
          orderOptions={orderOptions}
          pageSizes={pageSizes}
          toggleModal={() => setModalOpen(!modalOpen)}
        />
        <AddNewModal
          modalOpen={modalOpen}
          toggleModal={() => setModalOpen(!modalOpen)}
        />
        <ListPageListing
          items={items}
          displayMode={displayMode}
          selectedItems={selectedItems}
          onCheckItem={onCheckItem}
          currentPage={currentPage}
          totalPage={totalPage}
          onContextMenuClick={onContextMenuClick}
          onContextMenu={onContextMenu}
          onChangePage={setCurrentPage}
          notEdit={notEdit}
        />
        {selectedItems.length > 0 && (
          <EditModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            item={selectedItems[0]}
          />
        )}
      </div>
    </>
  );
};

export default ListItem;
