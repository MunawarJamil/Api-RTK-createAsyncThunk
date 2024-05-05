import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleExample from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/CartSlice";
import { getProducts } from "./ProductSlice";

function Product() {
  const { data: apiProducts, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (status === "loading") {
    return (
      <>
        <CollapsibleExample />
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </>
    );
  }

  if (status === "error") {
    return <p>something went wrong while fetching api data </p>;
  }

  const renderProducts = apiProducts.map((product) => (
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
          <Button onClick={() => addToCart(product)} variant="primary">
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <CollapsibleExample />
      <h1 className="font-bold mt-10 mb-10 text-2xl">Products Data from API</h1>
      <div className="row">{renderProducts}</div>
    </>
  );
}

export default Product;
