import React from 'react'
import Navigation from './Navigation';
import { Carousel, Button, Card, CardGroup} from 'react-bootstrap';
import img1 from './img-1.jpeg';
import img2 from './img-2.jpeg';
import img3 from './img-3.png';
import img4 from './img-4.jpeg';
import img5 from './img-5.jpeg';
import img6 from './img-6.jpg';
import img7 from './img-7.jpeg';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="top-section">
                            <Navigation />
                            
                            <Carousel fade style={{ maxHeight: '600px' }}>
                <Carousel.Item>
                    <img
                    className="w-100"
                    src={img4}
                    alt="First slide"
                    fluid
                    />
                    <Carousel.Caption>
                    <h3><Button variant="outline-light" size="lg">Order Now</Button>{' '}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className=" w-100"
                    src={img1}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3><Button variant="outline-light" size="lg">Make a Reservation</Button>{' '}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3><Button variant="outline-light" size="lg">Order Now</Button>{' '}</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <div className="intro">
                <h2>Welcome to Asian N Cajun</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien. Euismod lacinia at quis risus sed vulputate odio ut.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien. Euismod lacinia at quis risus sed vulputate odio ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien. Euismod lacinia at quis risus sed vulputate odio ut.</p>
            </div>
            <div>
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Menu</Card.Title>
                        <Card.Text>
                        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien. Euismod lacinia at quis risus sed vulputate odio ut.
                        </Card.Text>
                        <Button variant="primary">View Full Menu</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
            </div>
            <div>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={img7} />
                        <Card.Body>
                        <Card.Title>Soup</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                        <Card.Title>Dessert</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                        <Card.Title>Pizza</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
            
            
        </div>
    )
}

export default Home