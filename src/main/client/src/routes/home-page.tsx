import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import TopNav from './top-nav/top-nav';
import BottomNav from './bottom-nav/bottom-nav';
export default function Home() {
    return (
    <>
    <TopNav/>
    <Container>
        <Row>
            <Col>
                <Card className="text-center border-0" style={{ height: '30rem' }}>
                  <Card.Header className="border-0">Global Lending and Payments Simplified</Card.Header>
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
                <Card className="border-0">
                  <Card.Body>
                  <Image src="src/assets/artwork/lending.jpg" fluid/>
                  </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className="text-center border-0">
                  <Card.Header  className="border-0">Bridging gaps</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.{' '}
                      </p>
                      <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className="text-center border-0">
                  <Card.Header  className="border-0">More to come</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.{' '}
                      </p>
                      <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className="text-center border-0">
                    <Card.Body>
                    <Button variant="primary">Global Payment Processing</Button>{' '}
                    <Button variant="primary">Personal Services</Button>{' '}
                    <Button variant="primary">Subscription Services</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    <BottomNav/>
    </>
    );
}