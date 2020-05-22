import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";

class ContactForm extends Component {
   render() {
      return (
         <Container className="mt-5 contact-form">
            <h1 className="mb-4">Contact us</h1>
            <Form>
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Email"/>
                  <Form.Text>
                     We'll newer share your email with anyone else.
                  </Form.Text>
               </Form.Group>
               <Form.Group controlId="formBasicPassword">
                  <Form.Label>Your Question</Form.Label>
                  <Form.Control as="textarea" rows="3"/>
               </Form.Group>
               <Form.Group controlId="formBasicCheckBox">
                  <Form.Label>Your Question</Form.Label>
                  <Form.Check type="checkbox" label="Check me out"/>
               </Form.Group>
               <Button variant="primary" type="submit">Submit</Button>
            </Form>
         </Container>
      );
   }
}

export default ContactForm;