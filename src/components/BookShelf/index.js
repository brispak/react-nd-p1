import React, { Component } from "react";
import Book from "../Book/index.js";

class BookShelf extends Component {
  render() {
    console.log("2. BookShelf Component", this.props);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => {
              console.log("book map", book);
              return (
                <li>
                  <Book
                    key={book.id}
                    width="128"
                    height="193"
                    imageUrl={book.imageLinks.smallThumbnail}
                    title={book.title}
                    authors="Harper Lee"
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
