import React from 'react';
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';
// rand img url: https://source.unsplash.com/random/600x400
const EventsPage = () => {
  return (
    <Container className="my-4 h80">
      <h1 className="text-center text-bold">Events</h1>
      <div className="my-4 h-75">
        <Carousel>
          <Carousel.Item>
            <Image
       
              className="d-block w-100"
              src="https://source.unsplash.com/random/600x400"
              alt="First slide"
              height={400}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://source.unsplash.com/random/600x400"
              alt="Second slide"
              height={400}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://source.unsplash.com/random/600x400"
              alt="Third slide"
              height={400}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container>
        <Row className="my-4">
          <Col md={6} sm={12}>
            <Container>
              <Image fluid src="assets/img/cn.png"></Image>
            </Container>
          </Col>
          <Col md={6} sm={12}>
            <Container>
              <h1>Event Title and ..</h1>
              <p className="text-end">10 january 2021</p>
              <div>
                We Started this Campain to help All the people around the world
                whos is suffering form various problems. Our main duty is to
                grather information about those people who are actually in a
                critical state.
              </div>
            </Container>
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={6} sm={12}>
            <Container>
              <h1>Event Title and ..</h1>
              <p className="text-end">10 january 2021</p>
              <div>
                We Started this Campain to help All the people around the world
                whos is suffering form various problems. Our main duty is to
                grather information about those people who are actually in a
                critical state.
              </div>
            </Container>
          </Col>
          <Col md={6} sm={12}>
            <Container>
              <Image fluid src="assets/img/cn.png"></Image>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="text-center">Upcoming Events</h1>

        <Container className="my-4">
          <Card className="bg-dark text-white" style={{ height: '300px' }}>
            <Card.Img
              src="https://source.unsplash.com/random/600x400"
              alt="Card image"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              <Card.Text>
                <Button type="button" className="btn btn-primary">
                  Register Now
                </Button>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Container>
        <Container className="my-4">
          <Card className="bg-dark text-white" style={{ height: '300px' }}>
            <Card.Img
              src="https://source.unsplash.com/random/600x400"
              alt="Card image"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              <Card.Text>
                <Button type="button" className="btn btn-primary">
                  Register Now
                </Button>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Container>
      </Container>
    </Container>
  );
};

export default EventsPage;
