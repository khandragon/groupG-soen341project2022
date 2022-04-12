import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { getAccountInformation } from "../api/Accounts-Api";
import { getProductByIsbn } from "../api/Products-Api";
import AddCartButton from "../components/Buttons/AddCartButton";
import { useNavigate } from "react-router-dom";
import "../styles/components/CenterImage.css";
import DeleteCartButton from "../components/Buttons/DeleteCartButton";
import CreateEditProduct from "./CreateEditProduct";

function Product(props) {
  const urlIsbn = window.location.href.split("/").pop();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [creator, setCreator] = useState(false);
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
    admin: false,
    full_name: "",
    business_name: null,
    address: "",
    phone_number: "",
    cartID: 0,
  });

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const loggedIn = localStorage.getItem("LoggedIn");

  useEffect(() => {
    console.log("called?");
    if (loggedIn) {
      getAccountInformation(loggedIn).then((res) => {
        setAccount(res);
      });
    }
    getProductByIsbn(urlIsbn).then((res) => {
      setProduct(res);
      setCreator(res.sellerName === account.full_name);
    });
  }, [urlIsbn, loggedIn, account.full_name]);

  function editProduct() {
    handleShow();
  }

  let productBtn;

  if (loggedIn && account.admin) {
    productBtn = (
      <DeleteCartButton isbn={product.isbn} cartID={account.cartID} />
    );
  } else if (loggedIn) {
    productBtn = <AddCartButton isbn={product.isbn} cartID={account.cartID} />;
  } else {
    productBtn = (
      <Button
        className="sideButton"
        type="button"
        onClick={() => navigate("/Login")}
      >
        <h4>Login</h4>
      </Button>
    );
  }

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
      <h4 style={{ textAlign: "left", margin: "100px" }}>
        <b>Product Description:</b>
      </h4>
      <div className="col-md-8 text-left">
        <p className="description" style={{ margin: "10px 100px 20px" }}>
          {product.description}
        </p>
      </div>
      {productBtn}
      {creator ? (
        <>
          <Button
            className="sideButton"
            color="orange"
            size="lg"
            onClick={() => editProduct()}
          >
            Edit Product
          </Button>
          <CreateEditProduct
            itemInfo={product}
            pageType={"edit"}
            show={show}
            origin={() => navigate("/Products/" + product.isbn)}
            creator={account.full_name}
            handleClose={() => handleClose()}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Product;
