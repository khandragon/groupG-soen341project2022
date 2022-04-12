import React, { useEffect, useState } from "react";
import ProfileStyle from "../components/ProfileStyle";
import { Button, Modal } from "react-bootstrap";
import { createNewProduct, updateProductByIsbn } from "../api/Products-Api";

//This is the page the user is taken to when trying to edit or create a product.
function CreateEditProduct(props) {
  const [title, setTitle] = useState("");
  const [sellerName, setSellerName] = useState(props.creator);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [sale, setSale] = useState(0);
  //var today = new Date();
  // var updatedAt =
  //   today.getMonth() + "-" + today.getDate() + "-" + today.getFullYear();

  useEffect(() => {
    setTitle(props.itemInfo.title);
    setSellerName(props.creator);
    setDescription(props.itemInfo.description);
    setCategory(props.itemInfo.category);
    setImgUrl(props.itemInfo.imgUrl);
    setPrice(props.itemInfo.Price);
    setShippingCost(props.itemInfo.ShippingCost);
    setSale(props.itemInfo.Sale ? props.itemInfo.Sale : 0);
  }, [props]);

  //These functions add or edit the product in the database respectively.
  function CreateItem() {
    console.log(props.creator);
    const createdData = {
      title: title,
      sellerName: sellerName,
      description: description,
      imgUrl: imgUrl,
      category: category,
      Price: price,
      ShippingCost: shippingCost,
      Sale: sale,
    };
    const username = localStorage.getItem("LoggedIn");

    createNewProduct(createdData, username).then(() => {
      props.handleClose();
      window.location.reload();
    });
  }
  function EditItem() {
    const editedData = {
      title: title,
      sellerName: sellerName,
      description: description,
      imgUrl: imgUrl,
      category: category,
      Price: price,
      ShippingCost: shippingCost,
      Sale: sale,
      isbn: props.itemInfo.isbn,
    };

    updateProductByIsbn(props.itemInfo.isbn, editedData).then(() => {
      props.handleClose();
      window.location.reload();
    });
  }
  //page type is a variable obtained based on how they arrive to the page, it determines how it functions since the two are so similar.
  return (
    <>
      {props.pageType === "create" ? (
        <Modal
          dialogClassName="my-modal"
          show={props.show}
          onHide={() => props.handleClose()}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ textAlign: "center" }}>
              Create Product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProfileStyle
              val={"Title"}
              key={"Title"}
              inp={
                <input
                  className={"row4"}
                  type="text"
                  size="20"
                  data-testid={"TitleIn"}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              }
            />

            <ProfileStyle
              val={"Category"}
              key={"Category"}
              inp={
                <input
                  className={"row4"}
                  type="text"
                  size="20"
                  data-testid={"CategoryIn"}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              }
            />
            <ProfileStyle
              val={"Description"}
              key={"Description"}
              inp={
                <input
                  className={"row4"}
                  type="text"
                  size="20"
                  data-testid={"DescriptionIn"}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              }
            />
            <ProfileStyle
              val={"Price"}
              key={"Price"}
              inp={
                <input
                  className={"row4"}
                  type="number"
                  size="20"
                  data-testid={"PriceIn"}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              }
            />
            <ProfileStyle
              val={"Image URL"}
              key={"Image URL"}
              inp={
                <input
                  className={"row4"}
                  type="text"
                  size="20"
                  data-testid={"ImgUrlIn"}
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                />
              }
            />
            <ProfileStyle
              val={"Shipping Cost"}
              key={"Shipping Cost"}
              inp={
                <input
                  className={"row4"}
                  type="number"
                  size="20"
                  data-testid={"ShippingIn"}
                  value={shippingCost}
                  onChange={(e) => setShippingCost(e.target.value)}
                />
              }
            />
            <ProfileStyle
              val={"Sale"}
              key={"Sale"}
              inp={
                <input
                  className={"row4"}
                  type="number"
                  size="20"
                  data-testid={"SaleIn"}
                  value={sale}
                  onChange={(e) => setSale(e.target.value)}
                />
              }
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => CreateItem()}>
              Create Item
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal
          dialogClassName="my-modal"
          show={props.show}
          onHide={() => props.handleClose()}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ textAlign: "center" }}>
              Edit Product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProfileStyle
              val={"Title"}
              key={"Title"}
              inp={
                <input
                  className={"row4"}
                  type="text"
                  size="20"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              }
            />
            <ProfileStyle
              val={"Seller Name"}
              key={"Seller Name"}
              inp={
                <input
                  className={"row4"}
                  type="text"
                  size="20"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                />
              }
            />
            <ProfileStyle
              val={"Category"}
              key={"Category"}
              inp={
                <input
                  className={"row4"}
                  type="text"
                  size="20"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              }
            />
            <ProfileStyle
              val={"Description"}
              key={"Description"}
              inp={
                <input
                  className={"row4"}
                  type="text"
                  size="20"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              }
            />
            <ProfileStyle
              val={"Price"}
              key={"Price"}
              inp={
                <input
                  className={"row4"}
                  type="number"
                  size="20"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              }
            />
            <ProfileStyle
              val={"Image URL"}
              key={"Image URL"}
              inp={
                <input
                  className={"row4"}
                  type="text"
                  size="20"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                />
              }
            />
            <ProfileStyle
              val={"Shipping Cost"}
              key={"Shipping Cost"}
              inp={
                <input
                  className={"row4"}
                  type="number"
                  size="20"
                  value={shippingCost}
                  onChange={(e) => setShippingCost(e.target.value)}
                />
              }
            />
            <ProfileStyle
              val={"Sale"}
              key={"Sale"}
              inp={
                <input
                  className={"row4"}
                  type="number"
                  size="20"
                  value={sale}
                  onChange={(e) => setSale(e.target.value)}
                />
              }
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button
              data-testid={"SaveChanges"}
              variant="primary"
              onClick={() => EditItem()}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default CreateEditProduct;
