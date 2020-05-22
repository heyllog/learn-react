import React, {Component} from 'react';
import ContactForm from "../components/ContactForm";
import {Col, Container, Row} from "react-bootstrap";

class Contacts extends Component {
   render() {
      return (
         <>
            <Container className="mt-5 contact-container">
               <Row>
                  <Col sm={7}>
                     <h1 className="mb-4">Location</h1>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eligendi minima molestiae
                        mollitia nisi odio porro possimus quam reprehenderit voluptates. Aliquid assumenda at distinctio
                        dolorum earum illo incidunt laudantium maiores natus nisi, quam reiciendis repudiandae sunt
                        ullam vero vitae voluptate. Alias eius et facilis illo impedit magnam reiciendis voluptatum?
                        Aliquid amet atque culpa distinctio, id iure laudantium magni quis unde voluptate. Accusantium
                        asperiores commodi debitis expedita nostrum quas quos, rerum sapiente unde voluptate! Impedit
                        labore perferendis quia sapiente sit! Amet commodi dignissimos dolorem doloribus eius est ex
                        fugiat inventore itaque minima nam, nemo nobis nulla, porro quam rerum velit voluptatem?
                     </p>
                  </Col>
                  <Col sm={5}>
                     <img
                        src="https://www.pvsm.ru/images/kak-ustroeny-yandeks-karty-lekciya-vladimira-zaiceva-v-yandekse-5.jpg"
                        alt="map"
                        className="map"
                     />
                  </Col>
               </Row>
            </Container>
            <ContactForm/>
         </>
      );
   }
}

export default Contacts;