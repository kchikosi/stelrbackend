import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AuthProvider, useAuth } from '../auth';
import { useState } from 'react';
import { Stack } from 'react-bootstrap';

export default function TopNav() {
  const auth = useAuth();
  const [isLoggedIn] = useState(auth.authInfo.token.length > 0);
  console.log("top-nav() isLoggedIn => " + isLoggedIn);
  return (
    <>
      <AuthProvider>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/home">
              <img
                src="/src/assets/artwork/stelrLogoWhiteYellowAccent.svg"
                width="100"
                height="50"
                className="d-inline-block align-top"
                alt="STELR logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/personal">Personal</Nav.Link>
                <Nav.Link href="/business">Business</Nav.Link>
                <Nav.Link href="/enterprise">Enterprise</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
                  <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                  <NavDropdown.Item href="/search">Search</NavDropdown.Item>
                  <NavDropdown.Item href="/newcontact">New Contact</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <ButtonGroup aria-label="Login buttons">
              <Stack direction="horizontal" gap={1} >
                <Button variant="secondary" href="/signup" hidden={isLoggedIn}>Sign up</Button>{' '}
                <Button href="/login" hidden={isLoggedIn}>Login</Button>{' '}
                <Button variant="primary" href="/logout" hidden={!isLoggedIn}>Log Out</Button>{' '}
              </Stack>
            </ButtonGroup>
          </Container>
        </Navbar>
      </AuthProvider>
    </>
  );
}