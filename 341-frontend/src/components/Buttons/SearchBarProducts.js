import React from "react";
import { BsSearch } from "react-icons/bs";

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
