import React from "react";
import { BsSearch } from "react-icons/bs";

/*
Function products search bar, implements a search bar inside the products page for the user to search through
the products page. Uses BsSearch component from the react icons as the magnifying glass icon.
@param properties
*/
function SearchBarProducts(props) {
  return (
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search for products"
        aria-label="Search"
        aria-describedby="search-addon"
        value={props.search}
        data-testid="SearchIn"
        onChange={(e) => props.onType(e.target.value)}
      />
      <span
        className="input-group-text border-0"
        id="search-addon"
        onClick={props.onBtnClick}
        style={{ cursor: "pointer" }}
      >
        <BsSearch></BsSearch>
      </span>
    </div>
  );
}

export default SearchBarProducts;
