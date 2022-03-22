import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { BsTrashFill, BsWrench } from "react-icons/bs";
import { getBusinessProducts } from "../api/BusinessProducts-Api";
import { getMultipleProductsByIsbn } from "../api/Products-Api";
import CreateEditProduct from "./CreateEditProduct";

function BuisnessProducts(props) {
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
    console.log("hi");
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
      console.log(isbnList);
      getMultipleProductsByIsbn(isbnList).then((res) => {
        setProducts(res);
        console.log(res);
      });
    });
  }

  function createProduct() {
    setModalType("create");
    handleShow();
  }
  function editProduct(index) {
    console.log(products[index]);
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
          {products.map((item, index) => (
            <tr key={item.title}>
              <td>{index}</td>
              <td key={index}>{item.title}</td>
              <td key={index}>{item.isbn}</td>
              <td key={index}>{item.category}</td>
              <td key={index}>{item.Price}</td>
              <td key={index}>
                <ButtonGroup>
                  <Button variant="light" onClick={() => editProduct(index)}>
                    <BsWrench color="black"></BsWrench>
                  </Button>
                  <Button variant="light" onClick={() => deleteProduct(index)}>
                    <BsTrashFill color="black"></BsTrashFill>
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
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
