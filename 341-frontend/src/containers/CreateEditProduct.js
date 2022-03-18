import React, { useState } from "react";
import ProfileStyle from "../components/ProfileStyle";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function CreateEditProduct(props) {
  const [_id, set_id] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [sale, setSale] = useState(null);
  var today = new Date();
  var updatedAt =
    today.getMonth() + "-" + today.getDate() + "-" + today.getFullYear();

  var pageType = "create";
  const navigate = useNavigate();

  function CreateItem() {
    console.log(_id);
    console.log(sellerName);
    console.log(description);
    console.log(category);
    console.log(imgUrl);
    console.log(price);
    console.log(shippingCost);
    console.log(sale);
    console.log(updatedAt);
    navigate("/Home");
  }
  function EditItem() {
    console.log(_id);
    console.log(sellerName);
    console.log(description);
    console.log(category);
    console.log(imgUrl);
    console.log(price);
    console.log(shippingCost);
    console.log(sale);
    console.log(updatedAt);
    navigate("/Home");
  }

  return (
    <div>
      {pageType === "create" ? (
        <h1 style={{ textAlign: "center" }}>Create Product</h1>
      ) : (
        <h1 style={{ textAlign: "center" }}>Edit Product</h1>
      )}
      <ProfileStyle
        val={"Seller Name"}
        key={"Seller Name"}
        inp={
          <input
            className={"row4"}
            type="text"
            size="40"
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
            size="40"
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
            size="40"
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
            size="40"
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
            size="40"
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
            size="40"
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
            size="40"
            value={sale}
            onChange={(e) => setSale(e.target.value)}
          />
        }
      />
      <br></br>
      <div style={{ textAlign: "center" }}>
        {pageType === "create" ? (
          <Button onClick={CreateItem}>Create New Item</Button>
        ) : (
          <Button onClick={EditItem}>Edit Item</Button>
        )}
      </div>
    </div>
  );
}

export default CreateEditProduct;
