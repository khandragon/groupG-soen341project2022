import React, { useContext, useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { BsTrashFill, BsWrench } from "react-icons/bs";
import { getBusinessProducts } from "../api/BusinessProducts-Api";
import { getAllProducts, getMultipleProductsByIsbn } from "../api/Products-Api";
import CreateEditProduct from "./CreateEditProduct";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteProduct } from "../api/Products-Api";
import { LoginContext } from "./LoginContext";

function BuisnessProducts(props) {
  const navigate = useNavigate();
  const productType = useLocation().state.type;
  const creator = useLocation().state.creator;
  const [loggedIn] = useContext(LoginContext);

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
    if (productType !== "admin") {
      getBusinessProducts(loggedIn).then((res) => {
        const isbnList = res.map((item) => item.productISBN);
        getMultipleProductsByIsbn(isbnList).then((res) => {
          setProducts(res);
        });
      });
    } else {
      getAllProducts().then((res) => {
        setProducts(res);
      });
    }
  }, [productType, loggedIn]);

  function createProduct() {
    setModalType("create");
    handleShow();
  }
  function editProduct(index) {
    setModalType("edit");
    setProduct(products[index]);
    handleShow();
  }
  function deleteProductFromList(index) {
    deleteProduct(products[index].isbn);
  }

  const tableFields = ["Product Name", "ID", "Category", "Price", "Options"];

  if (productType === "admin") {
    tableFields.splice(1, 0, "Seller");
  }

  return (
    <>
      {productType !== "admin" ? (
        <h1 className="personal">Products</h1>
      ) : (
        <h1 className="personal">Admin: Products</h1>
      )}
      {productType !== "admin" ? (
        <Button data-testid="CreateProductBtn" onClick={() => createProduct()}>
          Create Product
        </Button>
      ) : (
        ""
      )}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            {Array.from(tableFields).map((_, index) => (
              <th key={index + "th"}>{_}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) =>
            item ? (
              <tr key={item.title}>
                <td
                  data-testid={"ProductList-" + index}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("../Products/" + item.isbn)}
                >
                  {index}
                </td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("../Products/" + item.isbn)}
                >
                  {item.title}
                </td>
                {productType === "admin" ? (
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("../Products/" + item.isbn)}
                  >
                    {item.sellerName}
                  </td>
                ) : null}
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("../Products/" + item.isbn)}
                >
                  {item.isbn}
                </td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("../Products/" + item.isbn)}
                >
                  {item.category}
                </td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("../Products/" + item.isbn)}
                >
                  {item.Price}
                </td>
                <td>
                  <ButtonGroup>
                    <Button variant="light" onClick={() => editProduct(index)}>
                      <BsWrench color="black"></BsWrench>
                    </Button>
                    <Button
                      variant="light"
                      onClick={() => deleteProductFromList(index)}
                    >
                      <BsTrashFill color="black"></BsTrashFill>
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
      <CreateEditProduct
        itemInfo={product}
        pageType={modalType}
        show={show}
        creator={creator}
        origin={() =>
          navigate("/BuisnessProducts", {
            state: { type: productType, creator: creator },
          })
        }
        handleClose={() => handleClose()}
      />
    </>
  );
}

export default BuisnessProducts;
