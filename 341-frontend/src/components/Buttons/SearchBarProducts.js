import React from "react";
import {BsSearch} from "react-icons/bs";

function SearchBarProducts(prods) {
  return (
    <div class="input-group rounded">
        <input type = "search" class = "form-control rounded" placeholder = "Search for products" aria-label = "Search" aria-describedby = "search-addon" />
        <span class = "input-group-text border-0" id="search-addon">
          <BsSearch></BsSearch>
        </span>
    </div>
  );
}

export default SearchBarProducts;