import React, {Component} from 'react';
import {Media} from "react-bootstrap";

class BlogCard extends Component {
   render() {
      return (
         <Media className="m-4 blog-card">
            <img
               src={this.props.imgSrc}
               width={150}
               height={150}
               className="mr-4"
            />

            <Media.Body>
               <h5>{this.props.title}</h5>
               <p>{this.props.text}</p>
            </Media.Body>
         </Media>
      );
   }
}

export default BlogCard;