import React, {Component} from 'react';
import {Button, Container, Form, Nav, Navbar, FormControl} from "react-bootstrap";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

import logo from '../img/logo192.png';
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Contacts from "../pages/Contacts";
import About from "../pages/About";

class Header extends Component {
   render() {
      return (
         <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
               <Container>
                  <Navbar.Brand href="/">
                     <img
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="logo"
                     />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                     </Nav>
                     <Form inline>
                        <FormControl
                           type="text"
                           placeholder="search"
                           className="mr-sm-2"
                        />
                        <Button variant="outline-info">Search</Button>
                     </Form>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
            <Router>
               <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/contacts" component={Contacts}/>
                  <Route exact path="/blog" component={Blog}/>
               </Switch>
            </Router>
         </>
      );
   }
}

export default Header;