import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Home() {
    return (
    <>
    <Container>
      <Row>
        <Col>
            <p>
                <b> Global Lending and Payments Simplified </b>
            </p>
        </Col>
      </Row>
        <Row>
          <Col>
            <p>
                Connecting budding entrepreneurs with potential investors seamlessly. Discover, connect and fuel innovation with ease, all in one platform.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
              <Button variant="info">Seeking companies</Button>{' '}
              <Button variant="info">Seeking Investors</Button>{' '}
          </Col>
        </Row>
    </Container>
    </>
    );
}