import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function BottomNav() {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Nav className="me-auto">
                <Nav.Link href="/privacy">Privacy</Nav.Link>
                <Nav.Link href="/security">Security</Nav.Link>
                <Nav.Link href="/legal">Legal</Nav.Link>
                <Nav.Link href="/help">Help</Nav.Link>
                <Nav.Link href="/accessibility">Accessibility</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);
}