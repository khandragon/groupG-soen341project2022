import React, { useEffect, useState } from "react";
import { getOrders } from "../api/Orders-Api";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { getMultipleProductsByIsbn } from "../api/Products-Api";

//This page shows the order history, it receivs the info from the database and ppresents it to the user.
//User must be logged in to access this page
function OrderHistory(props) {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([
    {
      _id: "",
      arrivalDate: "",
      orderedDate: "",
      payed: 0,
      productISBN: "",
      username: "",
    },
  ]);
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
    const loggedIn = localStorage.getItem("LoggedIn");

    if (loggedIn) {
      getOrders(loggedIn).then((res) => {
        setOrders(res);
        const isbnList = res.map((item) => item.productISBN);
        getMultipleProductsByIsbn(isbnList).then((res) => {
          setProducts(res);
        });
      });
    }
  }, []);

  const tableFields = ["Title", "Isbn", "Price", "Ordered Date", "Arival Date"];

  return (
    <>
      <h1 data-testid="OrderHistoryTitle" className="personal">
        Order History
      </h1>
      {orders[0] ? (
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
              item && products ? (
                <tr
                  key={item.title}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("../Products/" + item.isbn)}
                >
                  <td>{index}</td>
                  <td>{item.title}</td>
                  <td>{item.isbn}</td>
                  <td>{orders[index].payed}</td>
                  <td>{orders[index].orderedDate}</td>
                  <td>{orders[index].arrivalDate}</td>
                </tr>
              ) : (
                ""
              )
            )}
          </tbody>
        </Table>
      ) : (
        <div style={{ textAlign: "center", marginTop: "5%" }}>
          <h3>Sorry no orders found</h3>
        </div>
      )}
    </>
  );
}

export default OrderHistory;
