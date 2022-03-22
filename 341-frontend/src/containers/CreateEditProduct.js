import React, { useEffect, useState } from "react";
import ProfileStyle from "../components/ProfileStyle";
import { Button, Modal } from "react-bootstrap";

//This is the page the user is taken to when trying to edit or create a product.
function CreateEditProduct(props) {
  console.log(props.itemInfo);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [sale, setSale] = useState(0);
  var today = new Date();
  var updatedAt =
    today.getMonth() + "-" + today.getDate() + "-" + today.getFullYear();

  useEffect(() => {
    setTitle(props.itemInfo.title);
    setDescription(props.itemInfo.description);
    setCategory(props.itemInfo.category);
    setImgUrl(props.itemInfo.imgUrl);
    setPrice(props.itemInfo.price);
    setShippingCost(props.itemInfo.shippingCost);
    setSale(props.itemInfo.sale);
  }, [props.itemInfo]);
  //These functions add or edit the product in the database respectively.
  function CreateItem() {
    console.log(title);
    console.log(description);
    console.log(category);
    console.log(imgUrl);
    console.log(price);
    console.log(shippingCost);
    console.log(sale);
    console.log(updatedAt);
    props.handleClose();
  }
  function EditItem() {
    console.log(title);
    console.log(description);
    console.log(category);
    console.log(imgUrl);
    console.log(price);
    console.log(shippingCost);
    console.log(sale);
    console.log(updatedAt);
    props.handleClose();
  }
  //page type is a variable obtained based on how they arrive to the page, it determines how it functions since the two are so similar.
  return (
    <>
      {props.pageType === "create" ? (
        <Modal show={props.show} onHide={() => props.handleClose()}>
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
            <Button variant="primary" onClick={() => CreateItem()}>
              Create Item
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal show={props.show} onHide={() => props.handleClose()}>
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
            <Button variant="primary" onClick={() => EditItem()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default CreateEditProduct;
