import React from "react";
import CollapsibleExample from "./Navbar";
import { useSelector, useDispatch } from "react-redux"; // Single import statement
import { remove } from "../redux/CartSlice"; // Correct action for removal
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  const cartItems = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch(remove(product));
  };

  const renderProducts = cartItems.map((product) => (
    <div className="col-md-3 mb-3" key={product.id}>
      <Card style={{ width: "18rem" }} className="h-100">
        <div className="text-center mx-auto">
          <Card.Img
            variant="top"
            style={{ marginTop: "10px", height: "130px", width: "100px" }}
            src={product.image}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>USD {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
          <Button onClick={() => removeFromCart(product.id)} variant="primary">
            Remove from cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <CollapsibleExample />
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h2>Your cart is empty</h2>
        </div>
      ) : (
        <div className="row">{renderProducts}</div>
      )}
    </>
  );
}

export default Cart;
