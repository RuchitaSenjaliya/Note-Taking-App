import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Notes</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
