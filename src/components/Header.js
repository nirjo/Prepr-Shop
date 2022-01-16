import React from 'react';
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <a> Shopping Cart</a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
