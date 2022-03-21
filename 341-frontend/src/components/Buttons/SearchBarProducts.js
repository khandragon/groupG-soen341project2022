import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchBarProducts(prods) {
  return (
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search for products"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0" id="search-addon">
        <BsSearch></BsSearch>
      </span>
    </div>
  );
}

export default SearchBarProducts;
