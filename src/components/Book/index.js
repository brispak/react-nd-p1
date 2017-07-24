import React, { Component } from "react";
import BookShelfChanger from "../BookShelfChanger";

class Book extends Component {
  render() {
    console.log("3. Books component", this.props);
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${this.props.imageUrl}")`
            }}
          />
          <BookShelfChanger />
        </div>
        <div className="book-title">
          {this.props.title}
        </div>
        <div className="book-authors">
          {this.props.authors}
        </div>
      </div>
    );
  }
}

export default Book;
