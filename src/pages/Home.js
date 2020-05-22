import React, {Component} from 'react';
import CarouselBox from "../components/CarouselBox";
import {Button, Card, CardDeck, Container} from "react-bootstrap";

class Home extends Component {
   render() {
      return (
         <>
            <CarouselBox/>
            <Container className="mb-5">
               <h2 className="text-center m-5">Our Team</h2>

               <CardDeck>

                  <Card>
                     <Card.Img
                        variant="top"
                        src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="team"
                     />
                     <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum in iusto
                           voluptatem?
                        </Card.Text>
                        <Button variant="primary">About Team</Button>
                     </Card.Body>
                  </Card>

                  <Card>
                     <Card.Img
                        variant="top"
                        src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="team"
                     />
                     <Card.Body>
                        <Card.Title>Work Process</Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum in iusto
                           voluptatem?
                        </Card.Text>
                        <Button variant="primary">About Team</Button>
                     </Card.Body>
                  </Card>

                  <Card>
                     <Card.Img
                        variant="top"
                        src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="team"
                     />
                     <Card.Body>
                        <Card.Title>Planning</Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum in iusto
                           voluptatem?
                        </Card.Text>
                        <Button variant="primary">About Team</Button>
                     </Card.Body>
                  </Card>

               </CardDeck>
            </Container>
         </>
      );
   }
}

export default Home;