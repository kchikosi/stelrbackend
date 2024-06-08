import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
export default function Home() {
    return (
    <>
    <Container>
        <Row>
            <Col>
                <Card>
                  <Card.Header>Global Lending and Payments Simplified</Card.Header>
                  <Card.Body>
                    <Card.Text>
                        Connecting budding entrepreneurs with potential investors seamlessly. Discover, connect and fuel innovation with ease, all in one platform.
                    </Card.Text>
                     <Button variant="info">Seeking companies</Button>{' '}
                     <Button variant="info">Seeking investors</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                  <Card.Body>
                  <Image src="src/assets/artwork/lending.jpg" fluid/>
                  </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>


    </>


    );
}