import React from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AddCartButton from "../components/Buttons/AddCartButton";

function Product(props) {
  var Test = {
    title: "1984",
    id: 1,
    sellerName: "George Orwell",
    description:
      "<span id='freeTextContainer15112337115304620204'>Among the seminal texts of the 20th century, <i>Nineteen Eighty-Four</i> is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's pre</span>",
    category: "Science Fiction",
    imgUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg",
  };

  return (
    <div>
      <h1 className="title">
        <ul>{Test.title}</ul>
      </h1>
      <h2>By: {Test.sellerName}</h2>
      <h2>Category: {Test.category}</h2>
      <Image src={Test.imgUrl} className="product photo"></Image>
      <h>Product Description:</h>
      <p className="description">{Test.description}</p>

      <AddCartButton link={Test.id} />
    </div>
  );
}

export default Product;
