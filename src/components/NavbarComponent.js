import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  return (
      <Navbar variant="dark" bg="dark" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <strong>靴ファンタジ</strong>
            <br />SHOES.store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"></Nav.Link>
            </Nav>
            <p className="text-white mr-2">
            <br /> 
              <strong>Telp dan Order Ke</strong>
              <br /> <h3 className="mr-5">(024) 8762459</h3>
            </p>
            <Nav style={{marginLeft:"20px"}}>
              <a href="/TabelOrder">
              <Button
              variant="outline-light"
              style={{ padding: "15px", borderRadius: "50px" }}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <u> Cart Orderan</u>
            </Button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavbarComponent;