import React, { Component } from "react";
import Book from "../Book/index.js";
import PropTypes from "prop-types";

class BookShelf extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">
              {this.props.title}
            </h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map(book => {
                  return (
                    <li key={book.id}>
                      <Book
                        width="128"
                        height="193"
                        imageUrl={book.imageLinks.thumbnail}
                        title={book.title}
                        authors={book.authors}
                        onUpdateShelf={shelf => {
                          this.props.onUpdateShelf(book.id, shelf);
                        }}
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
