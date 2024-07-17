import TopNav from './top-nav/top-nav.tsx'
import BottomNav from './bottom-nav/bottom-nav.tsx'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
export default function Search() {
    function handleClick(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            <TopNav />
            <Container style={{ margin: 0, height: 800 }}>
                <Row>
                    <Col xs={3} style={{ backgroundColor: "#f7f7f7", height: 800 }}>
                        <Form id='search-form'>
                            <Row>
                                <InputGroup className='mb-3' id='query'>
                                    <Form.Group>
                                        <Form.Control type='search' placeholder='Search' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant='secondary' type='submit' onClick={handleClick}>New</Button>
                                    </Form.Group>
                                </InputGroup>
                            </Row>
                            <Row></Row>
                        </Form>
                    </Col>
                    <Col xs={12}><Outlet /></Col>
                </Row>
            </Container>
            <BottomNav />
        </>
    )
}