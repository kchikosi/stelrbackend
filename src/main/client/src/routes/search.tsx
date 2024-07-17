import TopNav from './top-nav/top-nav.tsx'
import BottomNav from './bottom-nav/bottom-nav.tsx'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormEvent, MouseEvent, useState } from 'react';


export default function Search() {

    let [param, setParam] =useState<string>();

    function handleClick(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        alert("You clicked " + event.type );
        //throw new Error('Function not implemented.');
    }

    function handleChange(event: FormEvent<HTMLElement>): void {
        alert("You entered "+event.target.value);
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
                            <Nav>
                                <Nav.Link>Search results</Nav.Link>
                            </Nav>
                        </Row>
                    </Col>
                    <Col xs={6}><Outlet/></Col>
                </Row>
            </Container>
            <BottomNav />
        </>
    )
}