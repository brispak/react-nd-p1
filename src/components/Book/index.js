import React, { Component } from "react";
import Selector from "../Selector";

class Book extends Component {
  render() {
    console.log("3. Books component", this.props);
    return <div>Book</div>;
  }
}

// <div className="book">
//   <div className="book-top">
//     <div className="book-cover" style={{
//       width: props.width,
//       height: props.height,
//       backgroundImage: `url(${props.imageUrl})` }}></div>
//     <Selector />
//   </div>
//   <div className="book-title">{props.title}</div>
//   <div className="book-authors">{props.authors}</div>
// </div>

export default Book;
