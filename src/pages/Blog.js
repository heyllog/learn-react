import React, {Component} from 'react';
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";

import BlogCard from "../components/BlogCard";

class Blog extends Component {
   render() {
      return (
         <Container>
            <Row>
               <Col md="9">
                  <BlogCard
                     imgSrc="https://yt3.ggpht.com/a/AGF-l79KlLKAvKSNNKYC-ydLHLE76iap1Gef8YtxhA=s900-c-k-c0xffffffff-no-rj-mo"
                     title="Blog Post"
                     text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam atque deleniti fugiat
                           ipsum magni soluta veniam? Adipisci at cupiditate, debitis doloremque explicabo laborum
                           minima molestiae nisi non numquam omnis, possimus provident quis recusandae repellendus."
                  />

                  <BlogCard
                     imgSrc="https://yt3.ggpht.com/a/AGF-l79KlLKAvKSNNKYC-ydLHLE76iap1Gef8YtxhA=s900-c-k-c0xffffffff-no-rj-mo"
                     title="Blog Post"
                     text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam atque deleniti fugiat
                           ipsum magni soluta veniam? Adipisci at cupiditate, debitis doloremque explicabo laborum
                           minima molestiae nisi non numquam omnis, possimus provident quis recusandae repellendus."
                  />

                  <BlogCard
                     imgSrc="https://yt3.ggpht.com/a/AGF-l79KlLKAvKSNNKYC-ydLHLE76iap1Gef8YtxhA=s900-c-k-c0xffffffff-no-rj-mo"
                     title="Blog Post"
                     text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam atque deleniti fugiat
                           ipsum magni soluta veniam? Adipisci at cupiditate, debitis doloremque explicabo laborum
                           minima molestiae nisi non numquam omnis, possimus provident quis recusandae repellendus."
                  />

                  <BlogCard
                     imgSrc="https://yt3.ggpht.com/a/AGF-l79KlLKAvKSNNKYC-ydLHLE76iap1Gef8YtxhA=s900-c-k-c0xffffffff-no-rj-mo"
                     title="Blog Post"
                     text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam atque deleniti fugiat
                           ipsum magni soluta veniam? Adipisci at cupiditate, debitis doloremque explicabo laborum
                           minima molestiae nisi non numquam omnis, possimus provident quis recusandae repellendus."
                  />

               </Col>
               <Col md={3}>
                  <h5 className="mt-4 mb-4">Categories</h5>

                  <Card>
                     <ListGroup variant="flush">
                        <ListGroup.Item>All</ListGroup.Item>
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                     </ListGroup>
                  </Card>

                  <Card className="mt-4" bg="light">
                     <Card.Body>
                        <Card.Title>Info</Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquid architecto
                           dignissimos dolor eius, ipsum molestias natus tempora voluptate?
                        </Card.Text>
                     </Card.Body>
                  </Card>

               </Col>
            </Row>
         </Container>
      );
   }
}

export default Blog;