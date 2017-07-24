import React, { Component } from "react";
import Book from "../Book/index.js";
import PropTypes from "prop-types";

class BookShelf extends Component {
  render() {
    console.log("2. BookShelf Component", this.props);
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">
              {this.props.shelfTitle}
            </h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map(book => {
                  console.log("book map", book);
                  return (
                    <li key={book.id}>
                      <Book
                        width="128"
                        height="193"
                        imageUrl={book.imageLinks.thumbnail}
                        title={book.title}
                        authors={book.authors[0]}
                      />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.string
};

export default BookShelf;
