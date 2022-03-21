import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { getAccountInformation } from "../api/Accounts-Api";
import { getProductByIsbn } from "../api/Products-Api";
import AddCartButton from "../components/Buttons/AddCartButton";
import "../styles/components/CenterImage.css";

function Product(props) {
  const urlIsbn = window.location.href.split("/").pop();
  const [product, setProduct] = useState([
    {
      _id: "",
      title: "",
      sellerName: "",
      description: "",
      category: "",
      imgUrl: "",
      Price: 0,
      ShippingCost: "",
      Sale: null,
      isbn: "",
      updatedAt: "",
    },
  ]);

  const [account, setAccount] = useState({
    username: "",
    email: "",
    business: false,
    full_name: "",
    business_name: null,
    address: "",
    phone_number: "",
    cartID: 0,
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem("LoggedIn");

    if (loggedIn) {
      getAccountInformation(loggedIn).then((res) => {
        setAccount(res);
      });
    }
    getProductByIsbn(urlIsbn).then((res) => {
      setProduct(res);
      console.log(res);
    });
  }, []);

  // var Test = {
  //   title: "1984",
  //   id: 1,
  //   sellerName: "George Orwell",
  //   description:
  //     "<span id='freeTextContainer15112337115304620204'>Among the seminal texts of the 20th century, <i>Nineteen Eighty-Four</i> is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's pre</span>",
  //   category: "Science Fiction",
  //   imgUrl:
  //     "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg",
  // };

  return (
    <div>
      <h1 className="title" style={{ textAlign: "center" }}>
        <ul>{product.title}</ul>
      </h1>
      <h2 style={{ textAlign: "center" }}>By: {product.sellerName}</h2>
      <h2 style={{ textAlign: "center" }}>Category: {product.category}</h2>
      <Image src={product.imgUrl} className="productphoto"></Image>

      <hr></hr>
      <h1
        style={{ textAlign: "left", marginTop: "20px", marginLeft: "100px " }}
      >
        <b>Price: $ {product.Price}</b>
      </h1>
      <h style={{ textAlign: "left", margin: "100px" }}>
        <b>Product Description:</b>
      </h>
      <div class="col-md-8 text-left">
        <p className="description" style={{ margin: "10px 100px 20px" }}>
          {product.description}
        </p>
      </div>
      <AddCartButton isbn={product.isbn} cartID={account.cartID} />
    </div>
  );
}

export default Product;
