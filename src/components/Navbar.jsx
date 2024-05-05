import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function CollapsibleExample() {
  const selector = useSelector((state) => state.cart);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className=" sticky-top bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">Redux-Tool-Kit</Navbar.Brand>
        <Navbar.Collapse>
          <Link to="/">Products</Link>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              MyBag {selector.length}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
