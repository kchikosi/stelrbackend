import Carousel from 'react-bootstrap/Carousel';


export default function AboutCarousel() {
    return (
    <>
        <Carousel>
          <Carousel.Item interval={1000}>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

      <Carousel.Item interval={500}>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>


        </Carousel>
        </>
    );
}