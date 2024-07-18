import TopNav from './top-nav/top-nav.tsx'
import BottomNav from './bottom-nav/bottom-nav.tsx'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container, Nav } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormEvent, MouseEvent } from 'react';
import { Outlet } from 'react-router-dom';


export default function Search() {


    function handleChange(event: FormEvent<HTMLElement>): void {
        alert("You entered " + event.target.value);
        //throw new Error('Function not implemented.');
    }


    function handleClick(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        event.stopPropagation();
        alert("You clicked " + event.currentTarget.name);
        //throw new Error('Function not implemented.');
    }

    return (
        <>
            <TopNav />
            <Container style={{ margin: 0, height: 800 }}>
                <Row>
                    <Col xs={3} style={{ backgroundColor: "#f7f7f7", height: 800 }}>
                        <Row>
                            <InputGroup className='mb-3' id='query'>
                                <Form.Group id='search' onChange={handleChange}>
                                    <Form.Control type='search' placeholder='Search' />
                                </Form.Group>
                                <Form.Group id='new'>
                                    <Button name="newcontact" variant='secondary' type='submit' onClick={handleClick}>New</Button>
                                </Form.Group>
                            </InputGroup>
                        </Row>
                        <Row>
                            <nav>
                                <ul style={{ listStyle: 'none' }}>
                                    <li>
                                        <Nav>
                                            <Nav.Link href={`/contacts/1`}>Your name</Nav.Link>
                                        </Nav>
                                    </li>
                                </ul>
                            </nav>
                        </Row>
                    </Col>
                    <Col xs={9}>
                        <Row as={Col} >
                            <Outlet />
                        </Row>
                    </Col>
                </Row>
            </Container>
            <BottomNav />
        </>

    )
}