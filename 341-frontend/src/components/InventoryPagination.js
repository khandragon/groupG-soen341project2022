import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import "../styles/components/InvPagination.css";

/*
Function InventoryPagination, implemented only in Inventory.js; displays a pagination component at the bottom of the page
that can go through the products array through different indexes depending on which pagination item was clicked.
@param properties
*/
function InventoryPagination(props) {
  const [activePage, setActivePage] = useState(0);

  function pageClicked(item) {
    setActivePage(item - 1);
    var sliceIdx = (item - 1) * 8;
    var sliceIdx2 = sliceIdx + 8;
    props.setDisplay(props.inventory.slice(sliceIdx, sliceIdx2));
  }

  var paginationItems = [props.size];

  function pagination() {
    for (let i = 0; i < props.size; i++) {
      var stringId = "pagination" + (i + 1);
      paginationItems[i] = (
        <Pagination.Item
          key={stringId}
          id={stringId}
          active={i === activePage ? true : false}
          onClick={() => pageClicked(i + 1)}
        >
          {i + 1}
        </Pagination.Item>
      );
    }

    return (
      <Pagination size="lg">
        {paginationItems.map((value) => {
          return value;
        })}
      </Pagination>
    );
  }
  let pages = pagination();
  return pages;
}

export default InventoryPagination;
