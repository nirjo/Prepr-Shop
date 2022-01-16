import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" style={{ height: 40 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/"> Prepr-DressShop</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success"></Dropdown.Toggle>
            <Dropdown.Menu style={{ width: 370 }}>
              <span style={{ padding: 10 }}>Cart is empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
