import React from 'react'
import Navigation from './Navigation';
import Modal from 'react-bootstrap/Modal'
import Footer from './Footer';
import ReservationButton from './components/ReservationButton';
import OrderButton from './components/OrderButton';
import { Carousel, Button, Card, CardGroup,} from 'react-bootstrap';
import img1 from './img/img-1.jpeg';
import img2 from './img/img-2.jpeg';
import img3 from './img/img-3.jpeg';
import img4 from './img/img-4.jpeg';
import img5 from './img/img-5.jpeg';
import img6 from './img/img-6.jpeg';
import img7 from './img/img-7.jpeg';
import './Home.css';
import Map from './components/Map';
import 'leaflet/dist/leaflet.css';
import ReservationForm from './components/ReservationForm';



function Home() {
    return (
        <div className="home">
     
            <div className="top-section">
                
                {/* <img className="" src={img1} /> */}
                {/* <h3><OrderButton/>{' '}<Button variant="outline-light" size="lg" ><ReservationButton/></Button></h3> */}

            
            </div>   
                            
            {/* <main className="container">
        <h1 className="text-uppercase text-center my-4">Asian N Cajun 2 app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Add task
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>  */}
        <Navigation />
            <Carousel fade style={{ minHeight: "100%" }}>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3><OrderButton/>{' '}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                    className="w-100 d-block"
                    src={img2}

                    alt="Second slide"
                    />

                    <Carousel.Caption> 
                    <h3><Button variant="outline-light" size="lg">Make a Reservation</Button>{' '}</h3>
                     <h3 variant="outline-light" size="lg"><ReservationButton/> {' '} </h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3><Button variant="outline-light" size="lg" href="/menu">Menu</Button>{' '}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            
            <div className="intro">
                <h1>Welcome to Asian N Cajun 2</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    
                </p>
                <p>
                    At consectetur lorem donec massa sapien. Euismod lacinia at quis 
                    risus sed vulputate odio ut. At consectetur lorem donec massa sapien. <br />Euismod lacinia at quis 
                    risus sed vulputate odio ut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <p>
                    At consectetur lorem donec massa sapien. Euismod lacinia at quis 
                    risus sed vulputate odio ut.
                </p>
                <p>
                    At consectetur lorem donec massa sapien. Euismod lacinia at quis 
                    risus sed vulputate odio ut.
                    At consectetur lorem donec massa sapien. <br />Euismod lacinia at quis 
                    risus sed vulputate odio ut.
                </p>
            </div>
            <div className="menu_options">
                <CardGroup>
                    <Card style={{ width: '10rem', backgroundColor: '#dfc984' }}>
                        <Card.Body>
                            <Card.Title>MENU</Card.Title>
                            <Card.Link href="/menu">View Menus &#8594; </Card.Link>
                   
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem' , backgroundColor: '#dfc984' }}>
                        <Card.Body>
                            <Card.Title>Book A Table</Card.Title>
                            <Card.Link> <ReservationButton/>&#8594; </Card.Link> 
                            
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>


             <div>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={img5} className="cover-img"/>
            
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img6} className="cover-img"/>
              
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img7} className="cover-img"/>
            
                    </Card>
                </CardGroup>
            </div> 
            <div className="map">

                  <Map />

            </div>
            
            
            <Footer/>         
        </div>
    
    )
}

export default Home