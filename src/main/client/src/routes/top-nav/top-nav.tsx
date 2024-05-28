import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function TopNav() {
return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
           <Navbar.Brand href="#home">STELR</Navbar.Brand>
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
                    </NavDropdown>
                </Nav>
           </Navbar.Collapse>
          <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" href="/signup">Sign up</Button>
              <Button href="/login">Login</Button>
          </ButtonGroup>
        </Container>
      </Navbar>
    </>
);
}