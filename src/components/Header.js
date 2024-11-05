import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

function Header() {
  return (
    <Navbar expand="lg" className="mb-4" style={{ backgroundColor: '#F2613F' }}>
      <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', color: '#ffffff', fontSize: '28px', marginRight: '20px' }}>
        قطرة
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" style={{ color: '#ffffff', margin: '0 15px' }}>الرئيسية</Nav.Link>
          <Nav.Link as={Link} to="/about" style={{ color: '#ffffff', margin: '0 15px' }}>حول</Nav.Link>
          <Nav.Link as={Link} to="/products" style={{ color: '#ffffff', margin: '0 15px' }}>المنتجات</Nav.Link>
          <Nav.Link as={Link} to="/contact" style={{ color: '#ffffff', margin: '0 15px' }}>اتصل بنا</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
