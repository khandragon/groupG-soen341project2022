import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { BsTrashFill, BsWrench } from "react-icons/bs";
import { getBusinessProducts } from "../api/BusinessProducts-Api";
import { getMultipleProductsByIsbn } from "../api/Products-Api";
import CreateEditProduct from "./CreateEditProduct";
import { useNavigate } from "react-router-dom";

function BuisnessProducts(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState(false);
  const [product, setProduct] = useState({
    _id: "",
    title: "",
    sellerName: "",
    description: "",
    category: "",
    imgUrl: "",
    Price: 0,
    ShippingCost: "",
    Sale: 0,
    isbn: "",
    updatedAt: "",
  });

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [products, setProducts] = useState([
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

  useEffect(() => {
    getBuisnessData();
  }, []);

  function getBuisnessData() {
    const loggedIn = localStorage.getItem("LoggedIn");

    getBusinessProducts(loggedIn).then((res) => {
      const isbnList = res.map((item) => item.productISBN);
      getMultipleProductsByIsbn(isbnList).then((res) => {
        setProducts(res);
      });
    });
  }

  function createProduct() {
    setModalType("create");
    handleShow();
  }
  function editProduct(index) {
    setModalType("edit");
    setProduct(products[index]);
    handleShow();
  }
  function deleteProduct(index) {
    console.log(products[index]);
  }

  const tableFields = ["Product Name", "ID", "Category", "Price", "Options"];

  return (
    <>
      <h1 className="personal">Products</h1>
      <Button onClick={() => createProduct()}>Create Product</Button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            {Array.from(tableFields).map((_, index) => (
              <th key={index}>{_}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) =>
            item ? (
              <tr key={item.title}>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("../Products/" + item.isbn)}
                >
                  {index}
                </td>
                <td
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("../Products/" + item.isbn)}
                >
                  {item.title}
                </td>
                <td
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("../Products/" + item.isbn)}
                >
                  {item.isbn}
                </td>
                <td
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("../Products/" + item.isbn)}
                >
                  {item.category}
                </td>
                <td
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("../Products/" + item.isbn)}
                >
                  {item.Price}
                </td>
                <td key={index}>
                  <ButtonGroup>
                    <Button variant="light" onClick={() => editProduct(index)}>
                      <BsWrench color="black"></BsWrench>
                    </Button>
                    <Button
                      variant="light"
                      onClick={() => deleteProduct(index)}
                    >
                      <BsTrashFill color="black"></BsTrashFill>
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </Table>
      <CreateEditProduct
        itemInfo={product}
        pageType={modalType}
        show={show}
        handleClose={() => handleClose()}
      />
    </>
  );
}

export default BuisnessProducts;
